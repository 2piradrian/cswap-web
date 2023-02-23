import style from "./style.module.css";

type Props = {
	title: string;
	description: string;
	target: string;
	url: string;
};

function ServiceCard({ title, description, url, target }: Props) {
	return (
		<div className={style.box}>
			<h3 className={style.title}>{title}</h3>

			<p className={style.description}>{description}</p>

			<a
				className={style.hire}
				aria-label="contratar"
				href={url}
				target={target}>
				<p>Contratar</p>
			</a>
		</div>
	);
}

export default ServiceCard;
