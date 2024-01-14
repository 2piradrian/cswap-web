import GradientTitle from "@/components/gradient-title/GradientTitle";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/icons/arrow.svg";
import heroimage from "../../assets/images/heroimage.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<section className={`${style.container} section`}>
			<div className="delimiter">
				<GradientTitle title="Creamos productos digitales" />
				<h2 className={style.subtitle}>Centrados en el usuario y en el negocio</h2>
				<Image src={heroimage} alt="" className={style.decoration} loading="eager" />
				<Link className={style.arrow} href="/#services">
					<Image src={arrow} alt="arrow" />
				</Link>
			</div>
		</section>
	);
}
