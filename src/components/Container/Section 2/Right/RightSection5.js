import React from "react";
import {SlMagnifier} from "react-icons/sl";

export default function RightSection5() {
	return (
		<div className="mt-5 flex flex-row items-center gap-5">
			<input
				type="text"
				className="min-h-16 grow px-10 rounded-xl shadow-lg"
				placeholder="Hotel, activites, location...."
			/>
			<div className="bg-white min-h-16 min-w-16 flex items-center justify-center rounded-xl text-5xl text-gray-400 hover:cursor-pointer">
				+
			</div>
		</div>
	);
}
