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
							<h5 className={style.footerTitle}>Contáctanos</h5>
							<p>cswap.dev@gmail.com</p>
							<p>+54 351 6135462</p>
							<p>coo.swap</p>
						</div>
						<div>
							<h5 className={style.footerTitle}>C-Swap</h5>
							<p>Términos y condiciones</p>
							<p>Córdoba, Argentina</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
