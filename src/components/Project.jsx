import React from "react";

import pro01 from "../assets/img/appy.png";
import pro02 from "../assets/img/about.jpg";
import pro03 from "../assets/img/about.jpg";
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
            title: "도서관 공모전",
            desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
            img: pro02,
            code: "https://github.com/dinodajin/LibraryCompetition-Backend",
            // view: "https://portfolio-313.web.app/",
            // name: "천설* 포트폴리오",
        },
        {
            num: "03",
            title: "동영상 화질 개선",
            desc: "ESRGAN 모델을 활용하여 안드로이드에서 동영상 화질 개선",
            img: pro03,
            code: "https://github.com/seolhee313/PORTFOLIO-REACT",
            view: "https://portfolio-313.web.app/",
            name: "천설* 포트폴리오",
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
                            <a href={project.view2} target="_blank" className="site" rel="noreferrer">GITHUB</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;