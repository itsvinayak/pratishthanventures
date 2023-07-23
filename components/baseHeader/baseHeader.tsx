import React from "react";
import baseHeaderBackground from "../../public/baseHeaderBackground.png";

const styling = {
    backgroundImage: `url( ${baseHeaderBackground.src} )`,
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100vw",
    position: "relative" as const,
    marginLeft: "auto" as const,
    marginRight: "auto" as const,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const BaseHeader = () => {
    return (
        <>
            <div
                className="container-fluid mb-5 d-flex align-items-center justify-content-center flex-column"
                style={styling}
            >
                <div className="row mx-5">
                    <div className="col-lg-7 baseHeader">
                        <h1 className="display-5 text-dark mb-5">
                            A Technology Firm that Partners in your Growth
                        </h1>
                        <p className="lead text-dark mb-5">
                            {`We are who you find when you're looking for a technology partner`}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};


export default BaseHeader;