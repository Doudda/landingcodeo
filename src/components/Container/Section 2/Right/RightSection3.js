import React from "react";

export default function RightSection3() {
	return (
		<div className="bg-white py-2 px-10 mt-6 mr-[100px] rounded-xl">
			<div className="text-xl font-bold text-purple-950">Visit to Ambohimanga Palace</div>
			<div className="text-gray-300">
				Reservez des Hebergements a Andasibe, Madagascar bookiing.com a ete visite par plus d'un
				million d'utilisateurs au cours du mois dernier
				<div className="text-gray-300">Auberges de Jeunesse - Reservation securisee</div>
			</div>
			<div className="flex flex-row gap-1 mt-3">
				<img className="rounded-xl" src="down.jpg" />
				<img className="rounded-xl" src="down.jpg" />
			</div>
			<div className="flex flex-row gap-2 text-gray-300 mt-2">
				<div className="bg-gray-100 py-1 px-3 rounded-full">Tout guide</div>
				<div className="bg-gray-100 py-1 px-3 rounded-full">Prix entree</div>
			</div>
		</div>
	);
}
