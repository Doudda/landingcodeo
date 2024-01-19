import React from "react";
import DropdownHead from "./DropdownHead";
import DropdownItem from "./DropdownItem";

export default function Left() {
	return (
		<div className="flex flex-col m-5 gap-4">
			<DropdownHead title={"ITINERAIRE"} />
			<DropdownItem title={"19 Septembre 2023"} />
			<DropdownItem title={"20 Septembre 2023"} />
			<DropdownItem title={"Nouveau jour"} />
			<DropdownHead title={"DETAILS"} />
			<DropdownItem title={"Informations & documents"} />
			<DropdownItem title={"Notes"} />
			<DropdownItem title={"Nouvelle liste"} />
		</div>
	);
}
