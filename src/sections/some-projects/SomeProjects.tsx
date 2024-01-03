import Title from "@/components/title/Title";
import style from "./style.module.css";
import ProjectCard from "@/components/project-card/ProjectCard";
import MainButton from "@/components/main-button/MainButton";

export default function SomeProjects() {
	return (
		<div className={`${style.section} section`}>
			<div className={`${style.section} delimiter`}>
				<Title title="Algunos de nuestros proyectos" />
				<div className={style.projectContainer}>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
				<MainButton content="Ver más" url="" />
			</div>
		</div>
	);
}
