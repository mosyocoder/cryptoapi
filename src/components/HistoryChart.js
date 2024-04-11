import React from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

import useAxios from "../hooks/useAxios";
import Skeleton from "./Skeleton";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function HistoryChart() {
	const { id } = useParams();
	const { res, loading, error } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

	if (loading)
		return (
			<div className="wrapper-container">
				<Skeleton className="h-8 w-32 mt-5" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full mt-2" />
				<Skeleton className="h-8 w-full my-2" />
			</div>
		);

	if (error) {
		return (
			<div className="wrapper-container text-center my-10">
				<h2 className="bg-red-500 inline-block p-4 font-bold text-white">Error : {error.message}</h2>
			</div>
		);
	}

	const coinCharData = res?.prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

	const options = {
		responsive: true,
	};

	const data = {
		labels: coinCharData?.map((value) => moment(value.x).format("MMM DD")),
		datasets: [
			{
				fill: true,
				label: id.toUpperCase(),
				data: coinCharData?.map((value) => value.y),
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
