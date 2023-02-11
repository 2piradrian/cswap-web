import img0 from "../assets/projects/0.png";
import img1 from "../assets/projects/1.png";

type item = {
	id: number;
	image: string;
	title: string;
	text: string;
};

export const projectsArray: item[] = [
	{
		id: 0,
		image: img0,
		title: "Siete Colores (M.)",
		text: "Diseño y desarrollo de e-commerce simple",
	},
	{
		id: 1,
		image: img1,
		title: "Siete Colores (D.)",
		text: "Diseño y desarrollo de e-commerce simple",
	},
];
