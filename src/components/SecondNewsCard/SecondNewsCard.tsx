import React from 'react';
import classes from './SecondNewsCard.module.scss';
import Image from "next/image";
import Eye from "@/assets/svg/eye.svg";


const SecondNewsCard = () => {
    return (
        <div className={classes.news}>
           <div  className={classes.img}>
               <Image src={"/images/img.png"} alt="ii" width={400} height={300} objectFit='contain'/>
           </div>
            <div className={classes.content}>
                <div className={classes.top}>
                    <span className={classes.date}>
                        09.10.2023 й.
                    </span>
                    <span className={classes.count}><Eye/> &nbsp; 1 135</span>
                </div>

                <h4>Shahar hokimi qabuli o‘tkazildi</h4>
                <p>Yangiyo‘l shahar hokimligida bo‘lib o‘tgan fuqarolar qabulida 50 nafardan ortiq fuqarolarning
                    subsidiya, moddiy yordam, uy taʼmiri, tibbiy yordam kabi masalalari o‘rganilib,</p>
            </div>
        </div>
    );
};

export default SecondNewsCard;