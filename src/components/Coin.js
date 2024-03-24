import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { TrendingDownIcon, TrendingUpIcon } from "../icons/icons";
import { currencyFormat } from "../utils";
import { Link } from "react-router-dom";

function Coin({ coin }) {
	return (
		<Link to={`/coin/${coin.id}`}>
			<div className="grid grid-cols-3 md:grid-cols-5 font-light p-2 rounded border-colorfive border-b hover:bg-colorfive">
				<div className="flex items-center gap-1 w-full">
					<img className="w-6" src={coin.image} alt={coin.name} />
					<p>{coin.name}</p>
				</div>
				<span className="w-full text-center">{currencyFormat(coin.current_price)}</span>
				<span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? "text-red" : "text-green"}`}>
					{coin.price_change_percentage_24h < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
					{coin.price_change_percentage_24h}
				</span>
				<div className="hidden sm:block">
					<p className="font-semibold">Market Cap</p>
					<span>{currencyFormat(coin.market_cap)}</span>
				</div>
				<div className="hidden sm:block">
					<Sparklines data={coin.sparkline_in_7d.price}>
						<SparklinesLine color="#56b45d" />
						<SparklinesSpots style={{ fill: "#56b45d" }} />
					</Sparklines>
				</div>
			</div>
		</Link>
	);
}

export default Coin;
