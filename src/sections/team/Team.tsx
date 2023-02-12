import FlipCard from "../../components/flip-card/FlipCard";
import Container from "../../layouts/Container";
import style from "./services.module.css";

function Team() {
	return (
		<Container height id="team">
			<div className={style.subcontainer}>
				<FlipCard
					name="Lucía Diaz"
					description="Me considero una persona observadora y creativa."
					image=""
					portfolio=""
					rol="Diseñadora UX/UI"
				/>
				<FlipCard
					name="Adrían Rodriguez"
					description="Me encanta la tecnología y el valor agregado que encuentro en ella."
					image=""
					portfolio=""
					rol="Frontend Developer"
				/>
			</div>
		</Container>
	);
}

export default Team;
