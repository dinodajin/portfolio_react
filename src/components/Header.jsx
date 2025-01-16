import React from "react";

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "port",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];


const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio<em>vite</em></a>
                </div>
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button"
                    tabindex="0"
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;