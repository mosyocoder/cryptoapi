import React from "react";

import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

function TrendCoins() {
	const { res, loading, error } = useAxios("search/trending");

	if (loading) {
		return (
			<div className="wrapper-container">
				<Skeleton className="h-8 w-32 mt-5" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full my-2" />
			</div>
		);
	}

	return (
		<div className="wrapper-container mt-8">
			<div className="text-2xl mb-2">Trend Coins</div>
			{res?.coins.map((coin) => (
				<CoinTrending key={coin.item.coin_id} coin={coin.item} />
			))}
		</div>
	);
}

export default TrendCoins;
