import railwayLogo from "../assets/bangladesh-railway.png";

export default function Logo() {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex items-center justify-center">
					<img src={railwayLogo} />
				</div>
				<div className="text-3xl text-[#da924e] text-center font-bold">
					Bangladesh Railway
				</div>
				<div className="text-sm text-[#006747] text-center">
					নিরাপদ<span>.</span>আরামদায়ক
					<span>.</span>সাশ্রয়ী
				</div>
			</div>
		</>
	);
}
