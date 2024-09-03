import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import nortfam_first from "@/assets/images/nortfamdribbble-min.jpg";
import nortfam_second from "@/assets/images/nortfam2dribbble-min.jpg";
import nortepuro from "@/assets/images/nortepuro-min.jpg";
import karma from "@/assets/images/karmaexhaustdribbble-min.jpg";
import trezeStudio from "@/assets/images/trezestudio_logofolio-min.jpg";
import trezeStudioOld from "@/assets/images/trezestudio_logo_concepts-min.jpg";
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
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Mí", href: "/sobremi" },
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
    {
        name: "Dribbble",
        link: "https://dribbble.com/trezestudio",
        icon: faDribbble,
        color: "#f4588e",
    },
];

export const dribbblePics = [
    {
        link: "https://dribbble.com/shots/24040374--Treze-Studio-Custom-types",
        img: trezeStudio,
    },
    {
        link: "https://dribbble.com/shots/23960779--Treze-Studio-logo-concepts",
        img: trezeStudioOld,
    },
    {
        link: "https://dribbble.com/shots/14168290-Karma-Exhaust-lettering-logo",
        img: karma,
    },
    {
        link: "https://dribbble.com/shots/12345662-Nortfam",
        img: nortfam_second,
    },
    {
        link: "https://dribbble.com/shots/11104700-Nortfam",
        img: nortfam_first,
    },
    {
        link: "https://dribbble.com/shots/10852035-Nortepuro-shop-Lettering-logo",
        img: nortepuro,
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

export const projectsCardData = [
    {
        id: 1,
        name: "Logofolio - Treze Studio",
        description: <>Remodelando la imagen de Treze Studio.</>,
        img: trezeStudio,
        color: "#005f14",
    },
    {
        id: 2,
        name: "Logo - Nortepuro",
        description: <>Creando la identidad de Norteputo Shop.</>,
        img: nortepuro,
        color: "#A76400",
    },
];

export const projectsDetailsData = [
    {
        id: 1,
        name: (
            <>
                Logofolio - <HighlightTitle>Treze Studio</HighlightTitle>
            </>
        ),
        description: <>Remodelando la imagen de Treze Studio.</>,
        images: [trezeStudio, trezeStudio, trezeStudio],
        color: "#3dc95a80",
    },
    {
        id: 2,
        name: (
            <>
                Logo - <HighlightTitle>Nortepuro</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad de Norteputo Shop.</>,
        images: [nortepuro, nortepuro, nortepuro],
        color: "#f1af4a80",
    },
];

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