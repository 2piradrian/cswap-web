import ProjectCard from "@/components/project-card/ProjectCard";
import Title from "@/components/title/Title";
import { projects } from "@/data/projects";
import style from "./style.module.css";

export default function AllProjects() {
	return (
		<section className={`${style.container} section`}>
			<div className={`${style.container} delimiter`}>
				<Title title="Proyectos" />
				<div className={style.projectContainer}>
					{projects.map((project: any) => {
						return (
							<ProjectCard
								key={project.id}
								description={project.description}
								image={project.image}
								title={project.name}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
