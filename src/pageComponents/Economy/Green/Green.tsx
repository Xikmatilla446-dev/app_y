import React from 'react';
import classes from './Green.module.scss';
import Title from "@/components/Title";
import useTranslation from "next-translate/useTranslation";
import {DownloadCard, MultiSlider} from "@/components";
import Head from "next/head";

const Green = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.green}>
            <Head>
                <title>{t("Yashil makon")}</title>
            </Head>
            <Title>
                {t("Yashil makon")}
            </Title>
            <div className={classes.content}>
                <DownloadCard
                    date={"09.10.2023 й."}
                    title={t("Yashil makon 2023 yil")}/>

               <div className={"mt-10 w100"}>
                   <MultiSlider/>
               </div>
            </div>
        </div>
    );
};

export default Green;