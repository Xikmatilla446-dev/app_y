import { HeaderSection, NewsSection} from "./sections";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import HelpButton from "@/components/HelpButton";
import Statistic from "@/pageComponents/Index/sections/Statistic";
import {MapSection, UsefulSection} from "@/pageComponents/Index/sections";

const IndexPage = () => {
    const {t} = useTranslation();
    const news = [
        {col: 6, title: "Yangilik 1"},
        {col: 6, title: "Xalq bilan uchrashuv"},
        {col: 6, title: "Profilaktik tadbir"},
        {col: 6, title: "Joriy yilning 12 oktabr kuni"},

    ]
    const styles = {
        width: "100%"
    }
    return (
        <div style={styles}>
            <HeaderSection/>
            <NewsSection/>
            <Statistic/>
            <HelpButton/>
            <MapSection/>
            <UsefulSection/>

        </div>
    );
};

export default IndexPage;
