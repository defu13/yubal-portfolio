"use client";
import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useReducedMotion,
    useSpring,
    useTransform,
} from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "@/data/data";
import DotTitle from "../DotTitle/DotTitle";
import { useLayoutEffect, useRef } from "react";
import { useTheme } from "@/src/context/ThemeContext";
import Globe from "../Globe/Globe";

// projectsData va de más antiguo a más reciente: cogemos los 3 últimos y los damos la vuelta
const latestProjects = projectsData.slice(-3).reverse();

// Muesca del troquel: del mismo color que el fondo de la página
// const notch = "absolute size-6 rounded-full bg-[#dddddd] dark:bg-[#101010]";

function TiltImage({ src, alt, sizes, className = "" }) {
    const reduce = useReducedMotion();
    const x = useSpring(0, { stiffness: 200, damping: 20 });
    const y = useSpring(0, { stiffness: 200, damping: 20 });
    const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
    const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);

    const handleMove = (e) => {
        if (reduce || e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    };
    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className={`relative [perspective:900px] ${className}`}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            <motion.div
                className="absolute inset-0 overflow-hidden rounded-xl"
                style={reduce ? undefined : { rotateX, rotateY }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}

function ProjectCard({ project, featured = false, delay = 0 }) {
    const {
        id,
        name,
        publicName,
        description,
        role,
        date,
        liveSite,
        primaryImage,
        cardColor,
        backgroundColor,
    } = project;

    const [title, ...rest] = name.split(" - ");
    const subtitle = rest.join(" - ");

    const cardRef = useRef(null);
    const sepRef = useRef(null);

    const { theme } = useTheme();

    // Mide dónde cae el troquel para que la máscara recorte las muescas ahí
    useLayoutEffect(() => {
        const card = cardRef.current;
        const sep = sepRef.current;
        if (!card || !sep) return;

        const measure = () => {
            const vertical = sep.offsetHeight > sep.offsetWidth;
            card.dataset.notch = vertical ? "x" : "y";
            card.style.setProperty(
                "--notch-x",
                `${card.clientLeft + sep.offsetLeft + sep.offsetWidth / 2}px`,
            );
            card.style.setProperty(
                "--notch-y",
                `${card.clientTop + sep.offsetTop + sep.offsetHeight / 2}px`,
            );
        };

        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(card);
        return () => ro.disconnect();
    }, []);

    return (
        <motion.div
            className={`relative isolate ${featured ? "md:col-span-2" : ""}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {/* Resplandor de color: va detrás, así se ve a través de las muescas */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 -bottom-4 top-1/2 -z-10 rounded-3xl opacity-30 blur-3xl"
                style={{ backgroundColor: cardColor }}
            />

            {/* Ya no hay <Link> envolviendo la tarjeta */}
            <article
                ref={cardRef}
                className={`ticket-card relative h-full rounded-2xl border bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors duration-300 ${
                    featured
                        ? "grid grid-cols-1 md:grid-cols-[1.2fr_auto_1fr]"
                        : "flex flex-col"
                }`}
                style={{
                    backgroundImage: `linear-gradient(135deg, ${backgroundColor}, transparent 55%)`,
                    border: `1px solid #f2f2f21a`,
                }}
            >
                {/* Imagen principal: enlace propio (hermano, no anidado) */}
                <div className="p-3">
                    <Link
                        href={`/myprojects/${id}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className="relative z-2 block h-full"
                    >
                        <TiltImage
                            src={primaryImage}
                            alt={name}
                            sizes={
                                featured
                                    ? "(min-width: 768px) 55vw, 100vw"
                                    : "(min-width: 768px) 45vw, 100vw"
                            }
                            className={
                                featured
                                    ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[380px]"
                                    : "aspect-[16/10]"
                            }
                        />
                    </Link>
                </div>

                {/* Línea del troquel (las muescas las hace la máscara) */}
                <div
                    ref={sepRef}
                    aria-hidden="true"
                    className={`pointer-events-none border-neutral-500/50 ${
                        featured
                            ? "h-0 border-t border-dashed md:h-auto md:w-0 md:border-t-0 md:border-l"
                            : "h-0 border-t border-dashed"
                    }`}
                />

                {/* Información resumida */}
                <div
                    className={`flex flex-1 flex-col justify-between gap-6 ${
                        featured ? "p-6 md:p-8" : "p-5"
                    }`}
                >
                    <div className="flex flex-col gap-3">
                        <div className="jetbrainsmono-regular flex items-center justify-between text-xs uppercase tracking-[0.2em] opacity-70">
                            <span className="flex items-center gap-2">
                                <span
                                    className="size-2 rounded-full"
                                    style={{ backgroundColor: cardColor }}
                                />
                                N.º {String(id).padStart(2, "0")}
                            </span>
                            <span>{date}</span>
                        </div>

                        <div>
                            <h3
                                className={`font-bold leading-tight ${
                                    featured
                                        ? "text-3xl md:text-4xl"
                                        : "text-2xl"
                                }`}
                            >
                                {/* Enlace estirado: el ::after cubre toda la tarjeta */}
                                <Link
                                    href={`/myprojects/${id}`}
                                    className="after:absolute after:inset-0 after:z-1 after:rounded-2xl after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2"
                                >
                                    {title}
                                </Link>
                            </h3>
                            {subtitle && (
                                <p className="mt-1 text-sm opacity-70">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <p className="line-clamp-3 text-sm opacity-80">
                            {description}
                        </p>

                        <p className="jetbrainsmono-regular text-xs opacity-60">
                            {role}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {/* Solo aparece si el proyecto tiene livesite */}
                        {liveSite && (
                            <a
                                href={liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="custom-button shine-hover relative z-[2] inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm text-neutral-100"
                                style={{
                                    backgroundColor:
                                        cardColor +
                                        (theme === "dark" ? "50" : "ad"),
                                }}
                            >
                                Visitar
                                <Globe width={16} height={16} />
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

function LatestProjects() {
    return (
        <div className="mx-auto w-full max-w-6xl" id="latest-projects">
            <header className="mb-12 flex flex-col gap-3">
                <DotTitle>Proyectos</DotTitle>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {latestProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        featured={index === 0}
                        delay={index === 0 ? 0 : (index - 1) * 0.12}
                    />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Link
                    href="/myprojects"
                    className="jetbrainsmono-regular text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
                >
                    Ver todos los proyectos
                </Link>
            </div>
        </div>
    );
}

export default LatestProjects;
