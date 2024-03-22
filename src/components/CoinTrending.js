import React from "react";
import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
	return (
		<Link to={`/coin/${coin.id}`}>
			<div className="font-light mb-2 p-2 border-colorfive border-b rounded hover:bg-colorfive">
				<div className="flex justify-between">
					<div className="flex items-center gap-1">
						<span className="font-semibold">{coin.score + 1}</span>
						<img className="w-6" src={coin.small} alt={coin.name} />
						<p>{coin.name}</p>
						<small className="text-xs">({coin.symbol})</small>
					</div>
					<img className="hidden sm:block" src={coin.data.sparkline} alt="sparkline" />
				</div>
			</div>
		</Link>
	);
};

export default CoinTrending;
