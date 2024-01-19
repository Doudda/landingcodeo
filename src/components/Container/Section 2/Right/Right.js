import React from "react";
import RightSection1 from "./RightSection1";
import RightSection2 from "./RightSection2";
import RightSection3 from "./RightSection3";
import RightSection4 from "./RightSection4";

export default function Right() {
	return (
		<div className="container mx-auto mt-10 mr-[25px] pr-[100px]">
			<RightSection1 />
			<RightSection2 />
			<RightSection3 />
			<RightSection4 />
		</div>
	);
}
