"use client"

import AsciiFlash from "../AsciiFlash/AsciiFlash"
import styles from "./AsciiFlashGroup.module.css"

export default function AsciiFlashGroup({ color = "#917AFF" }) {
  const stars = [
    { size: "0.6rem", top: "25%", left: "0%", delay: 0 },
    { size: "0.9rem", top: "30%", left: "30%", delay: 200 },
    { size: "0.5rem", top: "15%", left: "70%", delay: 400 },
  ]

  return (
    <div className={styles.group}>
      {stars.map((star, i) => (
        <AsciiFlash
          key={i}
          color={color}
          size={star.size}
          delay={star.delay}
          top={star.top}
          left={star.left}
        />
      ))}
    </div>
  )
}