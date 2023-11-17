"use client";

import { IContentGetMenu } from "@/types";
import { ReactNode, createContext } from "react";

export interface IHomePageProps {
	contentGetMenu: IContentGetMenu[];
}

const defaultValue = {
	contentGetMenu: []
};

export const GlobalContext = createContext<IHomePageProps>(defaultValue);

interface IProps extends IHomePageProps {
	children: ReactNode;
}

const GlobalContextProvider = ({ children, contentGetMenu }: IProps) => {
	return <GlobalContext.Provider value={{ contentGetMenu }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
