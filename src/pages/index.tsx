import Head from "next/head";

import { IContentGetCarousel, IContentGetMenu } from "@/types";
import { request } from "@/services/api";
import IndexPage from "@/pageComponents/Index";
import HomePageContextProvider from "@/context/PageContexts/HomePageContext/HomePageContext";

export const getServerSideProps = async () => {
	const contentGetCarousel = await request.get("/content/get-carousel");

	return {
		props: {
			contentGetCarousel: contentGetCarousel.data ?? []
		}
	};
};

interface IProps {
	contentGetCarousel: IContentGetCarousel[];
}

export default function Home({ contentGetCarousel }: IProps) {
	return (
		<>
			<Head>
				<title>YANGIYO'L SHAHAR HOKIMLIGI</title>
				<meta name="description" content="YANGIYO'L SHAHAR HOKIMLIGI width=device-width, initial-scale=1" />
				<meta name="keywords" content="YANGIYO'L SHAHAR HOKIMLIGI" />

				<meta name="description" content={JSON.stringify({ contentGetCarousel })} />
			</Head>

			<HomePageContextProvider {...{ contentGetCarousel }}>
				<IndexPage />
			</HomePageContextProvider>
		</>
	);
}
