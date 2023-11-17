import React from "react";
import { get } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import Title from "@/components/Title";
import classes from "./Page.module.scss";
import { getNameWithLang } from "@/utils";
import { BASE_URL_SRC } from "@/constants";
import defaultPost from "@/assets/images/post.jpg";

const Page = ({ content }: { content: any }) => {
	const { t } = useTranslation();

	const src = `${BASE_URL_SRC}${get(content, "image_path", "")}`;

	return (
		<div className={classes.page}>
			<Title>{getNameWithLang(content, "title_", "uz")}</Title>

			<img
				className={classes.banner}
				width='92'
				height='32'
				src={src}
				alt='Deploy with Vercel'
			/>
			<q className={classes.description}>{getNameWithLang(content, "anons_", "uz")}</q>

			<div className={classes.content} dangerouslySetInnerHTML={{ __html: getNameWithLang(content, "body_", "uz") }} />
		</div>
	);
};

export default Page;
