"use client";

import { get } from "lodash";
import { Button } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import useTranslation from "next-translate/useTranslation";

import { BASE_URL } from "@/constants";
import Next from "@/assets/svg/next.svg";
import { getNameWithLang } from "@/utils";
import Previous from "@/assets/svg/previous.svg";
import { HomePageContext } from "@/context/PageContexts";

import classes from "./SliderCard.module.scss";

const sliderSettings = {
	speed: 500,
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	initialSlide: 0,
	slidesToShow: 1,
	slidesToScroll: 1
};

const SliderCard = () => {
	const { t } = useTranslation();
	const { contentGetCarousel } = useContext(HomePageContext);
	const slider = useRef<Slider | null>(null);
	const { locale } = useRouter();

	return (
		<div className={classes.slider}>
			<Slider ref={slider} {...sliderSettings}>
				{contentGetCarousel.map((item, key) => {
					const src = `${BASE_URL}${get(item, "image_path", "")}`;

					return (
						<div key={key} className={classes.box}>
							<Image alt="img" src={src} width={850} height={580} objectFit="cover" className={classes.img} />
							<div className={classes.gradient}>
								<div className={classes.content}>
									<Button>{t("So'ngi yangiliklar")}</Button>
									<p className={classes.date}>{get(item, "created_date", "")}</p>
									<h3 className={classes.title}>{getNameWithLang(item, "title_", locale)}</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: getNameWithLang(item, "body_", locale)
										}}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>

			<div className={classes.action}>
				<span onClick={() => slider?.current?.slickPrev()} className={classes.previous}>
					<Previous />
					&nbsp;{t("Oldingisi")}
				</span>
				<span onClick={() => slider?.current?.slickNext()} className={classes.next}>
					{t("Keyingisi")}&nbsp;
					<Next />
				</span>
			</div>
		</div>
	);
};

export default SliderCard;
