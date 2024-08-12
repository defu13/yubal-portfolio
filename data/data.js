import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import nortfam_first from "@/assets/images/nortfamdribbble-min.jpg"
import nortfam_second from "@/assets/images/nortfam2dribbble-min.jpg"
import nortepuro from "@/assets/images/nortepuro-min.jpg"
import karma from "@/assets/images/karmaexhaustdribbble-min.jpg"
import trezeStudio from "@/assets/images/trezestudio_logofolio-min.jpg";
import trezeStudioOld from "@/assets/images/trezestudio_logo_concepts-min.jpg";

export const socialLinks = [
    {
        name: "github",
        link: "https://github.com/defu13",
        icon: faGithub,
        color: "#2dba4e",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/y-defuente/",
        icon: faLinkedin,
        color: "#0e76a8",
    },
    {
        name: "instagram",
        link: "https://www.instagram.com/treze.st/",
        icon: faInstagram,
        color: "#EE2AB6",
    },
    {
        name: "dribbble",
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
    }
];