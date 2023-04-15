import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import { FormattedMessage } from "react-intl";

const AboutPage: FC = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<div className={scss.home__page}>
				<h1>
					<FormattedMessage id="page.about.title" />
				</h1>
				<p>
					<FormattedMessage id="page.about.about.me" />
				</p>
			</div>
		</>
	);
};
export default AboutPage;
