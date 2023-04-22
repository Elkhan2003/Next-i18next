import React, { FC } from "react";
import scss from "./Header.module.scss";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

interface linksProps {
	href: string;
	to: string;
	label: any;
	spy: boolean;
	smooth: boolean;
	offset: number;
	duration: number;
}

const Header: FC = () => {
	const { locales, locale: activeLocale, pathname }: any = useRouter();

	const links: linksProps[] = [
		{
			label: <FormattedMessage id="page.header.home" />,
			href: "/",
			to: "/",
			spy: true,
			smooth: true,
			offset: 50,
			duration: 500
		},
		{
			label: <FormattedMessage id="page.header.about" />,
			href: "/about",
			to: "about",
			spy: true,
			smooth: true,
			offset: 50,
			duration: 500
		}
	];

	return (
		<>
			<div className={scss.header}>
				{links.map((link) => (
					<ScrollLink
						key={link.to}
						to={link.to}
						spy={link.spy}
						smooth={link.smooth}
						offset={link.offset}
						duration={link.duration}
						className={
							pathname === link.href
								? `${scss.link} ${scss.active}`
								: `${scss.link}`
						}
					>
						{link.label}
					</ScrollLink>
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
