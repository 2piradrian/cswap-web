import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

import style from "./style.module.css";

type Props = {
	setClosed: Function;
};

function Navbar({ setClosed }: Props) {
	return (
		<div
			className={style.navBox}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<AiOutlineClose className={style.close} />
			<ul className={style.navList}>
				<li className={style.navRoutes}>
					<Link to="/home#services" aria-label="Servicios">
						Servicios
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/portfolio" aria-label="Proyectos">
						Proyectos
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/home#team" aria-label="Equipo">
						Equipo
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/home#contact" aria-label="Contacto">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
