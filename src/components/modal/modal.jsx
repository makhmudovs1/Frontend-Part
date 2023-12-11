import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './modal.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button className="button-plants"
                variant="outlined"
                sx={{
                    color: 'black',
                    cursor: 'pointer',
                    border: '1px solid black',
                }}
                onClick={handleClickOpen}
            >
                Условия доставки
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    sx={{ color: 'black',  }}>{"Правила доставки товара"}</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{ color: 'grey' }}
                        id="alert-dialog-slide-description"
                    >
                        - Доставка заказа по Москве и МО возможна в день размещения заказа при наличии свободных курьеров.
                        <br/>
                        - Доставка заказа по Москве и МО осуществляется курьерской службой на автомобилях с соблюдением температурного режима, необходимого для комнатных растений.
                        <br/>
                        - Стоимость доставки по Москве в пределах МКАД фиксирована и составляет 500 руб (для растений высотой до 110 см и весом до 15 кг).
                        <br/>
                        - Стоимость доставки по МО рассчитывается индивидуально в зависимости от расстояния.
                        <br/>
                        - Растения свыше 110 см и весом более 15 кг являются негабаритным грузом и требуют особых условий перевозки грузовым транспортом (при необходимости наличие грузчиков).
                        <br/>
                        Стоимость и сроки перевозки растений в данном случае согласуются индивидуально.
                        <br/>
                        - Оплата заказа производится переводом на карту при получении заказа.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ border: '1px solid black', color: 'black' }}>Отмена</Button>
                    <Button onClick={handleClose} sx={{ border: '1px solid black', color: 'black' }}>Ок</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
