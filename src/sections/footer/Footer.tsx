import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

import InvisibleAnchor from "../../components/invisible-anchor/InvisibleAnchor";

import style from "./footer.module.css";

function Footer() {
	return (
		<footer className={`smallcontainer ${style.background}`}>
			<div className={style.separator} />
			<div className={style.subcontainer}>
				<InvisibleAnchor
					url="https://api.whatsapp.com/send?phone=543516135462"
					target="_blank"
					label="Whatsapp">
					<BsWhatsapp />
				</InvisibleAnchor>

				<InvisibleAnchor
					url="mailto:dev.cswap@gmail.com"
					target="_blank"
					label="Mail">
					<TbMail />
				</InvisibleAnchor>

				<InvisibleAnchor
					url="https://www.instagram.com/coo.swap/"
					target="_blank"
					label="Instagram">
					<BsInstagram />
				</InvisibleAnchor>
			</div>
		</footer>
	);
}

export default Footer;
