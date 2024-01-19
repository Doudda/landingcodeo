import React from "react";
import {SlPeople} from "react-icons/sl";
import {SlHome} from "react-icons/sl";

export default function SmallTitle() {
	return (
		<div className="flex flex-row">
			<div className="flex float-row justify-center items-center gap-1 rounded-full shadow-md p-2 hover:cursor-pointer ">
				<div className="md:w-10">
					<img className="" src="avatar-ali.png" alt="" />
				</div>
				<div>Brooklyn Simmons</div>
			</div>
			<div className="flex flex-row gap-2 ml-2 font-semibold">
				<div className="flex items-center gap-2">
					<SlPeople />4 adultes
				</div>
				<div className="flex items-center">2 enfants</div>
				<div className="flex items-center"> | </div>
				<div className="flex items-center gap-2">
					<SlHome />2 SGL
				</div>
				<div className="flex items-center"> 1 DBL</div>
				<div className="flex items-center"> 1 TPL</div>
			</div>
		</div>
	);
}
