import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const styling = {
    minHeight: "100vh"
};

const linkToLinkedIn = "https://www.linkedin.com/company/pratishthan-software-ventures-pvt.-ltd/mycompany/";

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="container pt-5 mt-5" style={styling}>
                <div className="row text-center">
                    <div className="lead display-3">
                        How may,
                        <span style={{ color: "#d9743f" }}>
                            we help you ?
                        </span>
                    </div>
                    <div className="col-lg-12 py-5 my-5">
                        {`Our dedicated team of experts is here to support you and provide solutions to your queries.
                        Whether you have questions about our products, services, or need professional assistance in your specific area,
                        we are just a message away. Feel free to reach out to us, and we'll be delighted to help you.'}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h1 className="text-center">Contact Us</h1>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Address</h4>
                                <p>
                                    {`Pratishthan Software Ventures Pvt. Ltd.`}
                                    <br />
                                    {`1st Floor, 1st Main, 1st Cross, 1st Block,`}
                                    <br />
                                    {`Koramangala, Bangalore - 560034`}
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <h4>Email</h4>
                                <p>
                                    <a href="mailto:info@pratishthanventures.com" className="text-decoration-none">
                                        {`info@pratishthanventures.com`}
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <Link href={linkToLinkedIn} className="btn btn-primary" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="mx-2"
                                    />
                                    Follow Us On LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8993519435026!2d77.58207571195952!3d12.914189987343379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157334f59545%3A0xccf50e7a046072ca!2sPratishthan%20Software%20Ventures%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1690112838802!5m2!1sen!2sin"
                            max-width="600"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            className="mx-auto col-lg-12 d-flex justify-content-center"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Contact;