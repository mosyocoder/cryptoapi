import React from "react";

import { GithubIcon, InstaIcon, LinkedInIcon, TwitterIcon } from "../icons/icons";

function Footer() {
	return (
		<div class=" bg-gray-900">
			<div class="max-w-2xl mx-auto text-white py-10">
				<div class="text-center">
					<h3 class="text-4xl mb-3"> Track your money with us </h3>
					<div class="flex justify-center my-10 text-white gap-4 items-center">
						<InstaIcon />
						<TwitterIcon />
						<LinkedInIcon />
						<GithubIcon />
					</div>
				</div>
				<div class="mt-6 flex flex-col md:justify-between items-center text-center text-sm text-gray-400">
					<p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Mösyö Coder, 2024. </p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
