import MainButton from "@/components/main-button/MainButton";
import ProjectCard from "@/components/project-card/ProjectCard";
import Title from "@/components/title/Title";
import project1 from "@/assets/projects/1.jpg";
import project2 from "@/assets/projects/2.jpg";
import project3 from "@/assets/projects/3.jpg";
import style from "./style.module.css";

export default function SomeProjects() {
	return (
		<section className={`${style.section} section`}>
			<div className={`${style.section} delimiter`}>
				<Title title="Algunos de nuestros proyectos" />
				<div className={style.projectContainer}>
					<div>
						<ProjectCard title="Ayudante de Santa" description="Desarrollo web" image={project3.src} />
						<ProjectCard
							title="La Cocina de Gerard"
							description="Re-diseño de marca"
							image={project2.src}
						/>
					</div>
					<div>
						<ProjectCard title="Coty Diaz" description="Diseño de marca" image={project1.src} />
						<ProjectCard title="Placeholder" description="Placeholder" image={project3.src} />
					</div>
				</div>
				<MainButton content="Ver más" url="/projects" />
			</div>
		</section>
	);
}
