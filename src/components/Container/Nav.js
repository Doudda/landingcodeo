import React from "react";

export default function Nav() {
	return (
		<div className="flex justify-center items-center relative h-10">
			<div className="absolute -top-4 py-2 px-20 flex flex-row gap-10 bg-white rounded-xl shadow-lg font-semibold text-purple-800">
				<div>ITINERAIRE</div>
				<div>COTATIONS</div>
				<div>TARIFS</div>
				<div>FACTURATION</div>
			</div>
		</div>
	);
}
