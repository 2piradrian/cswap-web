import style from "./style.module.css";

type Props = {
	icon: string;
	text: string;
	alt: string;
};

function RoadmapCard({ icon, text, alt }: Props) {
	return (
		<div className={style.card}>
			<img src={icon} className={style.icon} alt={alt} />
			<p className={style.description}>{text}</p>
		</div>
	);
}

export default RoadmapCard;
