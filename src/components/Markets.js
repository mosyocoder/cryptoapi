import React from "react";

import Coin from "./Coin";
import useAxios from "../hooks/useAxios";

import data from "../data.json";

function Markets() {
	//const { res } = useAxios("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=true&locale=tr");

	return (
		<div className="wrapper-container mt-8">
			<div className="text-2xl mb-2">Markets</div>
			{data.map((coin) => (
				<Coin coin={coin} key={coin.id} />
			))}
		</div>
	);
}

export default Markets;
