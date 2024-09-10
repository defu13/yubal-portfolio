import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { images } from "@/assets/assets";
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
    {
        name: "Dribbble",
        link: "https://dribbble.com/trezestudio",
        icon: faDribbble,
        color: "#f4588e",
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

export const projectsData = [
    {
        id: 1,
        name: "Logofolio - Treze Studio",
        nameShow: (
            <>
                Logofolio - <HighlightTitle>Treze Studio</HighlightTitle>
            </>
        ),
        description: <>Remodelando la imagen de Treze Studio.</>,
        role: "Diseñador gráfico",
        date: "Abril 2024",
        enterprice: "Freelance",
        liveSite: null,
        primaryImage: images.trezeStudio,
        images: [images.trezeStudio, images.trezeStudio, images.trezeStudio],
        cardColor: "#005f14",
        backgroundColor: "#3dc95a80",
    },
    {
        id: 2,
        name: "Logo - Nortepuro",
        nameShow: (
            <>
                Logo - <HighlightTitle>Nortepuro</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad de Norteputo Shop.</>,
        role: "Diseñador gráfico",
        date: "Marzo 2020",
        enterprice: "Freelance",
        liveSite: "https://www.instagram.com/nortepuro/",
        primaryImage: images.nortepuro,
        images: [images.nortepuro_1, images.nortepuro_2, images.nortepuro_3],
        cardColor: "#A76400",
        backgroundColor: "#f1af4a80",
    },
    {
        id: 3,
        name: "Logo - Nortepuro",
        nameShow: (
            <>
                Logo - <HighlightTitle>Nortepuro</HighlightTitle>
            </>
        ),
        description: <>Creando la identidad de Norteputo Shop.</>,
        role: "Diseñador gráfico",
        date: "Marzo 2020",
        enterprice: "Freelance",
        liveSite: null,
        primaryImage: images.nortepuro,
        images: [images.nortepuro_1, images.nortepuro_2, images.nortepuro_3],
        cardColor: "#A76400",
        backgroundColor: "#f1af4a80",
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