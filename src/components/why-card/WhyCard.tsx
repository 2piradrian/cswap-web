import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
	icon: string;
	title: string;
	deco: string;
};

function WhyCard({ icon, title, deco }: Props) {
	return (
		<div className={style.container}>
			<h3 className={style.name}>{title}</h3>
		</div>
	);
}

export default WhyCard;
