import React from "react";
import {SlPaperPlane} from "react-icons/sl";

export default function ProfilBottomRight() {
	return (
		<div className="-ml-10">
			<div className="text-gray-200">Creer par :</div>
			<div className="flex flex-row justify-center items-center gap-1">
				<div className="md:w-10">
					<img className="" src="avatar-ali.png" alt="" />
				</div>
				<div className="flex flex-col">
					<div className="font-bold">Kristin Watson</div>
					<div className="text-gray-200">Admin</div>
				</div>
			</div>
			<div className="bg-pink-700 w-[110px] h-10 flex justify-center items-center gap-2 rounded-md shadow-md hover:bg-pink-500 hover:cursor-pointer">
				<SlPaperPlane />
				Envoyer
			</div>
		</div>
	);
}
