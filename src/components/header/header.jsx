import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/1.svg";
import image2 from "../../assets/images/2.svg";
import image3 from "../../assets/images/3.svg";

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="container">
                <nav className="navbar">
                    <ul className="menu">
                        <Link to="/main" className="menu__link">
                            <li>Главная</li>
                        </Link>
                        <Link to="/catalog" className="menu__link">
                            <li >Каталог</li>
                        </Link>
                        <Link to="/advices" className="menu__link">
                            <li>Советы по уходу</li>
                        </Link>
                        <Link to="/delivery" className="menu__link">
                            <li>Оплата и доставка</li>
                        </Link>
                        <Link to="/contacts" className="menu__link">
                            <li>Контакты</li>
                        </Link>
                    </ul>
                    <div className="icons">
                        <div className="icons__elem">
                            <img src={image1} alt="SearchIcon"/>
                        </div>
                        <div className="icons__elem">
                            <img src={image2} alt="SearchIcon"/>
                        </div>
                        <div className="icons__elem">
                            <img src={image3} alt="SearchIcon"/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;