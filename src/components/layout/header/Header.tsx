import React, { FC } from "react";
import scss from "./Header.module.scss";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

interface linksProps {
	href: string;
	label: any;
}

const Header: FC = () => {
	const { locales, locale: activeLocale, pathname }: any = useRouter();

	const links: linksProps[] = [
		{
			href: "/",
			label: <FormattedMessage id="page.header.home" />
		},
		{
			href: "/about",
			label: <FormattedMessage id="page.header.about" />
		}
	];

	return (
		<>
			<div className={scss.header}>
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={
							pathname === link.href
								? `${scss.link} ${scss.active}`
								: `${scss.link}`
						}
					>
						{link.label}
					</Link>
				))}
			</div>
			<div className={scss.switch__langs}>
				{[...locales].map((locale) => (
					<Link
						key={locale}
						href={pathname}
						locale={locale}
						className={
							locale === activeLocale
								? `${scss.lang} ${scss.active}`
								: `${scss.lang}`
						}
					>
						{locale}
					</Link>
				))}
			</div>
		</>
	);
};
export default Header;
