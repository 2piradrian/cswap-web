import React from "react";
import style from "./style.module.css";

type Props = {
	children: React.ReactNode;
	styles?: string;
	url?: string;
};

function InvisibleAnchor({ children, styles, url }: Props) {
	return (
		<a href={url} className={`${style.anchor} ${styles}`}>
			{children}
		</a>
	);
}

export default InvisibleAnchor;
