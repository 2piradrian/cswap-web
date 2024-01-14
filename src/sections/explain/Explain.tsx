import style from "./style.module.css";

export default function Explain() {
	return (
		<section className={`section ${style.background}`}>
			<div className={style.separator} />
			<div className={`${style.container} delimiter`}>
				<div className={style.textContainer}>
					<h2 className={style.title}>Diseño web</h2>
					<p className={style.subtitle}>
						Te ayudamos a construir la presencia digital perfecta con nuestro servicio de diseño web. Desde
						la creación de sitios y aplicaciones personalizadas hasta su implementación.
					</p>
				</div>
				<div className={style.textContainer}>
					<h2 className={style.title}>Diseño gráfico</h2>
					<p className={style.subtitle}>
						Transforma la imagen de tu marca con nuestro servicio de diseño gráfico. Desde logotipos únicos
						hasta una identidad corporativa completa y papelería a juego, nuestro equipo de diseñadores está
						listo para darle a tu marca una apariencia impresionante.
					</p>
				</div>
				<div className={style.textContainer}>
					<h2 className={style.title}>Diseño UX / UI</h2>
					<p className={style.subtitle}>
						Creamos interfaces de usuario que son intuitivas y experiencias de usuario que cautivan. Nos
						enfocamos en la facilidad de uso y en hacer que cada detalle cuente, convirtiendo a tus
						visitantes en clientes leales.
					</p>
				</div>
			</div>
		</section>
	);
}
