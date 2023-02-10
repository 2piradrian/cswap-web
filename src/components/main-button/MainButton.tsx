import React from "react";
import style from "./style.module.css";

type Props = {
	text: string;
};

function MainButton({ text }: Props) {
	return <div className={style.box}>{text}</div>;
}

export default MainButton;
