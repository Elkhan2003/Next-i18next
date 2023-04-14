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
				<p>
					<FormattedMessage id="page.home.about.me" />
				</p>
			</div>
		</>
	);
};
export default AboutPage;
