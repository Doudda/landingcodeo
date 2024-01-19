import React from "react";
import {SlArrowDown} from "react-icons/sl";

export default function DropdownHead(props) {
	return (
		<div className="bg-purple-950 text-white justify-start flex py-2 pl-4 pr-24 rounded-lg shadow-md font-bold items-center gap-4 flex-row hover:cursor-pointer">
			<SlArrowDown />
			{props.title}
		</div>
	);
}
