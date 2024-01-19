import React from "react";
import {SlCamera} from "react-icons/sl";

export default function TopNav() {
	return (
		<div className="flex flex-row justify-between">
			<div className="bg-neutral-900 bg-opacity-50 px-3 w-auto h-auto rounded-full flex justify-center items-center">
				<SlCamera />
			</div>
			<div className="flex flex-row gap-3 text-white">
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm">LOGO</div>
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm">Unbranded</div>
				<div className="bg-neutral-900 bg-opacity-50 p-2 rounded-sm flex justify-center items-center min-w-[40px]">
					+
				</div>
			</div>
		</div>
	);
}
