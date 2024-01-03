import style from "./style.module.css";

export default function MainButton({ content, url }: { content: string; url: string }) {
	return <div className={style.button}>{content}</div>;
}
