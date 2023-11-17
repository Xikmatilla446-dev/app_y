import React from 'react';
import classes from './Prospectus.module.scss';
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Title from "@/components/Title";
import {Col, Row} from "antd";
import MultiSlider from "@/components/MultiSlider";
import AntPagination from "@/components/Pagination";

const Prospectus = () => {
    const {t} = useTranslation();
    return (
        <div className={classes.section}>
            <Head>
                <title>{t("Istiqbolli loyihalar")}</title>
            </Head>
            <Title>
                {t("Istiqbolli loyihalar")}
            </Title>
            <Row gutter={[40, 40]} justify={"center"}>
                <Col span={24}>
                    <MultiSlider/>
                </Col>
                <Col span={24}>
                    <MultiSlider/>
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

export default Prospectus;