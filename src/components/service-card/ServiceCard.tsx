import InvisibleAnchor from "../invisible-anchor/InvisibleAnchor";
import style from "./style.module.css";

type Props = {
	title: string;
	description: string;
	url: string;
};

function ServiceCard({ title, description, url }: Props) {
	return (
		<div className={style.box}>
			<h3 className={style.title}>{title}</h3>

			<p className={style.description}>{description}</p>

			<InvisibleAnchor styles={style.hire}>
				<p>Contratar</p>
			</InvisibleAnchor>
		</div>
	);
}

export default ServiceCard;
