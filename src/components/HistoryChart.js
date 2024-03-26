import React from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

import useAxios from "../hooks/useAxios";
import moment from "moment";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function HistoryChart() {
	const { id } = useParams();
	const { res } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

	if (!res) return <div>Loading...</div>;

	const coinCharData = res.prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

	const options = {
		responsive: true,
	};

	const data = {
		labels: coinCharData.map((value) => moment(value.x).format("MMM DD")),
		datasets: [
			{
				fill: true,
				label: id.toUpperCase(),
				data: coinCharData.map((value) => value.y),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return (
		<div className="mb-20">
			<Line data={data} options={options} />
		</div>
	);
}

export default HistoryChart;
