import React from 'react';
import "./contacts.css";

const Contacts = () => {
    return (
        <div className="container">
            <div className="row">
                <form className="col-form border">
                    <div className="form-group">
                        <label htmlFor="inputName" className="form-label">
                            Имя
                        </label>
                        <div className="form-col">
                            <input type="text" className="form-control" name="name"
                                   required placeholder="Введите имя"
                            />
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhone" className="form-label">
                            Телефон
                        </label>
                        <div className="form-col">
                            <input type="tel:+74951234567" name="phone"
                                   className="form-control" id="inputPhone" placeholder="Введите номер телефона"
                            />
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage" className="form-label">
                            Сообщение
                        </label>
                        <div className="form-col">
                            <textarea name="message" className="form-control border" id="inputMessage" rows="3" placeholder="Хотите что-то добавить?"></textarea>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="col-form__btn">
                            Отправить
                        </button>
                    </div>
                </form>
                <div className="map">
                    <iframe
                        src="https://yandex.ru/maps/-/CDeqb2iq"
                        width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </div>

        </div>
    );
};

export default Contacts;