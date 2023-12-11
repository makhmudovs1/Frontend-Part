import React from 'react';
import "../desription/description.css";
import ficuseImg from "../../assets/images/ficuse1.png";
import suculentImg from "../../assets/images/ficuse2.png";
import palmsImg from "../../assets/images/ficuse3.png";
import ficuseImage from "../../assets/images/ficuse4.png";

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

const Catalog = () => {
    return (
        <div className="container">
            <div className="month">
                {publicationItems.map((item) => (
                    <div className="month__item">
                        <img src={item.imageUrl} alt={item.title}/>
                        <h2 className="month__title"> {item.title} </h2>
                        <p className="month__text"> {item.text} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;