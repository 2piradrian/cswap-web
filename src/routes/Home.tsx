import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Portfolio from "../sections/portfolio/Portfolio";
import Roadmap from "../sections/roadmap/Roadmap";
import Services from "../sections/services/Services";
import Layout from "./../layouts/Layout";
import Team from "./../sections/team/Team";

function Home() {
	return (
		<Layout>
			<Hero />
			<Services />
			<Roadmap />
			<Team />
			<Portfolio />
			<Contact />
		</Layout>
	);
}

export default Home;
