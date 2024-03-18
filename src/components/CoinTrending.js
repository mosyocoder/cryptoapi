import React from "react";

const CoinTrending = ({ coin }) => {
	console.log(coin);
	return (
		<>
			<div className="font-light mb-2 p-2 border-colorfive border-2 rounded hover:bg-colorfive">
				<div className="flex items-center gap-1">
					<span>{coin.score + 1}</span>
					<img src={coin.small} alt={coin.name} />
					<p>{coin.name}</p>
					<small>({coin.symbol})</small>
				</div>
			</div>
		</>
	);
};

export default CoinTrending;
