import ProjectCard from "../../components/project-card/ProjectCard";
import { projectsArray } from "./../../database/projects";
import Container from "./../../layouts/Container";
import style from "./services.module.css";

function Portfolio() {
	return (
		<Container height="100vh">
			<div className={style.subcontainer}>
				{projectsArray.map((item) => (
					<ProjectCard {...item} key={item.id} />
				))}
			</div>
		</Container>
	);
}

export default Portfolio;
