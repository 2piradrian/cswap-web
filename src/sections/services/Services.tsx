import ServiceCard from "@/components/service-card/ServiceCard";
import Title from "@/components/title/Title";
import style from "./style.module.css";
import React from "react";

import design from "@/assets/icons/design-service.svg";
import develop from "@/assets/icons/develop-service.svg";
import uxui from "@/assets/icons/uxui-service.svg";

import deco1 from "@/assets/decoration/service-card-deco1.svg";
import deco2 from "@/assets/decoration/service-card-deco2.svg";
import deco3 from "@/assets/decoration/service-card-deco3.svg";

function Services() {
	return (
		<section className="section" id="services">
			<div className={style.container + " delimiter"}>
				<Title title="Mira todo lo que tenemos para ofrecerte" />
				<div className={style.serviceContainer}>
					<ServiceCard service="Diseño de identidad" icon={design} deco={deco1} />
					<ServiceCard service="Programación web" icon={develop} deco={deco2} />
					<ServiceCard service="Diseño UX/UI" icon={uxui} deco={deco3} />
				</div>
				<div className={style.contactButton}>Contrátanos</div>
			</div>
		</section>
	);
}

export default Services;
