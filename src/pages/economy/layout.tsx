import React from "react";
import useTranslation from "next-translate/useTranslation";
import classes from './layout.module.scss';
import {Col, Row} from "antd";
import Menu from "@/components/Menu";
import {Container} from "@/components";
import SecondNewsCard from "@/components/SecondNewsCard";
import Slider from "react-slick";


export default function EconomyLayout({children}: {
    children: React.ReactNode
}) {
    const {t} = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
    };
    const menu = [
        {
            title: t("Yashil makon"),
            link: "/economy/green",
        },
        {
            title: t("Temir daftar"),
            link: "/economy/underprivileged",
        },
        {
            title: t("Ayollar daftari"),
            link: "/economy/woman",
        },
        {
            title: t("Yoshlar daftari"),
            link: "/economy/young",
        },
        {
            title: t("Istiqbolli loyihalar"),
            link: "/economy/prospectus",
        },
        {
            title: t("Mahalliy byudjet"),
            link: "/economy/budget",
        },
        {
            title: t("Infratuzulma loyihalari"),
            link: "/economy/projects",
        },
        {
            title: t("Eksport"),
            link: "/economy/export",
        },
        {
            title: t("Import"),
            link: "/economy/import",
        },
        {
            title: t("Mahalliylashtirish ko'rsatkichlari"),
            link: "/economy/indicators",
        },
        {
            title: t("Chet el sarmoyasi hisobidan moliyalashtiriladigan loyihalar"),
            link: "/economy/investment",
        }
    ]

    return (
        <section className={classes.layout}>
            <Container>
                <Row gutter={[40, 20]} justify={"center"}>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        {children}
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={8}>
                        <Menu menu={menu} title={t("Iqtisodiyot")}/>
                        <h3 className={classes.info_title}>{t("Yangiliklar")}</h3>
                        <Slider {...settings}>
                        {[...new Array(3)].map((news, index) => (
                            <SecondNewsCard key={index}/>
                        ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}