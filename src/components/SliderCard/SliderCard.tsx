import React, {useRef} from 'react';
import classes from './SliderCard.module.scss';
import Image from "next/image";
import {Button} from "antd";
import useTranslation from "next-translate/useTranslation";
import Previous from "@/assets/svg/previous.svg";
import Next from "@/assets/svg/next.svg";
import Slider from "react-slick";

const SliderCard = () => {
    const {t} = useTranslation();
    const slider = useRef<any>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false
    };

    const slid = [
        {
            title: "Kuz - qish mavsumiga tayyorgarlik",
            description: "Bugun Yangiyo‘l shahar hokimi boshchiligida shahar prokurori, shahar IIB boshlig‘i, hokim o‘rinbosarlari va shahardagi barcha korxona-tashkilot rahbarlari ishtirokida uchrashuv o‘tkazildi. Bunda kuz-qish mavsumiga tayyorgarlik ko‘rish borasida amalga oshirilayotgan ishlar holati tanqidiy-tahlil qilindi. Shuningdek, uchrashuv davomida kommunal sohadagi mavjud kamchiliklar o‘z vaqtida bajarilmaganligi yuzasidan tegishli mas'ullarga qatiy ogohlatirishlar berildi.",
            scr: "/images/img1.png"
        },
        {
            title: "Xalq bilan uchrashuv",
            description: "Shahar hokimi boshchiligida shahar prokurori, shahar IIB boshlig‘i, hokim o‘rinbosarlari joriy yilning 12 oktabr kuni Yangiyo‘l shahrida Viloyat miqyosida Qo‘mondonlik-shtab o‘quv mashqi bo‘lib o‘tdi.",
            scr: "/images/img.png"
        },

    ]
    return (
        <div className={classes.slider}>
            <Slider ref={slider} {...settings}>

                {slid.map(({scr, title, description}, index:number)=> (
                    <div key={index} className={classes.box}>
                        <Image
                            className={classes.img}
                            src={scr} alt="img" width={850} height={580} objectFit='cover'/>
                        <div className={classes.gradient}>
                            <div className={classes.content}>
                                <Button>{t("so’ngi yangiliklar")}</Button>
                                <p className={classes.date}>09.10.2023 й.</p>
                                <h3 className={classes.title}>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>

            <div className={classes.action}>
                <span onClick={() => slider?.current?.slickPrev()} className={classes.previous}><Previous/>&nbsp;{t("Oldingisi")}</span>
                <span onClick={() => slider?.current?.slickNext()} className={classes.next}>{t("Keyingisi")}&nbsp;<Next/></span>
            </div>
        </div>

    );
};

export default SliderCard;