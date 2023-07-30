import Image from "next/image";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import BaseContactUs from "@/components/baseContactUs";
import logoFull from "@/public/logo-full.png";
import { motion } from "framer-motion";
import CardImage from "@/components/ui/cardImage";
import image1 from "@/public/officePics/a-team-that-eats-together-laughs-together.jpg";
import image2 from "@/public/officePics/celebrating-success.jpg";
import image3 from "@/public/officePics/ethnic-day-2019.jpg";
import drawPF from "@/public/drawPF.png";

const styling = {
    minHeight: "100vh"
};


const images = [
    {
        id: 1,
        src: image2.src,
        title: null,
        description: null
    },
    {
        id: 2,
        src: image3.src,
        title: null,
        description: null
    }
];

const Life = () => {
    return (
        <>
            <NavBar />
            <div className="container pt-5 mt-5">
                <div style={styling}>
                    <div className="row">
                        <h1 className="display-2">We Are a <span style={{ color: "#d9743f" }}>Family</span></h1>
                        <hr style={{
                            width: "80%",
                            height: "0.2rem",
                            backgroundColor: "#d9743f",
                            float: "right"
                        }} />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src={logoFull.src}
                                width={500}
                                height={200}
                                alt="image"
                                className="img-fluid" />
                        </div>
                        <div className="col-lg-5 mt-4">
                            A flat organisation in the real sense, we brainstorm, build proofs-of-concept, decimate assumptions or build on them, and we do this across the table without an iota of hierarchy in the discourse.
                            We work hard, we hang out, we build amazing solutions, we deliver business value to our customers and <b>we do all this and more together.</b>
                        </div>
                    </div>
                    <div className="row pt-5">
                        {images.map((image) => {
                            return (
                                <div className="col-sm-6" key={image.id}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <CardImage image={image} />
                                    </motion.div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="row text-center" style={styling}>
                    <div className="col-lg-12">
                        <motion.div
                            className="display-2"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                        >
                            We are the Pratishthan Family
                        </motion.div>
                        <Image src={drawPF.src}
                            width={700}
                            height={700}
                            alt="image"
                            className="img-fluid pt-3 mt-3" />
                    </div>
                </div>
            </div>
            <BaseContactUs />
            <Footer />
        </>
    );
};

export default Life;