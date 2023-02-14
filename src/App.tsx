import React from "react";
import "./global/global.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Terms from "./routes/Terms";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/tyc" element={<Terms />} />
				<Route path="/portfolio" element={<Projects />} />
				<Route path="/" element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
