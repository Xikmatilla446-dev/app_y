"use client";

import { IContentGetCarousel } from "@/types";
import { ReactNode, createContext } from "react";

export interface IHomePageProps {
	contentGetCarousel: IContentGetCarousel[];
}

const defaultValue = {
	contentGetCarousel: []
};

export const HomePageContext = createContext<IHomePageProps>(defaultValue);

interface IProps extends IHomePageProps {
	children: ReactNode;
}

const HomePageContextProvider = ({ children, contentGetCarousel }: IProps) => {
	return <HomePageContext.Provider value={{ contentGetCarousel }}>{children}</HomePageContext.Provider>;
};

export default HomePageContextProvider;
