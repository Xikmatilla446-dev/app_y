import React from 'react';
import classes from './UsefulSection.module.scss';
import Title from "@/components/Title";
import useTranslation from "next-translate/useTranslation";
import Useful from "@/assets/svg/useful_icon.svg";
import {Col, Row} from "antd";
import {Container} from "@/components";


const UsefulSection = () => {
    const {t} = useTranslation();

    const useful = [
        {
            title: "Yagona interaktiv davlat xizmatlari portali",
            path: "/"
        },
        {
            title: "Davlat aktivlarini boshqarish agentligi",
            path: "/"
        },
        {
            title: "Prezident virtual qabulxonasi",
            path: "/"
        },
        {
            title: "Prezident rasmiy veb-sayti",
            path: "/"
        },
        {
            title: "O'zbekiston Respublikasi hukumat portali",
            path: "/"
        },
        {
            title: "O'zbekiston Respublikasi hukumat portali",
            path: "/"
        },
        {
            title: "Yagona interaktiv davlat xizmatlari portali",
            path: "/"
        },
        {
            title: "Davlat aktivlarini boshqarish agentligi",
            path: "/"
        },
        {
            title: "Prezident virtual qabulxonasi",
            path: "/"
        },
        {
            title: "Prezident rasmiy veb-sayti",
            path: "/"
        },
        {
            title: "O'zbekiston Respublikasi hukumat portali",
            path: "/"
        },
        {
            title: "O'zbekiston Respublikasi hukumat portali",
            path: "/"
        }
    ]

    return (
        <div className={classes.useful}>
            <Container>
                <Title>
                    {t("Foydali manbalar")}
                </Title>

                <div className={classes.row} >
                    {useful.map((item: any, index: number) => (
                       <Col key={index} span={4}>
                           <div key={index} className={classes.box}>
                               <Useful/>
                               <span>{item.title}</span>
                           </div>
                       </Col>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default UsefulSection;