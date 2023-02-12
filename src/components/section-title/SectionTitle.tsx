import style from "./style.module.css";

type Props = {
	text: string;
};

function SectionTitle({ text }: Props) {
	return <h2 className={style.text}>{text}</h2>;
}

export default SectionTitle;
