import React from "react";

export default function RightSection2() {
	return (
		<div className="bg-white py-2 px-10 mt-6 mr-[100px] rounded-xl">
			<div>
				<div className="text-xl font-bold text-purple-950">
					DEPARTURE - Central European Summer Time
				</div>
				<div className="flex flex-row gap-5 text-gray-300">
					<div>
						<div>Horaire</div>
						<div className="text-purple-950 font-bold">22:53</div>
					</div>
					<span class="border-solid border-2 border-gray-300"></span>
					<div>
						<div>AEROPORT</div>
						<div className="text-purple-950 font-bold">Paris-Charles de Gaule(CDG)</div>
					</div>
					<span class="border-solid border-2 border-gray-300"></span>
					<div>
						<div>AIRLINE</div>
						<div className="text-purple-950 font-bold">Air France</div>
					</div>
					<span class="border-solid border-2 border-gray-300"></span>
					<div>
						<div>FLIGHT NUMBER</div>
						<div className="text-purple-950 font-bold">AF 934</div>
					</div>
				</div>
			</div>
		</div>
	);
}
