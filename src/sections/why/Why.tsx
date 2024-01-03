import Title from "@/components/title/Title";
import WhyCard from "@/components/why-card/WhyCard";
import style from "./style.module.css";

export default function Why() {
	return (
		<section className="section">
			<div className="delimiter">
				<Title title="¿Por qué nosotros?" />
				<div className={style.cardContainer}>
					<WhyCard
						icon="design-service"
						title="Adaptativo y accesible."
						deco="service-card-deco1"
					/>
					<WhyCard
						icon="design-service"
						title="Diferenciate del resto."
						deco="service-card-deco2"
					/>
					<WhyCard
						icon="design-service"
						title="Hacé que tu marca crezca."
						deco="service-card-deco3"
					/>
					<WhyCard
						icon="design-service"
						title="Diseño centrado en el usuario."
						deco="service-card-deco1"
					/>
					<WhyCard
						icon="customization"
						title="Personalización a medida."
						deco="service-card-deco5"
					/>
					<WhyCard
						icon="support"
						title="Soporte excepcional."
						deco="service-card-deco2"
					/>
					<WhyCard
						icon="strategy"
						title="Estrategias efectivas."
						deco="service-card-deco3"
					/>
					<WhyCard
						icon="differentiation"
						title="Diferenciación única."
						deco="service-card-deco6"
					/>
					<WhyCard
						icon="growth"
						title="Fomenta el crecimiento."
						deco="service-card-deco7"
					/>
					<WhyCard
						icon="user-experience"
						title="Experiencia del usuario."
						deco="service-card-deco8"
					/>
					<WhyCard
						icon="efficiency"
						title="Eficiencia en cada detalle."
						deco="service-card-deco9"
					/>
				</div>
			</div>
		</section>
	);
}
