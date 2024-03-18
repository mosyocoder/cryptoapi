import React from "react";
import { LogoIcon } from "../icons/icons";

function Navbar() {
	return (
		<div className="bg-colorone text-white h-14 flex items-center">
			<div className="wrapper-container w-full">
				<div className="flex items-center gap-1 cursor-pointer text-2xl font-pop">
					<LogoIcon />
					<p className="font-semibold tracking-widest">
						<span className="text-colorthree">K</span>
						ripto
						<span className="text-colorthree">P</span>
						ara
					</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
