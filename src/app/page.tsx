import Header from "@/components/header/Header";
import Explain from "@/sections/explain/Explain";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";
import SomeProjects from "@/sections/some-projects/SomeProjects";
import Why from "@/sections/why/Why";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<Explain />
				<Why />
				<SomeProjects />
				<Footer />
			</main>
		</>
	);
}
