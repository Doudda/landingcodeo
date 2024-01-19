import React from "react";
import Section1 from "./Section 1/Section1";
import Section2 from "./Section 2/Section2";
import Nav from "./Nav/Nav";

export default function Container() {
	return (
		<div className="flex flex-col grow">
			<Section1 />
			<Nav />
			<Section2 />
		</div>
	);
}
