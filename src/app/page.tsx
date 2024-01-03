import Header from "@/components/header/Header";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
			</main>
		</>
	);
}
