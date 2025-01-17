import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Project />
                <Contact />
            </Main>
            <Footer />
        </>
    );
};

export default HomeView;