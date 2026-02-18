import React, { useState, useEffect, useRef } from "react";

const headerNav = [
     {
        title: "intro",
        url: "#intro"
    },
    {
        title: "education",
        url: "#education"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "project",
        url: "#project"
    },
    {
        title: "contact",
        url: "#contact"
    }
];


const Header = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState("intro");

    const toggleMenu = () => {
        setShow((prevShow) => (!prevShow));
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // 화면의 중간 지점에 섹션이 올 때 인식
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, options);

        headerNav.forEach((nav) => {
            const section = document.querySelector(nav.url);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (title) => {
        setActive(title);
        setShow(false);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">dajin jung</a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`}
                    role="navigation"
                    aria-label="메인 메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a 
                                    href={nav.url} 
                                    className={active === nav.title ? "active" : ""} 
                                    onClick={() => handleNavClick(nav.title)}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;