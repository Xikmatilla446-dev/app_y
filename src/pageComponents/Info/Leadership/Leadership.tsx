import React, {useState} from 'react';
import Head from "next/head";
import {Container} from "@/components";
import useTranslation from "next-translate/useTranslation";
import Title from "@/components/Title";
import classes from './Leadership.module.scss';
import {Col, Row} from "antd";
import Image from "next/image";
import {motion} from "framer-motion";
import AppealModal from "@/components/AppealModal";
import UserInfoCard from "@/components/UserInfoCard";
import AntPagination from "@/components/Pagination";

const Leadership = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState<any>(false);

    return (
        <>
            <Head>
                <title>{t("Rahbariyat")}</title>
            </Head>

            <div className={classes.leadership}>
                    <Title>
                        {t("Rahbariyat")}
                    </Title>

                    <Row gutter={[40, 40]}>
                        <Col xs={24} sm={24} md={10} lg={10}>
                            <div className={classes.img}>
                                <Image
                                    src={"/images/user.jpg"} alt="ii" width={300} height={300}
                                    objectFit='contain'/>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={14} lg={14}>
                            <div className={classes.body}>
                                <span className={classes.info}>Yangiyo’l shahar hokimi</span>
                                <h4>Sultonov Dilshod Shuhratovich</h4>
                                <ul className={classes.info_content}>
                                    <li>
                                        <p>Манзил: </p>
                                        <span>Yangiyul shahri <br/>Sharaf Rashidov ko‘chasi , 6-uy</span>
                                    </li>
                                    <li>
                                        <p>Телефон: </p><span>0 370 602-00-60</span>
                                    </li>
                                    <li>
                                        <p>e-mail: </p><span
                                        style={{color: "#064EE9"}}>d.shukhratovich@email.uz</span>
                                    </li>
                                    <li>
                                        <p>WEB sayt: </p><span
                                        style={{color: "#064EE9"}}>https://yangiyulshahar.uz</span>
                                    </li>
                                    <li>
                                        <p>Qabul kunlari: </p><span>Chorshanba 15:00 - 17:00 gacha</span>
                                    </li>
                                </ul>
                            </div>
                            <motion.a
                                onClick={() => setVisible(true)}
                                whileHover={{scale: 1.1}}
                                className={classes.send_button}>
                                {t("Murojaat yuborish")}
                            </motion.a>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 40}} gutter={[20, 20]} justify={"center"}>
                        {[...new Array(9)].map((news, index) => (
                            <Col  xs={24} sm={12} md={8} lg={8} key={index}>
                                <UserInfoCard
                                    type={1}
                                    setVisible={setVisible}
                                    key={index}/>
                            </Col>
                        ))}
                        <Col  className={"flex-center"} span={24}>
                            <AntPagination
                                total={18}
                                pageSize={6}
                                className={classes.pagination}
                                style={{margin: "0 auto"}}/>
                        </Col>
                    </Row>


            </div>
            <AppealModal
                visible={visible}
                setVisible={setVisible}
            />
        </>
    )
        ;
};

export default Leadership;