import React from "react";
import style from "./style.module.css";

type Props = {
	icon: string;
	text: string;
};

function RoadmapCard({ icon, text }: Props) {
	return (
		<div className={style.card}>
			<img src={icon} className={style.icon} />
			<p className={style.description}>{text}</p>
		</div>
	);
}

export default RoadmapCard;
