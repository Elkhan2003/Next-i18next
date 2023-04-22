import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const HomePage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.home.head.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={scss.home__page}>
				<h1>
					<FormattedMessage
						id="page.home.title"
						values={{ b: (info) => <b>{info}</b> }}
					/>
				</h1>
				<FormattedMessage id="page.home.description" />
			</div>
		</>
	);
};
export default HomePage;
