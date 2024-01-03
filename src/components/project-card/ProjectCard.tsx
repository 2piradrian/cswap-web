import style from "./style.module.css";

export default function ProjectCard() {
	return (
		<div className={style.card}>
			<img src="https://via.placeholder.com/300x150" alt="Project Image" />
			<div className={style.cardContent}>
				<h3>Project Title</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
				</p>
			</div>
		</div>
	);
}
