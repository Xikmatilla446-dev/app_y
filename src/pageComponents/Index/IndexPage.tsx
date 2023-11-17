import React from "react";

import HelpButton from "@/components/HelpButton";
import Statistic from "@/pageComponents/Index/sections/Statistic";
import { MapSection, UsefulSection } from "@/pageComponents/Index/sections";

import { HeaderSection, NewsSection } from "./sections";

const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <NewsSection />
      <Statistic />
      <HelpButton />
      <MapSection />
      <UsefulSection />
    </>
  );
};

export default IndexPage;
