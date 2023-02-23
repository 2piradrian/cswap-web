import ProjectCard from "../../components/project-card/ProjectCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import MainButton from "./../../components/main-button/MainButton";
import { HashLink as Link } from "react-router-hash-link";

import { projectsArray } from "./../../database/projects";

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
				<Link to="/home#contact" aria-label="Contactanos">
					<MainButton text="Contáctanos" styles={style.button} />
				</Link>
			</div>
		</div>
	);
}

export default Portfolio;
