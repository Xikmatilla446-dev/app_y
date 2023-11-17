import React from 'react';
import classes from './UserInfoCard.module.scss';
import Image from "next/image";
import {motion} from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

const UserInfoCard = ({visible, setVisible, type}: any) => {
    const {t} = useTranslation();

    const info_position = "Hokimning moliya-iqtisodiyot va kambag'allikni qisqartirish masalalari bo'yicha birinchi o'rinbosari"
    const name = "ISANBAYEV AZIZ NABIBULLAYEVICH"

    return (
        <div className={classNames(classes.user_info, type === 2 ? classes.user_card : "")}>
            <Image
                className={classes.img}
                src={"/images/img_1.png"} alt="ii" width={200} height={250} objectFit='contain'/>
            {type === 2 ? (
                <div className={classes.body}>
                     <span className={classes.info_position}>
                    {info_position}
                </span>
                    <h4>
                        {name}
                    </h4>
                </div>
            ) : (
                <div className={classes.body}>
                <span className={classes.info_position}>
                    {info_position}
                </span>
                    <h4>
                        {name}
                    </h4>
                    <div className={classes.box}>
                        <div>
                            <span>Qabul kunlari:</span>
                            <p>Chor. 15:00 dan 17:00 gacha</p>
                        </div>
                        <div className={classes.time}>
                            <div>
                                <span>Телефон:</span>
                                <p>0 370 602-33-32</p>
                            </div>
                            <div>
                                <span>Телефон:</span>
                                <p>0 370 602-33-32</p>
                            </div>
                        </div>
                    </div>
                    <motion.a
                        onClick={() => setVisible(true)}
                        whileHover={{scale: 1.1}}
                        className={classes.send_button}>
                        {t("Murojaat yuborish")}
                    </motion.a>
                </div>
            )}

        </div>
    );
};

export default UserInfoCard;