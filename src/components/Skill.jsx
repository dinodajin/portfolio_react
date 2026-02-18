import React from "react";

const skillData = [
    {
        title: "FrontEnd",
        desc: ["JavaScript", "React.js", "Next.js"],
        info: ["Web Architecture", "UI/UX Design", "Responsive Web"],
    },
    {
        title: "BackEnd",
        desc: ["Java / Spring", "Python / FastAPI", "Node.js"],
        info: ["RESTful API", "Microservices", "Server Optimization"],
    },
    {
        title: "Embedded",
        desc: ["C / C++", "Firmware", "RTOS"],
        info: ["Hardware Control", "Memory Optimization", "Low-level Dev"],
    },
    {
        title: "AI & Vision",
        desc: ["OpenCV", "TensorFlow", "PyTorch"],
        info: ["Object Detection", "Image Processing", "Model Inference"],
    },
    {
        title: "Certifications",
        desc: ["정보처리기사", "SQLD", "ADsP", "Toeic Speaking IH"],
        info: ["한국산업인력공단", "한국데이터산업진흥원", "YBM"],
    }
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    Skill
                </h2>
                <div className="skill__wrap">
                    {skillData.map((skill, key) => (
                        <article className={`skill__item s${key + 1}`} key={key}>
                            <span className="num">{key + 1}.</span>
                            <div className="text">
                                {skill.desc.map((t, i) => (
                                    <div key={i}>{t}</div>
                                ))}
                            </div>
                            <h3 className="title">{skill.title}</h3>
                            <div className="info">
                                {skill.info.map((f, i) => (
                                    <span key={i}>{f}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;