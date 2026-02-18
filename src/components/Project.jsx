import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pro01 from "../assets/img/appy.png";
import pro02 from "../assets/img/library.png";
import pro03 from "../assets/img/android.png";

const Project = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    const proText = [
        { num: "01", title: "LG MOA: 디깅소비러 미니가전", desc: "AI 기반 공감형 채팅 기능 및 IoT 기술 활용...", img: pro01, view: "#", view2: "#" },
        { num: "02", title: "공공데이터 활용 도서관 서비스", desc: "훼손 도서 파악 시스템 및 데이터베이스 설계...", img: pro02, view: "#", view2: "#" },
        { num: "03", title: "Android ESRGAN 화질 개선", desc: "TensorFlow를 활용한 모바일 딥러닝 모델 최적화...", img: pro03, view: "#" },
        { num: "04", title: "추가 프로젝트 04", desc: "프로젝트 상세 설명이 들어가는 자리입니다.", img: "pro04", view: "#" },
        { num: "05", title: "추가 프로젝트 05", desc: "프로젝트 상세 설명이 들어가는 자리입니다.", img: "pro05", view: "#" },
        { num: "06", title: "추가 프로젝트 06", desc: "프로젝트 상세 설명이 들어가는 자리입니다.", img: "pro06", view: "#" },
        { num: "07", title: "추가 프로젝트 07", desc: "프로젝트 상세 설명이 들어가는 자리입니다.", img: "pro07", view: "#" },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        // 7개일 때는 이동 거리를 정교하게 계산해야 합니다.
        // -100 * (전체개수 - 1)이 기본 공식입니다.
        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + (horizontal.offsetWidth * 2), // 스크롤 길이를 카드 수에 맞춰 확보
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="project" ref={horizontalRef}>
            <div className="project__inner">
                <h2 className="project__title">
                    project
                </h2>
                <div className="project__wrap">
                    {proText.map((project, key) => (
                        <article 
                            className={`project__item p${key + 1}`} 
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{project.num}.</span>
                            <div className="img">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <h3 className="title">{project.title}</h3>
                            <p className="desc">{project.desc}</p>
                            <div className="btn__wrap">
                                <a href={project.view} target="_blank" className="site" rel="noreferrer">
                                    {project.view2 ? "BACKEND" : "GITHUB"}
                                </a>
                                {project.view2 && (
                                    <a href={project.view2} target="_blank" className="site" rel="noreferrer">FRONTEND</a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;