import React from "react";
import HistoryChart from "../components/HistoryChart";
import CryptoDetail from "../components/CryptoDetail";

function CoinDetail() {
	return (
		<div className="wrapper-container mt-10">
			<CryptoDetail />
			<HistoryChart />
		</div>
	);
}

export default CoinDetail;
