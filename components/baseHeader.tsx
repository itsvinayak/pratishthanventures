import React from "react";
import baseHeaderBackground from "../public/baseHeaderBackground.png";

const styling = {
    backgroundImage: `url( ${baseHeaderBackground.src} )`,
    backgroundPosition: "center",
    height: "100vh",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const BaseHeader = () => {
    return (
        <div
            className="container-fluid px-0 mb-5 header-main d-flex align-items-center justify-content-center"
            style={styling}
        >
            <div className="row mx-5">
                <div className="col-lg-7 text-start">
                    <h1 className="display-4 text-dark mb-5">
                        A Technology Firm that Partners in your Growth
                    </h1>
                    <p className="lead text-dark mb-5">
                        {`We are who you find when you're looking for a technology partner`}
                    </p>
                </div>
            </div>
        </div>
    )
};


export default BaseHeader;