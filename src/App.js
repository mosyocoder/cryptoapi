import axios from "axios";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

import data from "../src/data.json";

function App() {
	const [coin, setCoin] = useState("");
	// const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true&locale=tr";

	// useEffect(() => {
	// 	axios.get(url)
	// 		.then((res) => res.data)
	// 		.then((r) => setCoin(r));
	// }, []);

	console.log(data[0]);

	return (
		<div>
			<h1 className="text-3xl font-bold ">Hello world!</h1>
			{/* {data.map((coin) => (
				<Sparklines data={coin.sparkline_in_7d.price}>
					<SparklinesLine color="#3B82F5" />
				</Sparklines>
			))} */}
		</div>
	);
}

export default App;
