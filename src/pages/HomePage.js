import React from "react";
import TrendCoins from "../components/TrendCoins";
import Markets from "../components/Markets";
import Search from "../components/Search";

function HomePage() {
	return (
		<div className="font-pop">
			<TrendCoins />
			<Search />
			<Markets />
		</div>
	);
}

export default HomePage;
