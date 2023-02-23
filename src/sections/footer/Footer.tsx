import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

import style from "./footer.module.css";

function Footer() {
	return (
		<footer className={`smallcontainer ${style.background}`}>
			<div className={style.separator} />
			<div className={style.subcontainer}>
				<a
					href="https://api.whatsapp.com/send?phone=543516135462"
					target="_blank"
					aria-label="Whatsapp">
					<BsWhatsapp />
				</a>

				<a
					href="mailto:dev.cswap@gmail.com"
					target="_blank"
					aria-label="Mail">
					<TbMail />
				</a>

				<a
					href="https://www.instagram.com/coo.swap/"
					target="_blank"
					aria-label="Instagram">
					<BsInstagram />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
