import ProjectCard from "../../components/project-card/ProjectCard";
import SectionTitle from "../../components/section-title/SectionTitle";
import { projectsArray } from "./../../database/projects";
import Container from "./../../layouts/Container";
import style from "./services.module.css";

function Portfolio() {
	return (
		<Container height id="projects">
			<SectionTitle text="Nuestro trabajo" />

			<div className={style.subcontainer}>
				{projectsArray.map((item) => (
					<ProjectCard {...item} key={item.id} />
				))}
			</div>
		</Container>
	);
}

export default Portfolio;
