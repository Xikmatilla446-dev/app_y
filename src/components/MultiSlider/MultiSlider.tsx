import React, {useRef, useState} from 'react';
import classes from './MultiSlider.module.scss';
import {Col, Row} from "antd";
import Image from "next/image";
    import Slider from "react-slick";

import ButtonTop from "@/assets/svg/multi_top.svg";
import ButtonBottom from "@/assets/svg/multi_bottom.svg";
import classNames from "classnames";


const MultiSlider = () => {
    const slider = useRef<any>(null);
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
        <div className={classes.multi}>
            <Row className={classes.row} justify={"start"}>
                <Col xs={24} sm={24} md={16} lg={8}>
                    <div className={classes.images_section}>
                        <div className={classes.scroll}>
                          <span onClick={() => slider?.current?.slickPrev()}>
                                <ButtonTop/>
                          </span>
                            <div className={classes.scroll_images}>
                                {[...new Array(5)].map((s, index: number) => (
                                    <div
                                        onClick={() => slider?.current?.slickGoTo(index)}
                                        key={index} className={classNames(classes.slider, activeSlide === index ? classes.active_slide : "")}>
                                        <Image src={"/images/slider.png"} alt="slider" width={200} height={50}/>
                                    </div>
                                ))}
                            </div>
                            <span onClick={() => slider?.current?.slickNext()} >
                                <ButtonBottom/>
                          </span>
                        </div>

                            <div className={classes.main_image}>
                                <Slider ref={slider} {...settings}>
                                    {[...new Array(4)].map((s, index:number)=> (
                                        <Image
                                            key={index}
                                            src={"/images/slider.png"} alt="slider" width={200} height={210} style={{width: "auto"}}/>
                                    ))}
                                </Slider>
                            </div>

                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <div className={classes.content}>
                        <span className={classes.date}>09.10.2023 й.</span>
                        <h4>"Temir daftar"da turuvchi fuqarolar bilan uchrashuv</h4>
                        <p>Yangiyo‘l shahar 3-sektor rahbari N.Sayidov boshchiligida “Baxt” mahallasi hokim yordamchisi
                            hamda mahalla raisi bilan birgalikda "Temir daftar"da turuvchi fuqarolarni murojaatlarini
                            atroflicha o‘rganib chiqib, ularni bartaraf qilish choralari ko‘rilmoqda.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MultiSlider;