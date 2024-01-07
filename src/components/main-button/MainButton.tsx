import Link from "next/link";
import style from "./style.module.css";

export default function MainButton({ content, url }: { content: string; url: string }) {
	return (
		<Link className={style.button} href={url}>
			{content}
		</Link>
	);
}
