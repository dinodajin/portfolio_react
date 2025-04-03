import React from "react";

import pro01 from "../assets/img/appy.png";
import pro02 from "../assets/img/library.png";
import pro03 from "../assets/img/android.png";
import pro04 from "../assets/img/about.jpg";
import pro05 from "../assets/img/about.jpg";

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
        {
            num: "04",
            title: "모던한 포트폴리오",
            desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
            img: pro04,
            code: "https://github.com/dlgnsrb227/portfolio-next",
            view: "https://hoongportfolio-next.netlify.app/",
            name: "이훈* 포트폴리오",
        },
        {
            num: "05",
            title: "가로모드의 정석 포트폴리오",
            desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
            img: pro05,
            code: "/",
            view: "https://junseungpark.github.io/portfolio/index3.html",
            name: "박준* 포트폴리오",
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