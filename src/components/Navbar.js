import React from "react";
import { LogoIcon } from "../icons/icons";

function Navbar() {
	return (
		<div className="bg-custom-colorone text-white h-14 flex items-center">
			<div className="wrapper-container w-full">
				<div className="text-2xl font-pop flex items-center gap-1">
					<LogoIcon />
					<p className="font-semibold tracking-widest cursor-pointer">
						<span className="text-custom-colorthree">K</span>
						ripto
						<span className="text-custom-colorthree">P</span>
						ara
					</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
