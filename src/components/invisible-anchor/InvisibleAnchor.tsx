import React from "react";
import style from "./style.module.css";

type Props = {
	children: React.ReactNode;
	styles?: string;
};

function InvisibleAnchor({ children, styles }: Props) {
	return <a className={`${style.anchor} ${styles}`}>{children}</a>;
}

export default InvisibleAnchor;
