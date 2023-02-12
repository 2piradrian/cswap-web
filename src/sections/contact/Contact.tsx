import MainButton from "../../components/main-button/MainButton";
import SectionTitle from "../../components/section-title/SectionTitle";
import Container from "../../layouts/Container";
import style from "./contact.module.css";

function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(1);
		const contactData = Object.fromEntries(new FormData(e.currentTarget));
		if (!contactData.subject || !contactData.name || !contactData.text) {
			return alert("Debes llenar todos los campos");
		}
		window.location.href = `mailto:dev.cswap@gmail.com?subject=${contactData.subject}&body=${contactData.text}`;
	};

	return (
		<Container height>
			<SectionTitle text="Contacto" />
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<input type="text" placeholder="Nombre" name="name" />
				<input type="text" placeholder="Asunto" name="subject" />
				<textarea placeholder="Su mensaje aquí..." name="text" />
				<button>
					<MainButton text="Contactar" />
				</button>
			</form>
		</Container>
	);
}

export default Contact;
