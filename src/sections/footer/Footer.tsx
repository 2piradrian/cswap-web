import Image from "next/image";
import isologotype from "../../assets/images/isologotype.svg";
import style from "./style.module.css";

export default function Footer() {
	return (
		<footer className={`${style.container} section`} id="contact">
			<div className="delimiter">
				<div className={style.contentContainer}>
					<Image src={isologotype} alt="isologotipo" />
					<div className={style.information}>
						<div className={style.contact}>
							<p className={style.footerTitle}>Contáctanos</p>
							<p>cswap.dev@gmail.com</p>
							<p>+54 351 6135462</p>
							<p>coo.swap</p>
						</div>
						<div>
							<p className={style.footerTitle}>C-Swap</p>
							<p>Términos y condiciones</p>
							<p>Córdoba, Argentina</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
