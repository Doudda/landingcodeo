import React from "react";
import {SlHome} from "react-icons/sl";

export default function RightSection4() {
	return (
		<div className="bg-white py-2 px-10 mt-6 mr-[100px] rounded-xl">
			<div className="text-xl font-bold text-purple-950">B&B - Relais des plateaux Hotel & Spa</div>
			<div className="text-gray-300">
				Located less than 5 km from Ivato Airport, the Relais des Plateaux features a restaurant, a
				tropical garden and a 24-hour reception. This hotel provides a free shuffle to the airport
				and Antananrivo, the capital, is 19 km away.
			</div>
			<div className="flex flex-row gap-1 mt-3">
				<img className="rounded-xl" src="down.jpg" />
			</div>
			<div className="flex flex-row gap-2 text-gray-300 mt-2">
				<div className="bg-gray-100 py-1 px-3 rounded-full hover:cursor-pointer flex flex-row gap-1 items-center">
					<SlHome />
					Configuration de chambre
				</div>
			</div>
		</div>
	);
}
