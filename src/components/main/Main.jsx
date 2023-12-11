import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Main.css';
import { Link } from "react-router-dom";

import ficuseImg from "../../assets/images/ficuses.png";
import suculentImg from "../../assets/images/suculents.png";
import palmsImg from "../../assets/images/palms.png";

const publicationItems = [
    {
        imageUrl: ficuseImg,
        title: "Фикусы",
        text: "Эффектные украшения интерьера",
    },
    {
        imageUrl: suculentImg,
        title: "Суккуленты",
        text: "Маленькие и модные",
    },
    {
        imageUrl: palmsImg,
        title: "Пальмы",
        text: "Пышные и неприхотливые пальмы - элегантный предмет декора",
    },
];

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, offset: 200 });
    }, []);

    return (
        <div className="container"  data-aos="fade-up">
            <div className="content-background">
                <div className="content">
                    <div className="content__h1">
                        Цветы для вашего дома
                    </div>
                    <p className="content__text">
                        Растения в кашпо станут красивым и модным дополнением интерьера<br />вашей квартиры или офиса
                    </p>
                    <Link to="/catalog" className="content__button">
                        ПЕРЕЙТИ В КАТАЛОГ
                    </Link>
                </div>
            </div>
            <div className="reasons">
                {publicationItems.map((item, index) => (
                    <div key={index} className="reasons__main" data-aos="fade-up">
                        <img src={item.imageUrl} alt={item.title} />
                        <h2 className="reasons__title">{item.title}</h2>
                        <p className="reasons__text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
