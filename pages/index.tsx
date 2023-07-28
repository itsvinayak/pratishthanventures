import React from "react";
import NavBar from "@/components/navbar/navbar";
import BaseHeader from "@/components/baseHeader/baseHeader";
import Approach from "@/components/approach";
import Expectation from "@/components/experience/experience";
import Work from "@/components/work";
import BaseContactUs from "@/components/baseContactUs";
import Footer from "@/components/footer/footer";



const Home = () => {
    return (
        <>
            <NavBar />
            <BaseHeader />
            <Approach />
            <Expectation />
            <Work/>
            <BaseContactUs/>
            <Footer/>
        </>
    )
};

export default Home;