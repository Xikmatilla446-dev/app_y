import React, { ReactNode } from "react";
import useTranslation from "next-translate/useTranslation";
import classes from "./layout.module.scss";
import { Col, Row } from "antd";
import Menu from "@/components/Menu";
import { Container } from "@/components";
import SecondNewsCard from "@/components/SecondNewsCard";

export default function PostLayout({ children }: { children: ReactNode }) {
	const { t } = useTranslation();

	const menu = [
		{
			title: t("Rahbariyat"),
			link: "/info/leadership"
		},
		{
			title: t("Markaziy apparat"),
			link: "/info/central"
		},
		{
			title: t("Tashkiliy tuzilma"),
			link: "/info/structure"
		},
		{
			title: t("Bo’sh ish o’rinlari"),
			link: "/info/vacancies"
		},
		{
			title: t("Shahar hokimligi nizomi"),
			link: "/info/charter"
		}
	];

	return (
		<section className={classes.layout}>
			<Container>
				<Row gutter={[40, 20]} justify={"center"}>
					<Col xs={24} sm={24} md={24} lg={16}>
						{children}
					</Col>
					<Col xs={24} sm={24} md={16} lg={8}>
						<Menu menu={menu} title={t("Shahar hokimligi")} />
						<h3 className={classes.info_title}>{t("Yangiliklar")}</h3>
						{[...new Array(3)].map((news, index) => (
							<SecondNewsCard key={index} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
}
