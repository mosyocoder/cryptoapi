import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	axios.defaults.baseURL = "https://api.coingecko.com/api/v3";
	
	axios.defaults.headers = {
		"Access-Control-Allow-Origin": "*",
	};

	const fetchData = async (param) => {
		try {
			setLoading(true);
			const result = await axios(param);
			setRes(result.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(param);
	}, []);

	return {
		res,
		loading,
		error,
	};
};

export default useAxios;
