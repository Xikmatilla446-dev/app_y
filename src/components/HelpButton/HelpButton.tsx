import React, {useState} from 'react';
import {Button, Input} from "antd";
import classes from './HelpButton.module.scss';
import Question from "@/assets/svg/question.svg";
import Send from "@/assets/svg/send.svg";
import Emoji from "@/assets/svg/emoji.svg";
import Operator from "@/assets/svg/operator.svg";
import {motion} from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

const HelpButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const {t} = useTranslation();


    function sendMessageHandler() {
        const synth = window.speechSynthesis;

        if (input) {
            setMessages([...messages, input]);
            setInput("");
            let u = new SpeechSynthesisUtterance(input);
            u.text = "Assalomu aleykum, murojaatingizni yozib qoldiring";
            u.lang = "uz-UZ";
            u.volume = 1;
            u.rate = 1;
            u.pitch = 1;
            synth.speak(u);
        }

    }

    return (
        <div className={classes.help_box}>
            <Button
                icon={<Question/>}
                onClick={() => setIsOpen(!isOpen)} className={classNames(classes.btn, isOpen ? classes.open : "")}>
                &nbsp;{t("Sizga yordam kerakmi?")}
            </Button>


            <motion.div
                layout
                initial={{borderRadius: 0, speed: 2}}
                className={classNames(classes.parent, isOpen ? classes.parent_open : "")}
                transition={{
                    opacity: {ease: "linear"},
                }}
            >
                <div className={classes.content}>
                    <div className={classes.header}>
                        <div className={classes.operator}>
                            <Operator/>
                        </div>
                        <div>
                            <span>{t("Operator")}</span>
                            <p>...{t("yozmoqda")}</p>
                        </div>
                    </div>

                    <div className={classes.body}>
                        <span className={classes.day}>{t("Bugun")}</span>
                        <div className={classes.messages}>
                            <div className={classes.message}>
                                <div className={classes.operator_user}>
                                    <p>{t("Assalomu aleykum, murojaatingizni yozib qoldiring")}</p>
                                </div>
                            </div>
                            <div className={classes.message}>
                                <div className={classes.user}>
                                    <p>{t("Assalomu aleykum, murojaatingizni yozib qoldiring")}</p>
                                    <span>{t("17:44")}</span>
                                </div>
                            </div>
                            {messages.map((item: any, index: number) => (
                                <div key={index} className={classes.message}>
                                    <div className={classes.user}>
                                        <p>{item}</p>
                                        <span>{t("17:44")}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={classes.footer}>
                        <div className={classes.input}>
                            <Input
                                onKeyDown={(event: any) => {
                                    if (event.keyCode == 13) {
                                        sendMessageHandler()
                                    }
                                }}
                                value={input} onChange={(event: any) => setInput(event.target.value)}/>
                            <span onClick={sendMessageHandler}>
                                <Send/>
                            </span>
                        </div>
                        <span>
                            <Emoji/>
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HelpButton;