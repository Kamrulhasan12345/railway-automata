import OutsideBangladeshMsg from "../components/OutsideBangladeshMsg";
import LogoSm from "../components/LogoSm";

export default function OutsideBangladesh() {
	return (
		<>
			<div className="flex flex-col justify-start items-center bg-[#e4eae8] h-[100vh]">
				<div className="mt-5"></div>
				<LogoSm />
				<OutsideBangladeshMsg />
			</div>
		</>
	);
}
