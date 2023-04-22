import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const AboutPage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.about.head.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
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
