import React from "react";
import about from "../assets/img/about.jpg";

const Intro = () => {
    const introText = {
        title1: "Full-Stack",
        title2: "Embedded Engineer",
        desc: "Embedded engineer fluent in Web & AI",
    };

    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__profile">
                    <div className="profile__circle">
                        <div className="img">
                            <img src={about} alt="프로필" />
                        </div>
                    </div>
                </div>

                <div className="intro__info">
                    <span className="name">{introText.name}</span>
                    <h1 className="main__title">
                        <span className="purple">{introText.title1}</span>
                        <span>{introText.title2}</span>
                    </h1>
                    <p className="desc">{introText.desc}</p>
                </div>
            </div>
        </section>
    );
};

export default Intro;