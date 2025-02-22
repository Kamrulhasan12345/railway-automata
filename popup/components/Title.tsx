import railwayLogo from "../assets/bangladesh-railway.png";

interface TitleProps {
	title: string;
}

export default function Title({ title }: TitleProps) {
	return (
		<>
			<div className="flex flex-start justify-start items-center">
				<div className="flex items-center justify-center">
					<img src={railwayLogo} width={48} />
				</div>
				<div className="text-xl text-[#da924e] font-bold ml-2">{title}</div>
			</div>
		</>
	);
}
