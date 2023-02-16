import InvisibleAnchor from "../../components/invisible-anchor/InvisibleAnchor";
import MainButton from "../../components/main-button/MainButton";
import Container from "../../layouts/Container";
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
					<InvisibleAnchor url="#contact" label="contactanos">
						<MainButton text="Contáctanos" styles={style.button} />
					</InvisibleAnchor>
					<InvisibleAnchor url="/portfolio" label="proyectos">
						<SecondaryButton
							text="Ver Proyectos"
							styles={style.button}
						/>
					</InvisibleAnchor>
				</div>
			</div>
		</div>
	);
}

export default Hero;
