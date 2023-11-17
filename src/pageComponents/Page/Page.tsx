import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import classes from "./Page.module.scss";
import Title from "@/components/Title";
import { get } from "lodash";
import { getNameWithLang } from "@/utils";
import { useRouter } from "next/router";
import { BASE_URL } from "@/constants";
import defaultPost from "@/assets/images/post.jpg";

const Page = ({ content }: { content: any }) => {
	const { t } = useTranslation();
	const { locale } = useRouter();

	const src = `${BASE_URL}${get(content, "image_path", "")}`;

	return (
		<div className={classes.page}>
			<Title>{getNameWithLang(content, "title_", locale)}</Title>

			<Image
				// onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
				// 	event.target.id = require("@/assets/images/post.jpg");
				// 	event.target.srcset = require("@/assets/images/post.jpg");
				// }}

				// fill
				alt="img"
				height={500}
				width={1200}
				objectFit="cover"
				objectPosition="center"
				src={defaultPost.src}
				className={classes.banner}
			/>

			<q className={classes.description}>{getNameWithLang(content, "anons_", locale)}</q>

			<div className={classes.content} dangerouslySetInnerHTML={{ __html: getNameWithLang(content, "body_", locale) }} />
		</div>
	);
};

export default Page;
