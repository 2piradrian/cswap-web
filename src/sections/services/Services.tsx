import ServiceCard from "@/components/service-card/ServiceCard";
import Title from "@/components/title/Title";
import style from "./style.module.css";
import React from "react";

import design from "@/assets/icons/design-service.svg";
import app from "@/assets/icons/app-service.svg";
import develop from "@/assets/icons/develop-service.svg";
import uxui from "@/assets/icons/uxui-service.svg";

import deco1 from "@/assets/decoration/service-card-deco1.svg";
import deco2 from "@/assets/decoration/service-card-deco2.svg";
import deco3 from "@/assets/decoration/service-card-deco3.svg";
import MainButton from "@/components/main-button/MainButton";

function Services() {
	return (
		<section className="section" id="services">
			<div className={`${style.container} delimiter`}>
				<Title title="Mira todo lo que tenemos para ofrecerte" />
				<div className={style.serviceContainer}>
					<div>
						<ServiceCard service="Diseño gráfico" icon={design} deco={deco1} />
						<ServiceCard service="Programación web" icon={develop} deco={deco2} />
					</div>
					<div>
						<ServiceCard service="Programación mobile" icon={app} deco={deco1} />
						<ServiceCard service="Diseño UX/UI" icon={uxui} deco={deco3} />
					</div>
				</div>
				<MainButton content="Contáctanos" url="" />
			</div>
		</section>
	);
}

export default Services;
