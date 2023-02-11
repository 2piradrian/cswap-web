import style from "./style.module.css";

type Props = {
	id: number;
	image: string;
	title: string;
	text: string;
};

function ProjectCard({ image, title, text }: Props) {
	return (
		<div className={style.box}>
			<img src={image} className={style.image} />
			<div className={style.boxContent}>
				<p className={style.title}>{title}</p>
				<p className={style.description}>{text}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
