import style from "./style.module.css";
import isologotype from "../../assets/images/isologotype.svg"
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={`${style.container} section`}>
			<div className="delimiter">
				<div className={style.contentContainer}>
					<Image src={isologotype} alt="isologotipo" />
					<div className={style.information}>
						<div className={style.contact}>
							<h5 className={style.footerTitle}>Contáctanos</h5>
							<p>cswap.dev@gmail.com</p>
							<p>coo.swap</p>
						</div>
						<div>
							<h5 className={style.footerTitle}>CSwap</h5>
							<p>Términos y condiciones</p>
							<p>Córdoba, Argentina</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
