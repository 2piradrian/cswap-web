import { Link } from "react-router-dom";
import ServiceCard from "../../components/service-card/ServiceCard";
import SecondaryButton from "./../../components/secondary-button/SecondaryButton";
import style from "./services.module.css";

function Services() {
	return (
		<div className={`bigcontainer ${style.background}`} id="services">
			<div className={style.subcontainer}>
				<ServiceCard
					title="Diseño de marca"
					description="Definí la identidad de tu marca"
					target="_blank"
					url="https://api.whatsapp.com/send?phone=543516135462&text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20de%20c-swap.%20Me%20gustar%C3%ADa%20contratar%20el%20siguiente%20servicio%3A%20(Dise%C3%B1o%20de%20marca)."
				/>
				<ServiceCard
					title="Diseño UX/UX"
					description="Diseño de experiencia de usuario e interfaces"
					target="_blank"
					url="https://api.whatsapp.com/send?phone=543516135462&text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20de%20c-swap.%20Me%20gustar%C3%ADa%20contratar%20el%20siguiente%20servicio%3A%20(Dise%C3%B1o%20UX%2FUI)."
				/>
				<ServiceCard
					title="Desarrollo"
					description="Llevá a la práctica tu idea, nosotros la programamos"
					target="_blank"
					url="https://api.whatsapp.com/send?phone=543516135462&text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20de%20c-swap.%20Me%20gustar%C3%ADa%20contratar%20el%20siguiente%20servicio%3A%20(Dise%C3%B1o%20y%20desarrollo)."
				/>
			</div>
			<Link to="/tyc" aria-label="terminos y condiciones">
				<SecondaryButton
					text="Ver términos y condiciones"
					styles={style.button}
				/>
			</Link>
		</div>
	);
}

export default Services;
