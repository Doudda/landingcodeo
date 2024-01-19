import Container from "@/components/Container/Container";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
	return (
		<div className="flex flex-row">
			<Sidebar />
			<Container />
		</div>
	);
}
