import React, {useEffect, useRef, useState } from 'react';
import classes from './MapSection.module.scss';
import {Container, Title} from "@/components";
import useTranslation from "next-translate/useTranslation";
import {Col, Row} from "antd";
import Maps from "@/components/Maps/Maps";
import classNames from "classnames";


const MapSection = () => {
    const {t} = useTranslation();
    const pointRef = useRef<any>(null)
    const [activePoint, setActivePoint] = useState("Nov")

    const items = [
        {id: "Nov", name: "Nov", boss: "Yunusov Kamoliddin Maxammadaliyevich", phone: "88 013-85-75"},
        {id: "Yangihayot", name: "Yangihayot", boss: "Hamroqulov Muzaffar Baxodirovich", phone: "97 669-25-09"},
        {id: "Yangiobod", name: "Yangiobod", boss: "Bobokalonov Ro‘zimatbek G‘ayrat o‘g‘li", phone: "99 921-96-36"},
        {id: "Faravon", name: "Faravon", boss: "Rustamov Shukur Xamdamovich", phone: "99 976-45-41"},
        {id: "Fayzli", name: "Fayzli", boss: "Kayumov Iskandar Raxmanberdiyevich", phone: "97 410-70-39"},
        {id: "Oltinobod", name: "Oltinobod", boss: "Mirzaraximov Ro‘zmat Madaminovich", phone: "97 118-77-00"},
        {id: "Lazzat", name: "Lazzat", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Ramadon", name: "Ramadon", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Sabo", name: "Sabo", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Ishchilar", name: "Ishchilar shaxarchasi", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Fayzobod", name: "Fayzobod", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Bog‘bon", name: "Bog‘bon", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Mezon", name: "Mezon", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Baxt", name: "Baxt", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Yangibog", name: "Yangibog", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Olmos", name: "Olmos", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Baxor", name: "Baxor", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Turkiston", name: "Turkiston", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Mustakillik", name: "Mustakillik", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Mevazor", name: "Mevazor", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Navro‘z", name: "Navro‘z", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
        {id: "Qovunchi", name: "Qovunchi tepa", boss: "Fazilov Boxodir Babadjanovich", phone: "99 803-61-33"},
    ];
    const executeScroll = () => {
        const refBounds = document.getElementById(activePoint);
        const top = refBounds.offsetTop - refBounds.offsetHeight - 25
        pointRef.current?.scrollTo({
            top: top > 0 ? top : 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        executeScroll()
    }, [activePoint])


    return (
        <div className={classes.mapSection}>
            <Container>
                <Title>
                    {t("Shahar xaritasi")}
                </Title>

                <Row gutter={[40, 40]} justify={"space-between"}>
                    <Col xs={24} sm={24} md={24} lg={8} >
                        <Maps
                            activePoint={activePoint}
                            setActivePoint={setActivePoint}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={16} >
                        <div className={classes.box}>
                            <Row gutter={[20, 20]} className={classes.header}>
                                <Col  xs={24} sm={6} md={6} lg={6} >
                                    <span>{t("Mahalla nomi")}</span>
                                </Col>
                                <Col  xs={24} sm={12} md={12} lg={12} >
                                    <span>{t("Raisi F.I.Sh")}</span>
                                </Col>
                                <Col xs={24} sm={6} md={6} lg={6}>
                                    <span>
                                        {t("Telefon")}
                                    </span>
                                </Col>
                            </Row>
                            <div ref={pointRef} className={classes.body}>
                                {items.map((item: any, index) => (
                                    <Row id={item.id}
                                         onClick={() => {
                                             setActivePoint(item.id);
                                         }}
                                         key={index}
                                         className={classNames(classes.row, item.id === activePoint ? classes.map_active : '')}>
                                        <Col xs={24} sm={6} md={6} lg={6}>
                                            <div>
                                                <strong>{index + 1}</strong>
                                                &nbsp;
                                                &nbsp;
                                                <span>{item.name}</span>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={12} md={12} lg={12}>
                                            <span>{item.boss}</span>
                                        </Col>
                                        <Col xs={24} sm={6} md={6} lg={6}>
                                        <span>
                                            {item.phone}
                                        </span>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default MapSection;