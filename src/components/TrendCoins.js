import React from "react";

import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

function TrendCoins() {
	const { res } = useAxios("search/trending");

	return (
		<div className="wrapper-container mt-8">
			<div className="text-2xl mb-2">Trend Coins</div>
			{res && res.coins.map((coin) => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
		</div>
	);
}

export default TrendCoins;
