import React from "react";

import pro01 from "../assets/img/appy.png";
import pro02 from "../assets/img/library.png";
import pro03 from "../assets/img/android.png";

const Project = () => {

    const proText = [
        {
            num: "01",
            title: "디깅소비러를 위한 새로운 미니가전 브랜드 LG MOA",
            desc: "‘디깅 가전’ 컨셉을 기획하고, 소비자가 제품과 상호작용하며 감성적인 만족감을 얻을 수 있도록 AI 기반 공감형 채팅 기능을 개발했습니다. 그 결과, 2030세대 120명을 대상으로 한 설문조사에서 브랜드 친숙도가 40% 증가하는 성과를 거두었습니다. 이 경험을 통해 데이터 분석을 기반으로 소비자 행동을 깊이 이해하는 법과, AI 및 IoT 기술을 활용한 사용자 경험 개선의 중요성을 배웠습니다.",
            img: pro01,
            code: "https://github.com/dinodajin/Appy_backend",
            view: "https://github.com/dinodajin/Appy_backend",
            view2: "https://github.com/dinodajin/Appy_frontend"

        },
        {
            num: "02",
            title: "공공데이터를 활용한 도서관 공모전",
            desc: "공공데이터 활용 도서관 공모전에 참여하며, 도서관 사서와의 인터뷰를 통해 '훼손 도서의 파악이 어렵다'는 요구사항을 파악하여 훼손 도서 파악 서비스를 개발하였습니다. 먼저 공공데이터 API를 활용해 데이터를 수집하고, 이를 기반으로 백엔드에서 필요한 데이터베이스를 설계 및 구축했습니다. 또한, unit 테스트 코드를 작성해 시스템의 안정성을 확보하고, Swagger를 통해 실제 데이터 연동을 검증했습니다.",
            img: pro02,
            code: "https://github.com/dinodajin/LibraryCompetition-Backend",
            view: "https://github.com/dinodajin/LibraryCompetition-Backend",
            view2: "https://github.com/dinodajin/LibraryCompetition-Frontend",
        },
        {
            num: "03",
            title: "화질 개선 앱 개발",
            desc: "안드로이드에서 ESRGAN 모델을 활용하여 기기에 저장된 이미지와 동영상의 화질 개선 프로젝트를 진행했습니다. 이 프로젝트에서는 Java, TensorFlow를 사용하여 ESRGAN 모델을 최적화하여 모바일 환경에서 사용자가 촬영한 저해상도 이미지와 동영상을 고해상도로 변환하는 기능을 구현하였습니다. ",
            img: pro03,
            code: "https://github.com/dinodajin/android_super_resolution",
            view: "https://github.com/dinodajin/android_super_resolution",

        },
    ];

    return (
        <section id="project">
            <div className="project__inner">
                <div className="project__title">
                    project <em>작업물</em>
                </div>
                <div className="project__wrap">
                    {proText.map((project, key) => (
                        <article className={`project__item p${key + 1}`} key={key}>
                            <span className="num">{project.num}.</span>
                            <a href={project.code} target="_blank" className="img" rel="noreferrer">
                                <img src={project.img} alt={project.name} />
                            </a>
                            <h3 className="title">{project.title}</h3>
                            <p className="desc">{project.desc}</p>
                            <a href={project.view} target="_blank" className="site" rel="noreferrer">GITHUB</a>
                            {project.view2 && (
                                <a href={project.view2} target="_blank" className="site" rel="noreferrer">GITHUB</a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;