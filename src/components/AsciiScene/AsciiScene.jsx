"use client"

import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Mesh, MeshStandardMaterial, Vector2 } from "three"
import { AsciiEffect } from "../AsciiEffect/AsciiEffect"
import { useIsMobile } from "@/src/hooks/useIsMobile"
import { useDarkMode } from "@/src/hooks/useDarkMode"
import { useTheme } from "@/src/context/ThemeContext"

function UserModel(props) {
  const { scene } = useGLTF("/models/user-model.glb")

  const basicMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#917AFF",
        roughness: 0.12,
        metalness: 0,
        flatShading: false,
      }),
    []
  )

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        const originalMat = obj.material
        if (originalMat && originalMat.dispose && originalMat !== basicMat) {
          try {
            originalMat.dispose()
          } catch (e) {}
        }
        obj.material = basicMat
      }
    })

    return () => {
      try {
        if (basicMat && typeof basicMat.dispose === "function") {
          basicMat.dispose()
        }
      } catch (e) {}
    }
  }, [scene, basicMat])

  return <primitive object={scene} {...props} />
}

useGLTF.preload("/models/user-model.glb")

const AUTO_ROTATE_SPEED = 0.2
const HOVER_SPIN_MULTIPLIER = 2
const TILT_FORWARD = 0.3
const TILT_LEFT = -0.08
const CAMERA_BASE_Z = 4.5
const CAMERA_ZOOMED_Z = CAMERA_BASE_Z / 1.1

function DraggableUserModel({ isHovered = false }) {
  const groupRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })
  const autoY = useRef(0)
  const isMobile = useIsMobile()
  const modelScale = isMobile ? 1.75 : 3
  const modelYpos = isMobile ? -1.5 : -3

  const spinSpeed = isHovered ? AUTO_ROTATE_SPEED * HOVER_SPIN_MULTIPLIER : AUTO_ROTATE_SPEED

  useFrame((_, delta) => {
    if (!groupRef.current) return
    if (!isDragging.current) {
      autoY.current += delta * spinSpeed
    }
    groupRef.current.rotation.x = rotation.x + TILT_FORWARD
    groupRef.current.rotation.y = rotation.y + autoY.current
    groupRef.current.rotation.z = TILT_LEFT
  })

  useEffect(() => {
    const container = document.querySelector("[data-model-canvas-container]")
    if (!container) return

    const onPointerDown = (e) => {
      if (e.target.closest("canvas")) {
        isDragging.current = true
        lastPointer.current = { x: e.clientX, y: e.clientY }
      }
    }

    const onPointerMove = (e) => {
      if (!isDragging.current) return
      const dx = (e.clientX - lastPointer.current.x) * 0.005
      const dy = (e.clientY - lastPointer.current.y) * 0.005
      lastPointer.current = { x: e.clientX, y: e.clientY }
      setRotation((r) => ({ x: r.x - dy, y: r.y + dx }))
    }

    const onPointerUp = () => {
      isDragging.current = false
    }

    container.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    return () => {
      container.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }
  }, [])

  return (
    <group ref={groupRef} position={[0, modelYpos, 0]}>
      <UserModel scale={modelScale} />
    </group>
  )
}

function CameraHoverZoom({ isHovered = false }) {
  const { camera } = useThree()
  useFrame(() => {
    const targetZ = isHovered ? CAMERA_ZOOMED_Z : CAMERA_BASE_Z
    camera.position.z += (targetZ - camera.position.z) * 0.08
    camera.position.x += (0 - camera.position.x) * 0.08
    camera.position.y += (0 - camera.position.y) * 0.08
  })
  return null
}

function SceneWithDelayedComposer({ resolution, mousePos, enableZoom = true, isHovered = false, tintColor = "#917AFF" }) {
  const { gl } = useThree()
  const [composerReady, setComposerReady] = useState(false)
  const frameCount = useRef(0)

  useFrame(() => {
    frameCount.current++
    if (frameCount.current >= 3 && !composerReady) {
      setTimeout(() => {
        try {
          const context = gl.getContext()
          if (context && !context.isContextLost?.()) {
            setComposerReady(true)
          }
        } catch (e) {}
      }, 100)
    }
  })

  return (
    <>
      {/* <color attach="background" args={["#000000"]} /> */}
      <Environment preset="studio" background={false} />
      <ambientLight intensity={0.08} />
      <directionalLight position={[2, 3.5, 6]} intensity={6} />
      <directionalLight position={[-2, 1.5, 4]} intensity={0.35} />
      <CameraHoverZoom isHovered={isHovered} />
      <Suspense fallback={null}>
        <DraggableUserModel isHovered={isHovered} />
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={enableZoom} enablePan={false} />
      {composerReady && (
        <EffectComposer>
          <AsciiEffect
            style="standard"
            cellSize={9}
            invert={true}
            color={true}
            characterSet="terminal"
            volumeShading={true}
            tintColor={tintColor}
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              contrastAdjust: 1.8,
              brightnessAdjust: 0,
            }}
          />
        </EffectComposer>
      )}
    </>
  )
}

export default function AsciiScene({ className, enableZoom = true }) {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos] = useState(() => new Vector2(0, 0))
  const [resolution] = useState(() => new Vector2(1920, 1080))
  const isDark = useDarkMode()
  const tintColorValue = isDark ? "#917AFF" : "#251445"

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateResolution = () => {
      const rect = container.getBoundingClientRect()
      resolution.set(rect.width || 1920, rect.height || 1080)
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = rect.height - (e.clientY - rect.top)
      mousePos.set(x, y)
    }

    updateResolution()
    const ro = new ResizeObserver(updateResolution)
    ro.observe(container)
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      ro.disconnect()
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePos, resolution])

  return (
    <div
      ref={containerRef}
      data-model-canvas-container
      className={className}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        height: className ? "100%" : "100vh",
        minHeight: className ? 300 : undefined,
      }}
    >
      <Canvas
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)}
        camera={{ position: [0, 0, CAMERA_BASE_Z], fov: 50 }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 0.6

          const handleContextLost = (event) => {
            event.preventDefault()
            console.warn("WebGL context lost. Attempting to restore...")
          }

          const handleContextRestored = () => {
            console.log("WebGL context restored")
          }

          gl.domElement.addEventListener("webglcontextlost", handleContextLost)
          gl.domElement.addEventListener("webglcontextrestored", handleContextRestored)

          return () => {
            gl.domElement.removeEventListener("webglcontextlost", handleContextLost)
            gl.domElement.removeEventListener("webglcontextrestored", handleContextRestored)
          }
        }}
      >
        <SceneWithDelayedComposer
          resolution={resolution}
          mousePos={mousePos}
          enableZoom={enableZoom}
          isHovered={isHovered}
          tintColor={tintColorValue}
        />
      </Canvas>
    </div>
  )
}