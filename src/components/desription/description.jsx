import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./description.css";
import ficuseImg from "../../assets/images/ficuse1.png";
import suculentImg from "../../assets/images/ficuse2.png";
import palmsImg from "../../assets/images/ficuse3.png";
import ficuseImage from "../../assets/images/ficuse4.png";
import {Link} from "react-router-dom";

const Description = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, offset: 200 });
    }, []);
    const publicationItems = [
        {
            imageUrl: ficuseImg,
            title: "Фикусы",
            text: "Стрелиция Николая",
        },
        {
            imageUrl: suculentImg,
            title: "Фикусы",
            text: "Фикус эластика",
        },
        {
            imageUrl: palmsImg,
            title: "Суккуленты",
            text: "Хавортия полосатая",
        },
        {
            imageUrl: ficuseImage,
            title: "Фикусы",
            text: "Стрелиция Николая",
        },
        {
            imageUrl: ficuseImg,
            title: "Фикусы",
            text: "Стрелиция Николая",
        },
        {
            imageUrl: suculentImg,
            title: "Фикусы",
            text: "Фикус эластика",
        },
        {
            imageUrl: palmsImg,
            title: "Суккуленты",
            text: "Хавортия полосатая",
        },
        {
            imageUrl: ficuseImage,
            title: "Фикусы",
            text: "Стрелиция Николая",
        },
    ];
    return (
        <div className="description" id="description" data-aos="fade-up">
            <div className="container">
                <h1>
                    Предложения месяца
                </h1>
                <div className="month">
                    {publicationItems.map((item) => (
                        <div className="month__item">
                            <img src={item.imageUrl} alt={item.title}/>
                            <h2 className="month__title"> {item.title} </h2>
                            <p className="month__text"> {item.text} </p>
                        </div>
                    ))}
                </div>
                <Link to="/catalog" className="button">
                    ПЕРЕЙТИ В КАТАЛОГ
                </Link>
            </div>
        </div>
    );
};

export default Description;