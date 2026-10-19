"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    MdCheck,
    MdContentCopy,
    MdMailOutline,
    MdReplay,
} from "react-icons/md";
import TearTicket from "@/src/components/ui/TearTicket";
import Image from "next/image";
import profilePicColor from "@/assets/images/profile_pic_color.jpg";

const EMAIL = "ydefuente@gmail.com";

const BARCODE_LENGTH = 150; // alto del código en px
const BARCODE_NUMBER = "20261017001";

const MESSAGES = {
    idle: "Aquí tienes mi correo",
    copied: "¡Correo copiado al portapapeles!",
    failed: "Toca «Copiar» para llevártelo al portapapeles",
};

// Genera un codigo de barras
function makeBarcode(seed, length) {
    let s = seed;
    const rand = () => {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    // Barras finas, con alguna algo más gruesa
    const barW = () => {
        const r = rand();
        // return r < 0.45 ? 0.75 : r < 0.85 ? 1.2 : 1.8;
        return r < 0.45 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 1.5 : 2;
    };
    // Huecos más amplios = menos barras en total
    const gapW = () => {
        const r = rand();
        return r < 0.5 ? 2.5 : r < 0.8 ? 4 : 6;
    };

    const bars = [];
    let pos = 0;
    while (pos < length) {
        const h = Math.min(barW(), length - pos);
        bars.push({ y: pos, h });
        pos += h + gapW();
    }
    return bars;
}

function legacyCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText =
        "position:fixed;top:0;left:0;opacity:0;pointer-events:none;font-size:16px";
    document.body.appendChild(ta);
    ta.focus({ preventScroll: true });
    ta.select();
    ta.setSelectionRange(0, text.length);
    let ok = false;
    try {
        ok = document.execCommand("copy");
    } catch {}
    document.body.removeChild(ta);
    return ok;
}

async function copyText(text) {
    if (navigator.clipboard?.writeText) {
        try {
            // Se inicia en el mismo tick del gesto, que es lo que exige Safari
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return false;
        }
    }
    return legacyCopy(text);
}

const BARCODE = makeBarcode(75088, BARCODE_LENGTH);

const buttonClass =
    "custom-button shine-hover flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm text-neutral-100 cursor-pointer";

function TicketBody({ torn }) {
    return (
        <div className="flex h-full flex-col justify-between p-5">
            <div>
                <p className="jetbrainsmono-regular text-[10px] uppercase tracking-[0.3em] opacity-60">
                    Ticket · Contacto
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight">
                    Hablemos...
                </h2>
                <div className="text-sm">
                    <p className="opacity-70 m-0">
                        Desarrollador Front-End / Diseñador Gráfico.
                    </p>
                    <div className="flex justify-between w-full mt-1">
                        <span className="text-(--accent-color) opacity-100">
                            Yubal De Fuente
                        </span>
                        <div className="h-22 w-18 overflow-hidden rounded-lg">
                            <Image
                                src={profilePicColor}
                                className={`object-contain scale-165 transition-all duration-300 ${torn ? "saturate-0" : "saturate-90"}`}
                                alt="foto de perfil"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="jetbrainsmono-regular text-[10px] opacity-60">
                <p>Admite: 1 proyecto</p>
                <p>Válido: siempre</p>
            </div>
        </div>
    );
}

function TicketStub() {
    return (
        <div className="flex h-full flex-col items-center p-5 justify-between">
            <span className="jetbrainsmono-regular text-[10px] uppercase tracking-[0.25em] opacity-70">
                Arranca aquí
            </span>
            <div
                className="flex items-center justify-center gap-1"
                aria-hidden="true"
            >
                <svg
                    className="w-16.25"
                    style={{ height: BARCODE_LENGTH }}
                    viewBox={`0 0 100 ${BARCODE_LENGTH}`}
                    preserveAspectRatio="none"
                    shapeRendering="crispEdges"
                    fill="var(--ticket-ink)"
                >
                    {BARCODE.map((b) => (
                        <rect
                            key={b.y}
                            x="0"
                            y={b.y}
                            width="100"
                            height={b.h}
                        />
                    ))}
                </svg>
                {/* <span className="jetbrainsmono-regular text-[8px] tracking-[0.5em] opacity-80 [writing-mode:sideways-lr]">
                    {BARCODE_NUMBER}
                </span> */}
            </div>
            <span className="jetbrainsmono-regular text-[10px] tracking-[0.2em] opacity-80">
                N.º 0001
            </span>
        </div>
    );
}

function ContactTicket() {
    const [torn, setTorn] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | copied | failed
    const timer = useRef(null);
    const detached = useRef(false);

    useEffect(() => () => clearTimeout(timer.current), []);

    const copyEmail = async () => {
        clearTimeout(timer.current);
        const ok = await copyText(EMAIL);
        setStatus(ok ? "copied" : "failed");
        if (ok) timer.current = setTimeout(() => setStatus("idle"), 2500);
    };

    // Se dispara al soltar el trozo: aún estamos dentro del gesto
    const handleDetach = () => {
        detached.current = true;
        copyEmail();
    };

    // Se dispara al terminar la caída (o al arrancarlo con teclado)
    const handleTear = () => {
        setTorn(true);
        if (!detached.current) copyEmail(); // teclado: no hubo "soltar"
        detached.current = false;
    };

    const handleReset = () => {
        setTorn(false);
        setStatus("idle");
    };

    return (
        <div className="flex w-full flex-col items-center">
            <TearTicket
                torn={torn}
                notch={8}
                onTear={handleTear}
                onDetach={handleDetach}
                width={460}
                height={250}
                stubSize={150}
                parallax={8}
                tiltMax={6}
                borderWidth={2}
                background="var(--ticket-bg)"
                stubBackground="var(--ticket-stub-bg)"
                color="var(--ticket-ink)"
                stub={<TicketStub />}
                ariaLabel="Arranca el ticket para copiar mi correo"
            >
                <TicketBody torn={torn} />
            </TearTicket>

            <div className="mt-6 min-h-24 text-center">
                <AnimatePresence mode="wait">
                    {!torn ? (
                        <motion.div
                            key="hint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.15 },
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <p className="flex jetbrainsmono-regular text-sm opacity-70">
                                ¡Rompe el ticket! 🡥
                            </p>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="text-xs underline underline-offset-4 opacity-50 hover:opacity-100"
                            >
                                o escríbeme sin arrancar nada
                            </a>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="revealed"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.3, duration: 0.3 },
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                                transition: { duration: 0.15 },
                            }}
                            className="flex flex-col items-center gap-3"
                            aria-live="polite"
                        >
                            <p className="text-sm opacity-70">
                                {MESSAGES[status]}
                            </p>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="jetbrainsmono-regular text-lg underline underline-offset-4"
                            >
                                {EMAIL}
                            </a>
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    onClick={copyEmail}
                                    className={buttonClass}
                                >
                                    {status === "copied" ? (
                                        <MdCheck />
                                    ) : (
                                        <MdContentCopy />
                                    )}
                                    {status === "copied" ? "Copiado" : "Copiar"}
                                </button>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className={buttonClass}
                                >
                                    <MdMailOutline /> Escribir correo
                                </a>
                                <button
                                    onClick={handleReset}
                                    className={buttonClass}
                                >
                                    <MdReplay /> Volver a pegar
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default ContactTicket;
