import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import { FormattedMessage } from "react-intl";

const HomePage: FC = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className={scss.home__page}>
				<h1>
					<FormattedMessage
						id="page.home.title"
						values={{ b: (info) => <b>{info}</b> }}
					/>
				</h1>
				<FormattedMessage id="page.home.description" />
				<br />
				<br />
				<p>
					<FormattedMessage id="page.home.about.me" />
				</p>
			</div>
		</>
	);
};
export default HomePage;
