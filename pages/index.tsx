import React from "react";
import NavBar from "@/components/navbar/navbar";
import BaseHeader from "@/components/baseHeader/baseHeader";
import Approach from "@/components/approach";
import Expectation from "@/components/experience/experience";
import Work from "@/components/work";
import BaseContantUs from "@/components/baseContantUs";
import Footer from "@/components/footer/footer";



const Home = () => {
    return (
        <>
            <NavBar />
            <BaseHeader />
            <Approach />
            <Expectation />
            <Work/>
            <BaseContantUs/>
            <Footer/>
        </>
    )
};

export default Home;