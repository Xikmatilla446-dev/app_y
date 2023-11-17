import React from 'react';
import Title from "@/components/Title";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Download from "@/assets/svg/download.svg";
import {Col, Row} from "antd";
import classes from './Charter.module.scss'
import DownloadCard from "@/components/DownloadCard";

const Charter = () => {
    const {t} = useTranslation();


    const docs = [
        {
            title: t("Yangiyo’l shahar hokimligi boshqaruv apparati xodimlari oʻrtasida xizmat vazifa va funksiyalar taqsimotini tasdiqlash toʻgʻrisida Toshkent viloyati hokimining qarori"),
            link: ""
        },
        {
            title: t("O‘zbekiston Respublikasining 1993 yil 2 sentyabrdagi 913-XII-sonli “Mahalliy davlat Hokimiyati to‘g‘risida”gi qonuni"),
            link: ""
        },
        {
            title: t("Yangiyo’l shahar hokimligi boshqaruv apparati to'g'risida nizomi"),
            link: ""
        }
    ]

    return (
        <div>
            <Head>
                <title>{t("Shahar hokimligi nizomi")}</title>
            </Head>
            <Title>
                {t("Shahar hokimligi nizomi")}
            </Title>
            <Row gutter={[20, 20]} >
                {docs.map((doc:any, index:number)=> (
                    <Col span={24} key={index}>
                        <DownloadCard title={doc.title}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Charter;