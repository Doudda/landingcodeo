import React from "react";
import {icon, settingIcon} from "../Data/Data";

export default function Sidebar() {
	return (
		<div className="flex items-center gap-5 bg-white">
			<div className="flex">
				<div className="flex flex-col gap-5 p-5 pt-16 bg-white min-h-[700px]">
					<div className="flex flex-col items-center gap-7 grow">
						<div className="border-r-2 border-solid border-black hover:border-r-2 hover:border-purple-900">
							{icon}
						</div>
						<div className="">{icon}</div>
						<div className="">{icon}</div>
						<div className="">{icon}</div>
						<div className="">{icon}</div>
						<div className="">{icon}</div>
						<div className="">{icon}</div>
					</div>
					<div className="shrink">
						<div className="">{settingIcon}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
