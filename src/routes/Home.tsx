import React from "react";
import Hero from "../sections/hero/Hero";
import Services from "../sections/services/Services";
import Layout from "./../layouts/Layout";

function Home() {
	return (
		<Layout>
			<Hero />
			<Services />
		</Layout>
	);
}

export default Home;
