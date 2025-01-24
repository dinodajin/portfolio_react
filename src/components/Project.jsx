import React from "react";

import pro01 from "../assets/img/about.jpg";
import pro02 from "../assets/img/about.jpg";
import pro03 from "../assets/img/about.jpg";
import pro04 from "../assets/img/about.jpg";
import pro05 from "../assets/img/about.jpg";
import pro06 from "../assets/img/about.jpg";
import pro07 from "../assets/img/about.jpg";
import pro08 from "../assets/img/about.jpg";
import pro09 from "../assets/img/about.jpg";
import pro10 from "../assets/img/about.jpg";

const Project = () => {

    const proText = [
        {
            num: "01",
            title: "디깅소비러를 위한 새로운 미니가전 브랜드 LG MOA",
            desc: "다양한 기능의 시리즈로 모을수록 확장되는 세계관을 보유",
            img: pro01,
            code: "https://github.com/dinodajin/Appy_backend",
            // view: "https://portfoliosj-react.netlify.app",
        },
        {
            num: "02",
            title: "빛나는 밤에 포트폴리오",
            desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
            img: pro02,
            code: "https://github.com/seolhee313/PORTFOLIO-REACT",
            view: "https://portfolio-313.web.app/",
            name: "천설* 포트폴리오",
        },
        {
            num: "03",
            title: "열정이 넘치는 포트폴리오",
            desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
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
        {
            num: "06",
            title: "화려함의 정석 포트폴리오",
            desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
            img: pro06,
            code: "/",
            view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
            name: "포트폴리오",
        },
        {
            num: "07",
            title: "패럴랙스 정석 포트폴리오",
            desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
            img: pro07,
            code: "/",
            view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
            name: "포트폴리오",
        },
        {
            num: "08",
            title: "트랜지션 포트폴리오",
            desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
            img: pro08,
            code: "/",
            view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
            name: "포트폴리오",
        },
        {
            num: "09",
            title: "스크롤의 정석 포트폴리오",
            desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
            img: pro09,
            code: "/",
            view: "https://webstoryboy.github.io/port2023/portfolio-student/ChoJaeHyung/index.html",
            name: "포트폴리오",
        },
        {
            num: "10",
            title: "모던함의 정석 포트폴리오",
            desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
            img: pro10,
            code: "/",
            view: "https://webstoryboy.github.io/port2023/portfolio-student/JooHyeji/index.html",
            name: "포트폴리오",
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
                            <a href={project.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;