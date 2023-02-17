import SectionTitle from "../../components/section-title/SectionTitle";
import Container from "./../../layouts/Container";
import style from "./tyc.module.css";

function TyC() {
	return (
		<Container height>
			<div className={style.subcontainer}>
				<SectionTitle text="Términos y condiciones." />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Error voluptate tenetur voluptatibus, amet, odio harum
					delectus vero maxime perferendis aliquid dolores, laboriosam
					voluptatum quisquam nam nisi? Minus provident ipsum dolorum?
				</p>
			</div>
		</Container>
	);
}

export default TyC;
