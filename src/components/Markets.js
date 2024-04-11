import React from "react";

import Coin from "./Coin";
import useAxios from "../hooks/useAxios";
import Skeleton from "./Skeleton";

function Markets() {
	const { res, loading, error } = useAxios("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=true&locale=tr");

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

	if (error) {
		return (
			<div className="wrapper-container text-center my-10">
				<h2 className="bg-red-500 inline-block p-4 font-bold text-white">Error : {error.message}</h2>
			</div>
		);
	}

	return (
		<div className="wrapper-container mt-8">
			<div className="text-2xl mb-2">Markets</div>
			{res?.map((coin) => (
				<Coin coin={coin} key={coin.id} />
			))}
		</div>
	);
}

export default Markets;
