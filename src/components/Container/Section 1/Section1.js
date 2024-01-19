import React from "react";
import TopNav from "./TopNav";
import ProfilBottomRight from "./ProfilBottomRight";
import SmallTitle from "./SmallTitle";
import {SlCalender} from "react-icons/sl";

export default function Section1() {
	return (
		<div className="mycontainer bg-no-repeat bg-nature-bg text-white pr-[100px]">
			<div className="flex flex-col m-10 gap-20">
				<TopNav />
				<div className="flex flex-row justify-between">
					<div className="flex flex-col gap-2">
						<h1 className="text-5xl font-bold">Wildlife Exploration in Andasibe - Maruxi</h1>
						<SmallTitle />
						<div className="font-semibold flex flex-row items-center gap-2">
							<SlCalender />
							19 SEP 2023 - 21 SEP 2023
						</div>
					</div>
					<ProfilBottomRight />
				</div>
			</div>
		</div>
	);
}
