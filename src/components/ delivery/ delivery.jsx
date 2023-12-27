import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./ delivery.css";
import Modal from '../modal/modal'
import Input from '../input/input'


function Contacts() {
    useEffect(() => {
        AOS.init({ duration: 2000, offset: 200 });
    }, []);
    const plants = "Доставка цветов по Москве " +
        "займет не более 3-4 часов с момента оплаты заказа." +
        " Оформить и оплатить заказ на букет вы можете через " +
        "наш интернет магазин, или, позвонив по бесплатному " +
        "номеру 8 800 1001032 и оформить заказ через оператора. Ваш букет будет " +
        "доставлен из нашего цветочного магазина России, " +
        "поэтому все цветы будут качественные и свежие. Оплатить " +
        "заказ можно картой, или любым другим удобным способом. " +
        "С помощью компании «Флорист Экспресс» любой желающий сможет " +
        "заказать букет цветов с доставкой в любой город России. " +
        "При заказе Вы сможете заказать услугу «фото при получении», " +
        "и мы бесплатно вышлем вам фотографию счастливых получателей. " +
        "Обо всех этапах заказа будет проводиться СМС и email оповещением "
    const contentPlants = "Мы, работники цветочного магазина в центре Москвы, " +
        "доставляем различные букеты цветов жителям города Москвы по самым выгодным ценам. " +
        "У нас свои цветочные сады на территории города, где выращиваются десятки видов цветов, " +
        "которые мы доставляем населению в свежем виде.  \n" +
        "\n" +
        "Доставка цветов в Москве\n" +
        "\n" +
        "Наши флористы имеют многолетний опыт по составлению" +
        "цветочных букетов, композиций с тематическим составом. " +
        "У нас можно купить цветы любимым, родным к празднику, например, " +
        "на день рождения, по случаю торжественного события, " +
        "на свадьбу или юбилей, романтические композиции, ритуальные и для прочих мероприятий. " +
        "Наши сотрудники следят за современными тенденциями и могут подготовить " +
        "любой по сложности и содержанию букет, в том числе и в стиле хайтек.\n" +
        "\n" +
        "Граждане России, наравне с жителями других стран, ценят " +
        "цветы/растения и относятся с восхищением к такому подарку в любой праздник. " +
        "Женщины и девушки России с радостью принимают цветы в знак уважения и любви вне " +
        "зависимости от места проживания, будь это жители столицы (г. Москва)"
    const email = "Введите email"
    return (
        <div className="container" data-aos="fade-up">
            <h2 className="title-plants">
                Доставка цветов/растений в России
            </h2>
            <p className="content-plants">
                {plants}
            </p>
            <p className="content-plants">
                {contentPlants}
            </p>
            <p className="title-plants-block">
                Обо всех услових доставки вы можете прочитать тут
            </p>
            <br/>
            <Modal/>
        </div>
    );
}

export default Contacts;