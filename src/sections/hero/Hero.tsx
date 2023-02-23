import { Link } from "react-router-dom";
import MainButton from "../../components/main-button/MainButton";
import SecondaryButton from "./../../components/secondary-button/SecondaryButton";

import style from "./hero.module.css";

function Hero() {
	return (
		<div className={`bigcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				{/* Titles */}
				<h1 className={style.title}>Creamos Productos Digitales.</h1>
				<h2 className={style.subtitle}>
					Centrados en el usuario y el negocio.
				</h2>
				<div className={style.buttonContainer}>
					<Link to="#contact" aria-label="contactanos">
						<MainButton text="Contáctanos" styles={style.button} />
					</Link>
					<Link to="/portfolio" aria-label="proyectos">
						<SecondaryButton
							text="Ver Proyectos"
							styles={style.button}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
