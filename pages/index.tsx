import React from "react";
import NavBar from "@/components/navbar";
import BaseHeader from "@/components/baseHeader";
import Approach from "@/components/approach";
import Expectation from "@/components/experience";
import Work from "@/components/work";


const Home = () => {
    return (
        <>
            <NavBar />
            <BaseHeader />
            <Approach />
            <Expectation />
            <Work/>
            <br/>
            <br/>
            <br/>
            <br/>

        </>
    )
};

export default Home;