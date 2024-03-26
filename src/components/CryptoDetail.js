import React from "react";
import { useParams } from "react-router-dom";

import useAxios from "../hooks/useAxios";

function CryptoDetail() {
	const { id } = useParams();

	const { res } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);

	console.log(res);

	if (!res) {
		return <div>Loading...</div>;
	}

	return (
		<div className="my-6">
			<div className="flex gap-2 items-center">
				<img src={res.image.small} alt={res.name} />
				<h1 className="text-2xl capitalize font-bold mb-2">{res.name}</h1>
			</div>
			<p className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline" dangerouslySetInnerHTML={{ __html: res.description.en }}></p>
		</div>
	);
}

export default CryptoDetail;
