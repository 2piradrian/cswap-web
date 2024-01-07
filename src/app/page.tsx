import Explain from "@/sections/explain/Explain";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";
import SomeProjects from "@/sections/some-projects/SomeProjects";
import Why from "@/sections/why/Why";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Explain />
			<Why />
			<SomeProjects />
		</main>
	);
}
