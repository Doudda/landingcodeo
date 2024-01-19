import React from "react";

export default function RightSection6() {
	return (
		<div className="mt-10 flex flex-col ">
			<div className="text-xl font-bold mb-2">Information & documents</div>
			<div className="flex flex-row items-center gap-5">
				<input
					type="text"
					className="min-h-16 grow px-10 rounded-xl shadow-lg"
					placeholder="Ajouter plus d'informations"
				/>
				<div className="bg-white min-h-16 min-w-16 flex items-center justify-center rounded-xl text-5xl text-gray-400 hover:cursor-pointer">
					+
				</div>
			</div>
		</div>
	);
}
