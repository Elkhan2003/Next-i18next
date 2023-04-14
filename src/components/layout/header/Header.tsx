import React, { FC } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Header: FC = () => {
	const { locales, locale: activeLocale }: any = useRouter();

	return (
		<>
			<div className={scss.switch__langs}>
				{[...locales].map((locale) => (
					<Link
						className={
							locale === activeLocale
								? `${scss.lang} ${scss.active}`
								: `${scss.lang}`
						}
						key={locale}
						href="/"
						locale={locale}
					>
						{locale}
					</Link>
				))}
			</div>
		</>
	);
};
export default Header;
