import ProjectCard from "../../components/project-card/ProjectCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import InvisibleAnchor from "./../../components/invisible-anchor/InvisibleAnchor";
import MainButton from "./../../components/main-button/MainButton";
import { projectsArray } from "./../../database/projects";
import Container from "./../../layouts/Container";
import style from "./portfolio.module.css";

function Portfolio() {
	return (
		<div className={`bigcontainer ${style.background}`} id="projects">
			<div className={style.subcontainer}>
				<SectionTitle text="Nuestro trabajo" />
				<div className={style.projectContainer}>
					{projectsArray.map((item) => (
						<ProjectCard {...item} key={item.id} />
					))}
				</div>
				<InvisibleAnchor url="/home#contact" label="Contactanos">
					<MainButton text="Contáctanos" styles={style.button} />
				</InvisibleAnchor>
			</div>
		</div>
	);
}

export default Portfolio;
