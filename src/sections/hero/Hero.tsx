import InvisibleAnchor from "../../components/invisible-anchor/InvisibleAnchor";
import MainButton from "../../components/main-button/MainButton";
import Container from "../../layouts/Container";
import style from "./hero.module.css";

function Hero() {
	return (
		<Container height="100vh">
			<div className={style.subcontainer}>
				{/* Titles */}
				<h1 className={style.title}>Creamos Productos Digitales.</h1>
				<h2 className={style.subtitle}>Centrados en el usuario y el negocio.</h2>
				{/* Contact button */}
				<InvisibleAnchor>
					<MainButton text="Contáctanos" styles={style.button} />
				</InvisibleAnchor>
			</div>
		</Container>
	);
}

export default Hero;
