import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import isoDesk from "../../assets/isoDesk.svg";
import Navbar from "./../../components/nav-bar/Navbar";
import style from "./header.module.css";

function Header() {
	const [closed, setClosed] = useState<boolean>(window.innerWidth < 900);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => setClosed(window.innerWidth < 900),
			false
		);
	}, [window]);

	return (
		<header className="container" style={{ position: "absolute" }}>
			<div className={style.subcontainer}>
				<img src={isoDesk} className={style.iso} />

				<RxHamburgerMenu
					className={style.burger}
					onClick={() => setClosed(false)}
				/>
				{!closed && <Navbar setClosed={setClosed} />}
			</div>
		</header>
	);
}

export default Header;
