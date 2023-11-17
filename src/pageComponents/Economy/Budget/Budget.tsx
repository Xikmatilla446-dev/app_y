import React from 'react';
import classes from "./Budget.module.scss";
import Head from "next/head";
import Title from "@/components/Title";
import useTranslation from "next-translate/useTranslation";
import {Col} from "antd";
import {PdfViewer} from "@/components";

const Budget = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.budget}>
            <Head>
                <title>{t("Mahalliy byudjet")}</title>
            </Head>
            <Title>
                {t("Mahalliy byudjet")}
            </Title>

            <div className={classes.content}>
                <h4>{t("O‘ZBЕKISTON RЕSPUBLIKASI MOLIYA VAZIRINING BUYRUG‘I BUDJET JARAYONINING OCHIQLIGINI TA’MINLASH MAQSADIDA RASMIY VЕB-SAYTLARDA MA’LUMOTLARNI JOYLASHTIRISH TARTIBI TUG‘RISIDAGI NIZOMNI TASDIQLASH HAQIDA")}</h4>

            </div>
            <Col span={24}>
                <PdfViewer url={"http://www.africau.edu/images/default/sample.pdf"} />
            </Col>
        </div>
    );
};

export default Budget;