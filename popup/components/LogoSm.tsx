import bangladeshRailwayLogo from "../assets/bangladesh-railway.png";

export default function LogoSm() {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex items-center justify-center">
					<img
						src={bangladeshRailwayLogo}
						width={100}
						alt="Bangladesh Railway Logo"
					/>
				</div>
				<div className="text-xl text-[#da924e] text-center font-bold mt-2 mb-1">
					Bangladesh Railway
				</div>
				<div className="text-[8px] text-[#006747] text-center flex justify-center items-center w-[100%]">
					নিরাপদ
					<div className="w-0.75 h-0.5 bg-[#006747] rounded-lg m-1.5"></div>
					আরামদায়ক
					<div className="w-0.75 h-0.5 bg-[#006747] rounded-lg m-1.5"></div>
					সাশ্রয়ী
				</div>
			</div>
		</>
	);
}
