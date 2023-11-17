import { UseQueryOptions } from "@tanstack/react-query";

export interface IMain {
	enabled?: boolean;
	options?: UseQueryOptions;
}

export interface IPage {
	page?: string;
	size?: string;
}
