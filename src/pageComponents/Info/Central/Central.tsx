import React, {useState} from 'react';
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import classes from './Central.module.scss';
import {Col, Row} from "antd";
import AppealModal from "@/components/AppealModal";
import UserInfoCard from "@/components/UserInfoCard";
import AntPagination from "@/components/Pagination";
import Title from "@/components/Title";

const Central = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState<any>(false);


    return (
        <div className={classes.central}>
            <Head>
                <title>{t("Markaziy apparat")}</title>
            </Head>
            <Title>
                {t("Markaziy apparat")}
            </Title>
            <Row  gutter={[20, 20]} justify={"center"}>
                {[...new Array(6)].map((news, index) => (
                    <Col xs={24} sm={24} md={24} lg={24} key={index}>
                        <UserInfoCard
                            type={2}
                            visible={visible}
                            setVisible={setVisible}
                            key={index}/>
                    </Col>
                ))}
                <Col className={classes.pagination} span={24}>
                    <AntPagination
                        total={18}
                        pageSize={6}
                        style={{margin: "0 auto"}}/>
                </Col>
            </Row>
            <AppealModal
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    )
        ;
};

export default Central;