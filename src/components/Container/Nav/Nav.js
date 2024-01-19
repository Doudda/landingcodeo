import React from "react";

import {listeNav} from "@/components/Data/Data";

export default function Nav() {
	return (
		<div className="flex justify-center items-center relative h-10">
			<div className="absolute -top-4 py-2 px-20 flex flex-row gap-10 bg-white rounded-xl shadow-lg font-semibold text-gray-400">
				{listeNav.map((item) => (
					<div className="hover:cursor-pointer hover:text-purple-800 transition ease-linear delay-0">
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
