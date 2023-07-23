import React from "react";
import FooterSocialIcon from "./footerSocialIcon";
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const socialIcons = [
    {
        href: "#!",
        icon: faFacebook
    },
    {
        href: "#!",
        icon: faTwitter
    },
    {
        href: "#!",
        icon: faGoogle
    },
    {
        href: "#!",
        icon: faInstagram
    },
    {
        href: "#!",
        icon: faLinkedin
    },
    {
        href: "#!",
        icon: faGithub
    }
];


const Footer = () => {
    return (
        <footer className="text-center text-white" style={{
            backgroundColor: "#f1f1f1"
        }}>
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {socialIcons.map((icon, index) => {
                        return (
                            <FooterSocialIcon
                                href={icon.href}
                                icon={icon.icon}
                                key={index}
                            />
                        )
                    })}
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright &nbsp;&nbsp;&nbsp;
                <a className="text-dark" href="#">Pratishthan Software Ventures </a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>

    )
};


export default Footer;