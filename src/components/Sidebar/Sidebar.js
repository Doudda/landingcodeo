import React from "react";
import {icon, settingIcon} from "../Data/Data";

export default function Sidebar() {
	return (
		<div className="flex gap-5 bg-white max-h-[700px]">
			<div className="flex">
				<div className="flex flex-col gap-5 p-5 pt-16 bg-white min-h-[700px]">
					<div className="flex flex-col items-center gap-7 grow">
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
						<div className="hover:cursor-pointer">{icon}</div>
					</div>
					<div className="shrink">
						<div className="hover:cursor-pointer">{settingIcon}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
