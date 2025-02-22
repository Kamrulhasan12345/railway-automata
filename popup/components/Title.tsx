import railwayLogo from "../assets/bangladesh-railway.png";

interface TitleProps {
	title: string;
}

export default function Title({ title }: TitleProps) {
	return (
		<>
			<div className="flex flex-start justify-center items-center">
				<div className="flex items-center justify-center">
					<img src={railwayLogo} />
				</div>
				<div className="text-2xl text-[#da924e]">{title}</div>
			</div>
		</>
	);
}
