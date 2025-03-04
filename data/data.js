import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { images } from "@/src/utils/images";
import HighlightText from "@/src/components/HighlightText/HighlightText";
import {
    faCode,
    faPenNib,
    faWandMagicSparkles,
    faEnvelope,
    faPhone
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
    }
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

export const projectsData = [
    {
        id: 1,
        name: "Identidad de marca - Treze Studio",
        nameShow: (
            <>
                Identidad de marca - <HighlightTitle>Treze Studio</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad e imagen de marca para el estudio de diseño gráfico Treze Studio.</>,
        role: "Diseñador gráfico",
        date: "Febrero 2025",
        enterprice: "Freelance",
        liveSite: "https://www.instagram.com/treze.st/",
        primaryImage: images.trezestudio.primaryImage,
        images: images.trezestudio.restImages,
        cardColor: "#3C3CC7",
        backgroundColor: "#3C3CC780",
    },
    {
        id: 2,
        name: "Identidad de marca - Treze Studio",
        nameShow: (
            <>
                Identidad de marca - <HighlightTitle>Treze Studio</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad e imagen de marca para el estudio de diseño gráfico Treze Studio.</>,
        role: "Diseñador gráfico",
        date: "Abril 2024",
        enterprice: "Freelance",
        liveSite: "https://www.instagram.com/treze.st/",
        primaryImage: images.trezestudio.primaryImage,
        images: images.trezestudio.restImages,
        cardColor: "#3C3CC7",
        backgroundColor: "#3C3CC780",
    },
    {
        id: 3,
        name: "Identidad de marca - Treze Studio",
        nameShow: (
            <>
                Identidad de marca - <HighlightTitle>Treze Studio</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad e imagen de marca para el estudio de diseño gráfico Treze Studio.</>,
        role: "Diseñador gráfico",
        date: "Abril 2024",
        enterprice: "Freelance",
        // liveSite: "https://www.behance.net/gallery/217513627/Identidad-de-marca-de-Treze-Studio"
        livesite: "https://www.instagram.com/treze.st/",
        primaryImage: images.trezestudio.primaryImage,
        images: images.trezestudio.restImages,
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
        icon: (faPhone),
    }
]