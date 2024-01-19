import React from "react";

export default function DropdownItem(props) {
	return (
		<div className="ml-11 font-bold text-gray-400 hover:cursor-pointer hover:text-purple-950 transition ease-linear delay-0">
			{props.title}
		</div>
	);
}
