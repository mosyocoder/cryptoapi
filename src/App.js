import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoinDetail from "./pages/CoinDetail";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/coin/:id" element={<CoinDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
