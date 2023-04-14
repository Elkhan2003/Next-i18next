import Head from "next/head";
import React, { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children?: ReactNode;
	dir?: any;
}

const Layout: FC<LayoutProps> = ({ children, dir }) => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.home.head.title" });
	const description: any = intl.formatMessage({
		id: "page.home.head.meta.description"
	});

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/favicon.ico" hrefLang="x-default" />
				<link rel="icon" href="/favicon.ico" hrefLang="en" />
				<link rel="icon" href="/favicon.ico" hrefLang="fr" />
			</Head>
			<div dir={dir} className={`${scss.layout} ${inter.className}`}>
				<header>
					<Header />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
export default Layout;
