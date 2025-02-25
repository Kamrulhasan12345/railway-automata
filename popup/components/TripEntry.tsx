interface TripProps {
	time: string;
	arrival: string;
	from: string;
	to: string;
	train: string;
}

export default function TripEntry({
	time,
	arrival,
	from,
	to,
	train,
}: TripProps) {
	return (
		<>
			<tr className="text-[#333333] odd:bg-white even:bg-[#f7f7f7] hover:bg-[#f0f0f0]">
				<td className="px-2 py-1">{time}</td>
				<td className="px-2 py-1">{arrival}</td>
				<td className="px-2 py-1 text-[#804600]">{from}</td>
				<td className="px-2 py-1 text-[#804600]">{to}</td>
				<td className="px-2 py-1 text-[#804600]">{train}</td>
			</tr>
		</>
	);
}
