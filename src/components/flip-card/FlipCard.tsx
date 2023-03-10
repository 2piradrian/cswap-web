import { AiOutlineArrowRight } from "react-icons/ai";
import MainButton from "./../main-button/MainButton";
import style from "./style.module.css";

type Props = {
	image: string;
	name: string;
	rol: string;
	description: string;
	portfolio: string;
};

function FlipCard({ image, name, rol, description, portfolio }: Props) {
	return (
		<div className={style.card}>
			<div className={style.front}>
				<img src={image} alt="Integrante" className={style.photo} />
				<div>
					<p className={style.name}>{name}</p>
					<p className={style.rol}>{rol}</p>
				</div>
				<AiOutlineArrowRight className={style.arrow} />
			</div>
			<div className={style.back}>
				<p className={style.description}>{description}</p>
				<a
					href={portfolio}
					aria-label={`${name} linkedin`}
					target="_blank">
					<MainButton text="💼 LinkedIn" />
				</a>
			</div>
		</div>
	);
}

export default FlipCard;
