import React, { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Search() {
	const [coin, setCoin] = useState("");
	const [options, setOptions] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		if (coin) {
			async function getCoins() {
				const response = await axios(`https://api.coingecko.com/api/v3/search?query=${coin}`);

				console.log(response.data.coins);

				const opt = [];

				response.data.coins.map((coin) => {
					console.log();

					opt.push({
						value: coin.id,
						label: coin.name + "(" + coin.symbol + ")",
					});

					setOptions(opt);
				});
			}

			getCoins();
		}
	}, [coin]);

	const handleChange = (value) => {
		navigate(`/coin/${value.value}`);
	};

	return (
		<div className="wrapper-container">
			<Select isSearchable options={options} onChange={handleChange} onSearchInputChange={(value) => setCoin(value.target.value)} />
		</div>
	);
}

export default Search;
