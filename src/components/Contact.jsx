import React from "react";
import mailIcon from "../assets/img/email_button.png";
import githubIcon from "../assets/img/github.png";
import velogIcon from "../assets/img/velog.png";

const Contact = () => {
    const contactText = [
        {
            link: "mailto:djbrachio@gmail.com",
            title: "djbrachio@gmail.com",
            icon: mailIcon
        },
        {
            title: "github",
            link: "https://github.com/dinodajin",
            icon: githubIcon
        },
        {
            title: "velog",
            link: "https://velog.io/@da8411/posts",
            icon: velogIcon
        }
    ];

    return (
        <section id="contact">
            <div className="contact__inner">
                {/* 왼쪽: 타이틀 영역 */}
                <div className="contact__title">
                    contact
                </div>
                
                {/* 오른쪽: 콘텐츠 영역 */}
                <div className="contact__desc">
                    {contactText.map((contact, key) => (
                        <div key={key} className="contact__item">
                            <a
                                href={contact.link}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <span className="icon">
                                    <img src={contact.icon} alt={contact.title} />
                                </span>
                                {contact.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;