import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import backgroundImageSrc from "@/public/background.png";

const styling = {
    backgroundImage: `linear-gradient(180deg, #FFFFFF 19%, #FFFFFF 85%), url(${backgroundImageSrc.src})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundSize: "50%",
    backgroundPosition: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundBlendMode: "multiply" as const,
    position: "relative" as const,
    marginLeft: "auto" as const,
    marginRight: "auto" as const,
    backgroundAttachment: "fixed"
};

const hrStyling = {
    width: "50%",
    height: "0.2rem",
    backgroundColor: "#d9743f",
};

const fontStyling = {
    fontFamily: "Montserrat",
    fontSize: "1.5rem"
};


const About = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5 pt-5" style={styling}>
                <div className="row text-center">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .10,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .3
                            }
                        },
                    }}>
                        <h1>What is <span style={{ color: "#d9743f" }}>Pratishthan</span> ?</h1>
                    </motion.div>
                    <hr style={hrStyling} />
                </div>

                <div className="row justify-content-center m-5">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .9,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .4
                            }
                        },
                    }}>
                        <p style={fontStyling}>
                            Pratishthan is an idea conceived by the Founder, <b>Sharad Hegde in 2014</b>.
                            An idea that was a result of his many years of experience creating world-class service frameworks, solutions and platforms.
                            It was envisaged to be a firm that provides world-class technology solutions to small and medium enterprises (SMEs), startups and larger enterprises.
                            The one thing that would go on to differentiate Pratishthan from others was the clarity that the Pratishthan family would work only on projects where it could bring tangible business value for its clients.
                            <br /><br />
                            The family has grown over the years and they come from all over India and call Bangalore their home. Nestled in the calm environs of a tree-covered office space,
                            we have been putting our experience in fintech, enterprise solutions, technology frameworks and emerging technologies to create an ecosystem that helps the mind thrive and creates a fertile ground for creative solutions.
                            <br /><br />
                            Our people are our biggest assets and they bring with them not just their technical prowess, but also multiple talents. The amalgamation of the left and the right brain functions is what helps us help our clients.
                        </p>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default About;