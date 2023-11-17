import React from 'react';
import classes from './Vacancies.module.scss';
import useTranslation from "next-translate/useTranslation";
import Title from "@/components/Title";
import {Col, DatePicker, Row, Select} from "antd";
import VacancyCard from "@/components/VacancyCard/VacancyCard";

const Vacancies = () => {
    const {t} = useTranslation();

    const positions =[
        {
            date: "09.10.2023 й.",
            title: "Yordamchi ishchi",
            salary: "1 200 000 so’m +",
            type: "Yarim stavka",
            company: "“MIRZALI KELAJAGI” FERMER XO‘JALIGI",
            address: "Toshkent viloyati, Yangiyo'l tumani",
            phone: "+(998) 99 792 9055",
            email:"example@com.uz",
            description: "Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma shanba Dam olish kunlari: yakshanba. Ish vaqti: 09: 00 dan 18: 00 gacha"
        },
        {
            date: "09.10.2023 й.",
            title: "Yordamchi ishchi",
            salary: "1 000 000 so’m +",
            type: "To’liq stavka",
            company: "“OKS Technologies” veb-saytimiz ishlab chiquvchilariga katta minnatdorchilik bildiradi.",
            address: "Toshkent viloyati, Yangiyo'l tumani A.Ortiqov 21-uy",
            phone: "+(998) 99 792 9055",
            email:"example@com.uz",
            description: "Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma shanba Dam olish kunlari: yakshanba. Ish vaqti: 09: 00 dan 18: 00 gacha Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma shanba Dam olish kunlari: yakshanba. Ish vaqti: 09: 00 dan 18: 00 gacha"
        },
        {
            date: "09.10.2023 й.",
            title: "Manager ishchi kerak",
            salary: "1 800 000 so’m +",
            type: "To’liq stavka",
            company: "“MIRZALI KELAJAGI” FERMER XO‘JALIGI",
            address: "Toshkent viloyati, Yangiyo'l tumani",
            phone: "+(998) 99 792 9055",
            email:"example@com.uz",
            description: "Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma shanba Dam olish kunlari: yakshanba. Ish vaqti: 09: 00 dan 18: 00 gacha Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma shanba Dam olish kunlari: yakshanba. Ish vaqti: 09: 00 dan 18: 00 gacha"
        }
    ]

    return (
        <div className={classes.vacancies}>
            <Title>
                {t("Bo’sh ish o’rinlari")}
            </Title>
            <div className={classes.content}>

                <Row gutter={[20, 20]} justify={"start"}>
                    <Col span={6}>
                        <DatePicker
                            style={{width: "100%"}}
                            placeholder={t("Sanani tanlang")} />
                    </Col>
                    <Col span={6}>
                        <Select
                            style={{width: "100%"}}
                            placeholder={t("To’liq stavka")}/>
                    </Col>
                </Row>
                <Row gutter={[40, 40]} justify={"start"}>
                    {positions.map((position, index:number)=> (
                        <Col key={index} span={24}>
                            <VacancyCard position={position}/>
                        </Col>
                    ))}

                </Row>
            </div>
        </div>
    );
};

export default Vacancies;