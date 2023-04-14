import React, { FC } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

interface linksProps {
	href: string;
	label: string;
}

const Header: FC = () => {
	const { locales, locale: activeLocale, pathname }: any = useRouter();

	const links: linksProps[] = [
		{
			href: "/",
			label: "Home"
		},
		{
			href: "/about",
			label: "About"
		}
	];

	return (
		<>
			<div className={scss.header}>
				{links.map((link) => (
					<Link
						className={
							pathname === link.href
								? `${scss.link} ${scss.active}`
								: `${scss.link}`
						}
						href={link.href}
					>
						{link.label}
					</Link>
				))}
			</div>
			<div className={scss.switch__langs}>
				{[...locales].map((locale) => (
					<Link
						className={
							locale === activeLocale
								? `${scss.lang} ${scss.active}`
								: `${scss.lang}`
						}
						key={locale}
						href={pathname}
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
