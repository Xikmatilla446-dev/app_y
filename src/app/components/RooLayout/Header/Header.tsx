'use client'
import Image from "next/image";
import Languages from "./Languages";
import { Container } from "@/components";
import classes from "./Header.module.scss";
import Minus from "@/assets/svg/A-Minus.svg";
import Plus from "@/assets/svg/A-Plus.svg";
import Search from "@/assets/svg/search.svg";
import Mute from "@/assets/svg/mute.svg";
import Eye from "@/assets/svg/eye.svg";
import Mail from "@/assets/svg/mail.svg";
import Phone from "@/assets/svg/phone.svg";
import InfoLine from "../InfoLine/InfoLine";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

const Header = () => {
	const [font, setFont] = useState(60);

	const services = [
		{
			title:  "Ovozli o’qish",
			icon: <Mute />
		},
		{
			title: "Zaif ko'ruvchilar uchun",
			type: "eye",
			icon: <Eye />
		},
		{
			title: "yangiyol_shahar@mail.ru",
			icon: <Mail />
		},
		{
			title: "370 602-00-60",
			icon: <Phone />
		}
	];

	function fontSizeHandler(value: any) {
		document.body.classList.remove(`fs-20`);
		document.body.classList.remove(`fs-40`);
		document.body.classList.remove(`fs-60`);
		document.body.classList.remove(`fs-80`);
		document.body.classList.remove(`fs-100`);
		document.body.classList.add(`fs-${value}`);
	}

	function calculate(value: any, type = "add") {
		if (type === "add" && value < 100) {
			setFont(value + 20);
			return value + 20;
		} else if (type === "minus" && value > 20) {
			setFont(value - 20);
			return value - 20;
		} else return value;
	}

	function bgColorHandler(type: any) {
		if (type === "greyscaleMode") {
			document.body.classList.remove("greyscaleInvertMode");
			document.body.classList.add("greyscaleMode");
		} else if (type === "greyscaleInvertMode") {
			document.body.classList.remove("greyscaleMode");
			document.body.classList.add("greyscaleInvertMode");
		} else {
			document.body.className = "";
		}
	}

	function onRefresh() {

	}

	return (
		<div className={classes.wrapper}>
			<Container>
				<section>
					<div className={classes.left}>
						<div>
							<span onClick={onRefresh} className={classes.logo}>
								<Image src={"/images/logo.svg"} alt="e-imzo" width={180} height={50} style={{ width: "auto" }} />
							</span>
							<div className={classes.action_font}>
								<i onClick={() => fontSizeHandler(calculate(font, "minus"))}>
									<Minus />
								</i>
								<i onClick={() => fontSizeHandler(calculate(font, "add"))}>
									<Plus />
								</i>
							</div>
							{/*{services?.map((item: any, k) => (*/}
							{/*	<span key={k} className={classes.service}>*/}
							{/*		{item?.type === "eye" ? (*/}
							{/*			<div*/}
							{/*				placement="bottom"*/}
							{/*				title={""}*/}
							{/*				content={*/}
							{/*					<div className={classes.appearance}>*/}
							{/*						<ul>*/}
							{/*							<li className={classes.default} onClick={() => bgColorHandler("default")}>*/}
							{/*								A*/}
							{/*							</li>*/}
							{/*							<li className={classes.greyscale} onClick={() => bgColorHandler("greyscaleMode")}>*/}
							{/*								A*/}
							{/*							</li>*/}
							{/*							<li*/}
							{/*								className={classes["greyscale-invert"]}*/}
							{/*								onClick={() => bgColorHandler("greyscaleInvertMode")}>*/}
							{/*								A*/}
							{/*							</li>*/}
							{/*						</ul>*/}
							{/*					</div>*/}
							{/*				}*/}
							{/*				trigger="click">*/}
							{/*				<div className={"d-flex"}>*/}
							{/*					{item.icon}&nbsp;*/}
							{/*					{item.title}*/}
							{/*				</div>*/}
							{/*			</div>*/}
							{/*		) : (*/}
							{/*			<div className={"d-flex"}>*/}
							{/*				{item.icon}&nbsp;*/}
							{/*				{item.title}*/}
							{/*			</div>*/}
							{/*		)}*/}
							{/*	</span>*/}
							{/*))}*/}
						</div>
					</div>
					<section className={classes.right}>
						<div>
							<Languages />
						</div>
						<div>
							<span className="pointer semibold">
								<Search />
							</span>
						</div>
					</section>
				</section>
			</Container>
			<InfoLine />
			<Navbar />
		</div>
	);
};

export default Header;
