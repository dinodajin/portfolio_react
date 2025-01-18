import React from "react";

const Education = () => {

    const educationText = [
        {
            title: "서울 세화여자 고등학교 졸업 (2014.03 ~ 2017.02)",
        },
        {
            title: "블루프린트랩 인턴 (2021.12 ~ 2022.12)",
        },
        {
            title: "아주 대학교 졸업 (2019.03 ~ 2023.08)",
        },
        {
            title: "LG전자 DX School 1기 수료 (2024.06 ~ 1014.12)",
        },
    ];

    return (
        <section id="education">
            <div className="education__inner">
                <h2 className="education__title">
                    Education <em>이력 사항</em>
                </h2>
                <div className="education__desc">
                    {educationText.map((edu, key) => (
                        <div key={key}>
                            <h3>{edu.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;