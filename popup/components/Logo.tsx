import bangladeshRailwayLogo from "../assets/bangladesh-railway.png";

export default function Logo() {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex items-center justify-center">
					<img src={bangladeshRailwayLogo} alt="Bangladesh Railway Logo" />
				</div>
				<div className="text-2xl text-[#da924e] text-center font-bold mt-2 mb-1">
					Bangladesh Railway
				</div>
				<div className="text-[10px] text-[#006747] text-center flex justify-center items-center">
					নিরাপদ
					<div className="w-1 h-0.75 bg-[#006747] rounded-lg m-2"></div>
					আরামদায়ক
					<div className="w-1 h-0.75 bg-[#006747] rounded-lg m-2"></div>
					সাশ্রয়ী
				</div>
			</div>
		</>
	);
}
