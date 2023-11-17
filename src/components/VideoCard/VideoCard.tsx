import React from 'react';
import classes from './VideoCard.module.scss';
import {Col, Row} from "antd";
import Image from "next/image";
import Play from "@/assets/svg/play.svg";

const VideoCard = () => {
    return (
        <div className={classes.video_card}>
            <Row gutter={[0, 0]} className={classes.row} justify={"start"}>
                <Col xs={24} sm={24} md={16} lg={8}>
                    <div className={classes.main_image}>
                        <Image src={"/images/img_2.png"} alt="slider" width={200} height={210} style={{width: "auto"}}/>
                        <div className={classes.gradient}>
                           <span>
                                <Play/>
                           </span>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <div className={classes.content}>
                        <span className={classes.date}>09.10.2023 й.</span>
                        <h4>“Turkiston” mahallasida istiqomat qiluvchi Xurshid Fozilov...</h4>
                        <p>Yangiyo'l shahar Turkiston mahallasida istqimat qiluvchi Fozilov Xurshid Orifjon o'g'liga berilgan Yoshlar ishlari agentligi tomonidan yordam o'z samarasini ko'rsatib, hozirgi kunda yoshlarni IT sohasiga o'qitib, o'z bilimlarini o'rgatib ularni kasbga yo'nalishtirish oliy maqsadidur.
                            ✅ Hozirgi kunga kelib shu daraja erishdi va tez orada o'zining bilimlari bilan ishsiz          ddIT sohasiga qiziqadigan yoshlarni ish bilan ta'minlaydi.
                            ✅ Buning uchun Davlatimiz prezidenti SH.Mirziyoyevga hamda Yoshlar ishlari ddagentligiga o'z minnatdorchiligini bildirmoqda.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default VideoCard;