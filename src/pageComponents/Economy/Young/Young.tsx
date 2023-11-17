import React from 'react';
import classes from './Young.module.scss';
import Head from "next/head";
import Title from "@/components/Title";
import useTranslation from "next-translate/useTranslation";
import {Col, Row} from "antd";
import AntPagination from "@/components/Pagination";
import VideoCard from "@/components/VideoCard";


const Young = () => {

    const { t } = useTranslation();
    return (
        <div className={classes.section}>
            <Head>
                <title>{t("Yoshlar daftari")}</title>
            </Head>
            <Title>
                {t("Yoshlar daftari")}
            </Title>

            <Row gutter={[40, 40]} justify={"center"}>
                <Col span={24}>
                    <VideoCard/>
                </Col>
                <Col span={24}>
                    <VideoCard/>
                </Col>
                <Col className={"flex-center"}>
                    <AntPagination
                        total={18}
                        pageSize={6}
                        className={classes.pagination}
                        style={{margin: "0 auto"}}/>
                </Col>
            </Row>
        </div>
    );
};

export default Young;