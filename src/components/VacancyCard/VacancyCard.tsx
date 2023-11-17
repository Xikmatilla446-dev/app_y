import React, {useState} from 'react';
import classes from './VacancyCard.module.scss';
import useTranslation from "next-translate/useTranslation";
import {Col, Row} from "antd";
import ArrowTop from "@/assets/svg/arrow.top.svg";
import ArrowBottom from "@/assets/svg/arrow_bottom.svg";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";

const VacancyCard = ({position}: any) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const {
        date,
        title,
        salary,
        type,
        company,
        address,
        phone,
        email,
        description
    } = position;

    return (
        <div className={classes.card}>
            <span className={classes.date}>
                {date}
            </span>
            <div className={classes.top}>
               <div className={classes.title}>
                   <h4>{title}</h4>
                   :&nbsp;
                   <span className={classes.type}>
                    {type}
                </span>
               </div>
                <div className={classes.salary}>
                    <span>{t("Maosh")}:&nbsp;&nbsp; </span>
                    <p>{salary}</p>
                </div>
            </div>
            <Row gutter={[10, 10]} justify={"start"} className={classes.info}>
                <Col span={10}>
                    <span className={classes.company_name}>{company}</span>
                    <p>{address}</p>
                </Col>
                <Col span={6}>
                    <span>{t("Telefon")}:</span>
                    <p>{phone}</p>
                </Col>
                <Col span={6}>
                    <span>{t("email")}:</span>
                    <p>{email}</p>
                </Col>
            </Row>
            <div className={classes.bottom}>
                <div onClick={()=> setIsOpen(!isOpen)} className={classes.section}>
                    <span>{t("Qo’shimcha ma’lumotlar")}</span>
                    <span>{isOpen ? <ArrowBottom/> : <ArrowTop/>}</span>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={classNames(classes.content)}
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <p>{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>


        </div>
    );
};

export default VacancyCard;