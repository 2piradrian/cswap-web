import React from "react";
import style from "./style.module.css";

type Props = {
	children: React.ReactNode;
	styles?: string;
	url?: string;
	target?: string;
	label: string;
};

function InvisibleAnchor({ children, styles, url, target, label }: Props) {
	return (
		<a
			href={url}
			target={target}
			className={`${style.anchor} ${styles}`}
			aria-label={label}>
			{children}
		</a>
	);
}

export default InvisibleAnchor;
