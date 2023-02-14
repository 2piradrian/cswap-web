import React from "react";
import style from "./style.module.css";

type Props = {
	text: string;
	styles?: string;
};

function SecondaryButton({ text, styles }: Props) {
	return <div className={`${style.box} ${styles}`}>{text}</div>;
}

export default SecondaryButton;
