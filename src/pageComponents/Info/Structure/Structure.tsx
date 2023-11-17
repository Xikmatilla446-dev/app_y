import React from 'react';
import classes from "./Structure.module.scss";
import Title from "@/components/Title";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Structure = () => {

    const {t} = useTranslation();

    return (
        <div className={classes.structure}>
            <Title>
                {t("Tashkiliy tuzilma")}
            </Title>


            <div className={classes.content}>
                <Image
                    src={"/images/img55.png"} alt="ii" width={300} height={300}
                    objectFit='contain'/>
            </div>

        </div>
    );
};

export default Structure;