import React from "react";

export default function RightSection1() {
	return (
		<div className="flex flex-row">
			<div className="grow">
				<div className="text-2xl font-bold">19 Septembre 2023</div>
				<div className="text-2xl font-bold text-gray-400">Ambohimanga Palace</div>
			</div>
			<div className="w-auto my-2 p-3 bg-purple-900 text-white flex items-center rounded-md hover:cursor-pointer">
				Ajouter un evenement
			</div>
		</div>
	);
}
