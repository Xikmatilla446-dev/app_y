import React, {useState} from 'react';
import classes from './AppealModal.module.scss';
import {Modal} from "@/components";
import useTranslation from "next-translate/useTranslation";
import {Button, Col, DatePicker, Input, Row} from "antd";
import Reload from "@/assets/svg/reload.svg";
import Success from "@/assets/svg/success.svg";

const AppealModal = ({visible, setVisible}) => {
    const {t} = useTranslation();

    const [send, setSend] = useState(false)
    const {TextArea} = Input

    function onCancel() {
        setVisible(!visible);
        setSend(false);
    }


    function sendHandler() {
        setSend(true)
    }

    return (
        <>
            <Modal
                width={800}
                open={visible} onCancel={onCancel}>

                {!send ? (
                    <div className={classes.modal}>
                        <h2 className={classes.title}>{t("Биз билан боғланиш")}</h2>
                        <Row gutter={[20, 20]} justify={"space-between"} className={classes.info}>
                            <Col span={8}>
                                <span>MANZIL:</span>
                                <p>Yangiyul shahri, Sharaf Rashidov ko‘chasi , 6-uy</p>
                            </Col>
                            <Col span={8}>
                                <span>Telefon:</span>
                                <p>(71) 123-45-67</p>
                            </Col>
                            <Col span={8}>
                                <span>E-mail:</span>
                                <p>info@yangiyol_shahar.uz</p>
                            </Col>
                        </Row>

                        <Row gutter={[20, 20]} className={classes.form}>
                            <Col span={12}>
                                <Input placeholder={t("F.I.Sh")}/>
                            </Col>
                            <Col span={12}>
                                <Input placeholder={t("Pochta e-mail")}/>
                            </Col>
                            <Col span={12}>
                                <DatePicker
                                    style={{width: "100%"}}
                                    placeholder={t("Tug’ilgan sana")}/>
                            </Col>
                            <Col span={12}>
                                <Input placeholder={t("Pasport seriya va raqamingiz")}/>
                            </Col>
                            <Col span={24}>
                                <TextArea row={8} placeholder={t("Maʼlumot")}/>
                            </Col>

                        </Row>
                        <Row className={classes.send}  justify={"space-between"}>
                            <Col span={8}>
                                <div className={classes.capture}>
                                    <div>
                                        <Input/>
                                        <span>5347</span>
                                    </div>
                                    <Reload/>
                                </div>
                            </Col>
                            <Col span={8}>
                                <Button onClick={sendHandler}>{t("yuborish")}</Button>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <div className={classes.success}>
                        <Success/>
                        <h3>{t("Sizning murojaatingiz muvofiqqiyatli yuborildi!")}</h3>
                        <div>
                                <span>
                                    {t("Sizning ariza raqamingiz")}
                                </span>
                            <p>123456789</p>
                        </div>
                        <p>{t("Murojaatingiz 15 ish kunida ko’rib chiqiladi")}</p>
                        <Button
                            onClick={onCancel}
                        >{t("TASDIQLASH")}</Button>
                    </div>
                )}

            </Modal>
        </>
    );
};

export default AppealModal;