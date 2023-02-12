import ServiceCard from "../../components/service-card/ServiceCard";
import Container from "./../../layouts/Container";
import style from "./services.module.css";

function Services() {
	return (
		<Container height>
			<div className={style.subcontainer} id="services">
				<ServiceCard
					title="Diseño de marca"
					description="Definí la identidad de tu marca"
					url=""
				/>
				<ServiceCard
					title="Diseño UX/UX"
					description="Diseño de experiencia de usuario e interfaces"
					url=""
				/>
				<ServiceCard
					title="Desarrollo"
					description="Llevá a la práctica tu idea, nosotros la programamos"
					url=""
				/>
			</div>
		</Container>
	);
}

export default Services;
