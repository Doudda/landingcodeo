import React from "react";
import {iconwhite} from "../Data/Data";

export default function TopNav() {
	return (
		<div className="flex flex-row justify-between">
			{/* LOGO */}
			<div className="bg-neutral-900 bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center">
				{iconwhite}
			</div>
			<div className="flex flex-row gap-3 text-white">
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm">LOGO</div>
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm">Unbranded</div>
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm flex justify-center items-center">
					{iconwhite}
				</div>
			</div>
		</div>
	);
}
