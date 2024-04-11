import React from "react";

import { GithubIcon, InstaIcon, LinkedInIcon, TwitterIcon } from "../icons/icons";

function Footer() {
	return (
		<div className=" bg-gray-900">
			<div className="max-w-2xl mx-auto text-white py-10">
				<div className="text-center">
					<h3 className="text-4xl mb-1"> Track your money with us </h3>
					<div className="flex justify-center mt-10 mb-3 text-white gap-4 items-center">
						<a className="social-links w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" target="_blank" rel="noopener noreferrer" href="https://instagram.com/mosyocoder">
							<InstaIcon />
						</a>
						<a className="social-links w-8 h-8 md:w-10 md:h-10  lg:w-12 lg:h-12" target="_blank" rel="noopener noreferrer" href="https://twitter.com/mosyocoder">
							<TwitterIcon />
						</a>
						<a className="social-links w-8 h-8 md:w-10 md:h-10  lg:w-12 lg:h-12" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/enes-seval-162679230/">
							<LinkedInIcon />
						</a>
						<a className="social-links w-8 h-8 md:w-10 md:h-10  lg:w-12 lg:h-12" target="_blank" rel="noopener noreferrer" href="https://github.com/mosyocoder">
							<GithubIcon />
						</a>
					</div>
				</div>
				<div className="mt-1 flex flex-col md:justify-between items-center text-center text-sm text-gray-400">
					<p className="order-2 md:order-1 mt-1 md:mt-3 lg:mt-5"> &copy; Mösyö Coder, 2024. </p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
