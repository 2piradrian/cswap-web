import RoadmapCard from "../../components/roadmap-card/RoadmapCard";
import Container from "./../../layouts/Container";
import style from "./roadmap.module.css";

import code from "../../assets/bx-code.svg";
import conversation from "../../assets/bx-conversation.svg";
import vector from "../../assets/bx-vector.svg";
import SectionTitle from "../../components/section-title/SectionTitle";

function Roadmap() {
	return (
		<div className={`bigcontainer ${style.background}`}>
			<SectionTitle text="Roadmap" />
			<div className={style.subcontainer}>
				<RoadmapCard
					icon={conversation}
					alt=""
					text="Investigación y análisis, nos contactamos con el cliente."
				/>
				<RoadmapCard
					icon={vector}
					alt=""
					text="Comenzamos a generar una identidad de diseño."
				/>
				<RoadmapCard
					icon={code}
					alt=""
					text="Etapa final, se desarrolla la web/app diseñada."
				/>
			</div>
		</div>
	);
}

export default Roadmap;
