import Logo from "../components/Logo";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-[100vh] bg-[#e4eae8]">
				<Logo />
				<div className="text-center text-[#804600]">
					<a href="">Automations</a>
					<span>.</span>
					<a href="">Departures</a>
				</div>
			</div>
		</>
	);
}
