import style from "./style.module.css";

export default function ProjectCard({
	image = "https://via.placeholder.com/300x150",
	title,
	description,
}: {
	image: string;
	title: string;
	description: string;
}) {
	return (
		<div className={style.card}>
			<img src={image} alt={`Image for ${title}`} />
			<div className={style.cardContent}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
