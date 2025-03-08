import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { projectImages } from "@/src/utils/images";
import HighlightText from "@/src/components/HighlightText/HighlightText";
import {
    faCode,
    faPenNib,
    faWandMagicSparkles,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import photoshopIcon from "@/assets/images/icons/adobephotoshop.svg";
import illustratorIcon from "@/assets/images/icons/adobeillustrator.svg";
import framerIcon from "@/assets/images/icons/framer.svg";
import nextIcon from "@/assets/images/icons/nextdotjs.svg";
import reactIcon from "@/assets/images/icons/react.svg";
import sassIcon from "@/assets/images/icons/sass.svg";
import tailwindIcon from "@/assets/images/icons/tailwindcss.svg";
import npmIcon from "@/assets/images/icons/npm.svg";
import lightroomIcon from "@/assets/images/icons/adobelightroom.svg";
import HighlightTitle from "@/src/components/HighlightTitle/HighlightTitle";
import Title from "@/src/components/Title/Title";
import Link from "next/link";

export const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/myprojects" },
    { name: "Sobre Mí", href: "/about" },
];

export const socialLinks = [
    {
        name: "Github",
        link: "https://github.com/defu13",
        icon: faGithub,
        color: "#2dba4e",
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/y-defuente/",
        icon: faLinkedin,
        color: "#0e76a8",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/treze.st/",
        icon: faInstagram,
        color: "#EE2AB6",
    },
    // {
    //     name: "Dribbble",
    //     link: "https://dribbble.com/trezestudio",
    //     icon: faDribbble,
    //     color: "#f4588e",
    // },
    {
        name: "Behance",
        link: "https://www.behance.net/trezestudio",
        icon: faBehance,
        color: "#0057ff",
    },
];

export const skillsData = [
    {
        number: "01",
        title: "Desarrollo",
        icon: faCode,
        description: (
            <>
                Me gusta crear experiencias dinámicas y funcionales. Me
                especializo en&nbsp;
                <HighlightText>React y Next.js</HighlightText>, tecnologías muy
                útiles para crear aplicaciones web eficientes y modernas.
            </>
        ),
        skills: [
            { name: "React", icon: reactIcon },
            { name: "Next.js", icon: nextIcon },
            { name: "Npm", icon: npmIcon },
        ],
    },
    {
        number: "02",
        title: "Diseño",
        icon: faWandMagicSparkles,
        description: (
            <>
                Con un enfoque importante en&nbsp;
                <HighlightText>UI/UX</HighlightText>, me centro en diseñar
                interfaces intuitivas y fluidas, que conecten de manera natural
                con los usuarios. Consigo crear experiencias atractivas
                utilizando animaciones y teniendo en cuenta la responsividad.
            </>
        ),
        skills: [
            { name: "Framer motion", icon: framerIcon },
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "Sass", icon: sassIcon },
        ],
    },
    {
        number: "03",
        title: "Diseño gráfico",
        icon: faPenNib,
        description: (
            <>
                Desde mi adolescencia, he encontrado una gran pasión por el
                mundo del diseño gráfico y he aprendido a diseñar&nbsp;
                <HighlightText>identidades de marca, logotipos</HighlightText>,
                etc. Me encanta convertir ideas en imágenes atractivas y únicas,
                logrando una armonía visual en todo mi trabajo.
            </>
        ),
        skills: [
            { name: "Photoshop", icon: photoshopIcon },
            { name: "Illustrator", icon: illustratorIcon },
            { name: "Lightroom", icon: lightroomIcon },
        ],
    },
];

// El orden de la lista va ordenado de proyecto más antiguo a más reciente
export const projectsData = [
    {
        id: 1,
        name: "Nortepuro - Diseño de logotipo",
        description: (
            <>
                Logotipo personalizado para una marca de productos urbanos con
                mucha personalidad, "Nortepuro Shop".
            </>
        ),
        role: "Diseñador gráfico",
        date: "Marzo 2020",
        enterprice: "Independiente",
        liveSite: "https://www.instagram.com/nortepuro/",
        primaryImage: projectImages.nortepuro.primaryImage,
        images: projectImages.nortepuro.restImages,
        cardColor: "#b15a0c",
        backgroundColor: "#8f671c80",
    },
    {
        id: 2,
        name: "Treze Studio - Identidad de marca",
        description:
            "Creando la identidad e imagen de marca para el estudio de diseño gráfico Treze Studio.",

        role: "Diseñador gráfico",
        date: "Febrero 2025",
        enterprice: "Independiente",
        liveSite: "https://www.instagram.com/treze.st/",
        primaryImage: projectImages.trezestudio.primaryImage,
        images: projectImages.trezestudio.restImages,
        cardColor: "#3C3CC7",
        backgroundColor: "#3C3CC780",
    },
    {
        id: 3,
        name: "Treze Studio - Identidad de marca",
        description:
            "Creando la identidad e imagen de marca para el estudio de diseño gráfico Treze Studio.",

        role: "Diseñador gráfico",
        date: "Febrero 2025",
        enterprice: "Independiente",
        liveSite: "https://www.instagram.com/treze.st/",
        primaryImage: projectImages.trezestudio.primaryImage,
        images: projectImages.trezestudio.restImages,
        cardColor: "#3C3CC7",
        backgroundColor: "#3C3CC780",
    },
]; // TODO añadir proyectos

export const contactData = [
    {
        name: "Email",
        description: "ydefuente@gmail.com",
        link: "mailto:ydefuente@gmail.com",
        icon: faEnvelope,
    },
    {
        name: "Teléfono",
        description: "+34 635 372 397",
        link: "tel:+34635372397",
        icon: faPhone,
    },
];

export const aboutMeData = {
    title: "Sobre Mí",
    description: (
        <>
            <Title>
                En constante evolución y&nbsp;
                <HighlightTitle>aprendizaje.</HighlightTitle>
            </Title>
        </>
    ),
    text: [
        {
            text: (
                <>
                    <p>
                        Desde siempre me ha apasionado el diseño gráfico y la
                        fotografía, explorando y aprendiendo por mi cuenta.
                    </p>
                    <p>
                        También me atrae el lado más técnico, como la
                        programación enfocada en diseño e interfaces, porque me
                        motiva convertir ideas en experiencias visuales
                        funcionales y bien estructuradas.
                    </p>
                    <p>
                        Soy una persona que cuida los detalles, siempre buscando
                        mejorar y pulir cada proyecto.
                    </p>
                </>
            ),
        },
        {
            text: (
                <>
                    <p>
                        La fotografía es una de mis grandes pasiones, ya que me
                        permite contar historias a través de la luz, la
                        composición y los detalles.
                    </p>
                    <p>
                        Me encanta viajar y conocer nuevos lugares, capturando
                        momentos y emociones que me inspiran a seguir creando,
                        siendo la fotografía callejera una de mis
                        especialidades.
                    </p>
                    <p>
                        Esta disciplina me ha enseñado a ver el mundo de una
                        manera diferente, y complementa perfectamente mi trabajo
                        como diseñador gráfico.
                    </p>
                </>
            ),
        },
        {
            text: (
                <>
                    <p>
                        El diseño gráfico ha sido una pasión para mí desde
                        siempre. Desde que descubrí el impacto visual de una
                        identidad bien construida, me sentí atraído por el
                        diseño de logotipos, explorando formas, tipografías y
                        colores para transmitir mensajes de manera efectiva.
                    </p>
                    <p>
                        Con el tiempo, mi interés se expandió a otros ámbitos
                        del diseño, permitiéndome comprender su importancia en
                        la comunicación y en la construcción de marcas. Me
                        fascina la capacidad del diseño para dar vida a ideas,
                        conectar con las personas y crear experiencias visuales
                        memorables.
                    </p>
                    <p>
                        Siempre estoy buscando nuevas formas de mejorar,
                        experimentando y aprendiendo para perfeccionar cada
                        detalle en mis proyectos.
                    </p>
                </>
            ),
        },
        {
            text: (
                <>
                    <p>
                        Con el tiempo y la experiencia, nació{" "}
                        <Link href={`/myprojects/1`} className="italic link">
                            <HighlightText>
                                &quot;<u>Treze Studio</u>&quot;
                            </HighlightText>
                        </Link>
                        , mi propio proyecto de diseño gráfico. Este estudio
                        representa mi crecimiento, mi estilo y mi manera de
                        entender la identidad visual.
                    </p>
                    <p>
                        Ha sido un motor de aprendizaje y motivación,
                        impulsándome a seguir explorando, creando y aprendiendo
                        con cada trabajo, convirtiéndose en una pieza clave en
                        mi desarrollo profesional y personal.
                    </p>
                </>
            ),
        },
    ],
};
