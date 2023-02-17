import FlipCard from "../../components/flip-card/FlipCard";
import style from "./services.module.css";

function Team() {
	return (
		<div className={`bigcontainer ${style.background}`} id="team">
			<div className={style.subcontainer}>
				<FlipCard
					name="Adrían Rodriguez"
					description="Me encanta la tecnología y el valor agregado que encuentro en ella."
					image={require("../../assets/picprofileAdri.jpg")}
					portfolio="https://www.linkedin.com/in/rodriguezcadr/"
					rol="Frontend Developer"
				/>
				<FlipCard
					name="Lucía Diaz"
					description="Me considero una persona observadora y creativa."
					image={require("../../assets/picprofileLu.jpg")}
					portfolio="https://www.linkedin.com/in/diazluciand/"
					rol="Diseñadora UX/UI"
				/>
			</div>
		</div>
	);
}

export default Team;
