import InvisibleAnchor from "../invisible-anchor/InvisibleAnchor";
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

			<InvisibleAnchor
				styles={style.hire}
				label="contratar"
				url={url}
				target={target}>
				<p>Contratar</p>
			</InvisibleAnchor>
		</div>
	);
}

export default ServiceCard;
