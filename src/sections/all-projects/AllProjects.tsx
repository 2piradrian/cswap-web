import style from "./style.module.css";

export default function AllProjects() {
	return (
		<section className={`${style.container} section`}>
			<div className={`${style.container} delimiter`}>
				<h1>Proyectos</h1>
				<div className={style.projectContainer}></div>
			</div>
		</section>
	);
}
