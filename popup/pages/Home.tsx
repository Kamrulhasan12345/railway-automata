import Logo from "../components/Logo";

export default function Home() {
	return (
		<>
			<div className="flex flex-col">
				<Logo />
				<div>
					<a href="" className="text-[#804600]">
						Automations
					</a>
					<span>.</span>
					<a href="" className="text-[#804600]">
						Departures
					</a>
				</div>
			</div>
		</>
	);
}
