import Image from "next/image";
import NavItem from "./NavItem";
import cross from "@/assets/icons/bxs-cross.svg";
import style from "./style.module.css";

type Props = {
	setClosed: Function;
	closed: boolean | undefined;
};

export default function Navbar({ setClosed, closed }: Props) {
	return (
		<div
			className={` ${style.navBox} ${!closed ? style.navBoxActive : style.navBoxInactive}`}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<Image src={cross} alt="burger icon" className={style.close} />
			<ul className={style.navList}>
				<NavItem href="/#services" arialabel="Servicios" title="Servicios" />
				<NavItem href="/projects" arialabel="Proyectos" title="Proyectos" />
				<NavItem href="/#contact" arialabel="Contacto" title="Contacto" />
			</ul>
		</div>
	);
}
