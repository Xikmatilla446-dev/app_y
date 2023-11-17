import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "./layout";
import { request } from "@/services/api";
import Page from "@/pageComponents/Page";
import { getNameWithLang } from "@/utils";
import { IContentPageView } from "@/types";

export const getServerSideProps = async () => {
	const contentPageView = await request.get("/content/page-view?id=4");

	return {
		props: {
			contentPageView: contentPageView.data ?? []
		}
	};
};

interface IProps {
	contentPageView: IContentPageView;
}

export default function Post({ contentPageView }: IProps) {
	const { locale } = useRouter();

	return (
		<Layout>
			<Head>
				<title>{getNameWithLang(contentPageView, "title_", locale)}</title>
				<meta name="description" content={getNameWithLang(contentPageView, "body_", locale)} />
			</Head>

			<Page content={contentPageView} />
		</Layout>
	);
}
