import React from "react";
import DisplayCounter from "./displayCounter";
import { faBriefcase, faCode, faUsers, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-dom";


const displayItem = [{ 'text': 'YEARS OF EXPERIENCE', 'itemNumber': 20, iconClass: "fa fa-briefcase", icon: faBriefcase },
{ 'text': 'NUMBER OF PROJECTS', 'itemNumber': 100, iconClass: "fa fa-code", icon: faCode },
{ 'text': 'NUMBER OF CLIENTS', 'itemNumber': 10, iconClass: "fa fa-users", icon: faUsers },
{ 'text': 'NUMBER OF ARCHITECTURE BUILD', 'itemNumber': 90, iconClass: "fa fa-cogs", icon: faCogs }]


const styling = {
    minHeight: "100vh",
    backgroundColor: "#d9743f",
};

const Expectation = () => {
    return (
        <>
            <div style={styling} className="container-fluid p-5">
                <h3><b>OUR</b> EXPERIENCE</h3>
                <hr className="my-4" />
                <div className="row text-center">
                    <h2>Building Robust Platforms & Frameworks</h2>
                    <p>
                        {`Our people have helped build fintech products at scale when
                        fintech wasn't a buzzword. We've helped create platforms that
                        bring people closer to each other end enable businesses to
                        deliver an experience to remember, to their customers.`}
                        <br />
                        {`We have done all this based on our experience and the fact that
                        our team brings not just the seasoned technology folks to you
                        but also the young ones who are raring to go and build that
                        something awesome for you.`}
                    </p>
                    <span className="lead"
                    >{`In fact, 30% of our people have over a decade of hands-on
                        technology experience.`}</span>
                    <div className="col-lg-12">
                        <DisplayCounter items={displayItem} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Expectation;