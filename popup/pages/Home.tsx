import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-evenly h-[100vh] bg-[#e4eae8]">
				<Logo />
				<div className="text-center text-[#804600] flex justify-center items-center">
					<a href="">Automations</a>
					<div className="w-1 h-0.75 bg-[#804600] rounded-lg m-2 opacity-75"></div>
					<Link to="/departures">Departures</Link>
				</div>
			</div>
		</>
	);
}
