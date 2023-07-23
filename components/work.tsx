import React from "react";

const styling = {
    height: "100vh"
};

const Work = () => {
    return (
        <div style={styling} className="p-5">
            <div className="container">
                <div className="text-center">
                    <h3><b>OUR</b> WORK</h3>
                    <hr className="my-4" />
                    <h2>Solving Business Problems Through Technology</h2>
                    <p>
                        We helped build one of the first interfaces for UPI in India
                        when UPI was in a nascent stage. We helped create a platform for
                        performing artistes to take their talent to the world at a
                        global scale. We have enabled our clients to imagine, execute
                        and experience enterprise-grade applications that could would
                        scale up on-demand and do so, in an optimal manner.
                    </p>
                    <span className="lead">
                        We have done all this based on our experience and the fact that
                        our team brings not just the seasoned technology folks to you
                        but also the young ones who are raring to go and build that
                        something awesome for you.
                    </span>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-lg-12">
                        <h2><span style={{ color: "#d9743f" }}>Key areas</span> of <b>work</b></h2>
                        <p>
                            We have worked with clients across industries and have
                            helped them solve their business problems through
                            technology. We have helped them build platforms that
                            enable them to scale up and scale fast. We have helped
                            them build frameworks that enable them to build
                            applications that are robust, scalable and secure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Work;