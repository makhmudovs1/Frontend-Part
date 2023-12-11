import React from 'react';
import "./footer.css";

import img1 from "../../assets/images/instagram.png";
import img2 from "../../assets/images/ok.png";
import img3 from "../../assets/images/vk.png";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="nav">
                    <ul className="menu">
                        <li className="link">Каталог</li>
                        <li className="link">Советы по уходу</li>
                        <li className="link">Оплата и доставка</li>
                        <li className="link">Контакты</li>
                    </ul>
                    <div className="contacts">
                        <img src={img1} alt="instagram"/>
                        <img src={img2} alt="ok"/>
                        <img src={img3} alt="vk"/>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="list__store">
                    <h2 className="store__title">
                        plant
                    </h2>
                    <p className="store__text">
                        © 2023 магазин цветов и растений PLANT
                    </p>
                </div>
                <form action="#" className="form">
                    <input className="form__input" type="text" placeholder="email"/>
                    <button className="form__button">
                        ПОДПИСАТЬСЯ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Footer;