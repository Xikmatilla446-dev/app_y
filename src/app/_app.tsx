'use client'

import "@/assets/sass/main.scss";

import localFont from "next/font/local";
import type { AppProps } from "next/app";

import RootLayout from "./components/layout";

const ProximaNova = localFont({
	src: [
		{
			path: "../assets/font/Inter/Inter-Bold.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../assets/font/Inter/Inter-Regular.ttf",
			weight: "400",
			style: "italic"
		},
		{
			path: "../assets/font/Inter/Inter-Medium.ttf",
			weight: "500",
			style: "normal"
		},
		{
			path: "../assets/font/Inter/Inter-SemiBold.ttf",
			weight: "600",
			style: "normal"
		},
		{
			path: "../assets/font/Inter/Inter-Bold.ttf",
			weight: "700",
			style: "normal"
		}
	]
});


const App = ({ Component, pageProps }: AppProps) => {

	return (
		<div className={ProximaNova.className}>
					<RootLayout>
						<Component {...pageProps} />
					</RootLayout>
		</div>
	);
};

export default App;
