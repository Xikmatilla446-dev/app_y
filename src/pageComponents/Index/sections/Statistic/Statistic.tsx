import React, {useRef} from 'react';
import classes from './Statistic.module.scss';
import {Container, Title} from "@/components";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Previous from "@/assets/svg/previousChart.svg";
import Next from "@/assets/svg/nextChart.svg";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Statistic = () => {
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
    const { t } = useTranslation();

    const option = {
        colors : ['#122067'],
        chart: {
            toolbar: {
                show: false
            },

        },
        bar: {
            dataLabels: {
                position: 'top'
            },

        },
        plotOptions: {

        },
        xaxis: {
            categories: [90, 50, 105, 90, 50, 105, 90, 50, 105, 90, 50, 105,90, 50, 105, 90, 50, 105, 90, 50, 105]
        },
        series:{}
    }

    const series = [{
        name: 'series-1',
        data: [90, 50, 105, 90, 50, 105, 90, 50, 105, 90, 50, 105,90, 50, 105, 90, 50, 105, 90, 50, 105]
    }]
    return (
        <div className={classes.statistic}>
            <Title>
                {t("Umumiy murojaatlar statistikasi")}
            </Title>

           <Container>
               <div className={classes.slider_chart}>
                   <Slider ref={slider} {...settings}>
                       <div className={classes.content}>
                           <ApexChart type="bar" options={option} series={series} height={420} width={1440} />
                       </div>
                       <div className={classes.content}>
                           <ApexChart type="line" options={option} series={series} height={420} width={1440} />
                       </div>
                   </Slider>
                   <div className={classes.action}>
                       <span onClick={() => slider?.current?.slickPrev()} className={classes.previous}><Previous/></span>
                       <span onClick={() => slider?.current?.slickNext()} className={classes.next}><Next/></span>
                   </div>
               </div>

           </Container>
        </div>
    );
};

export default Statistic;