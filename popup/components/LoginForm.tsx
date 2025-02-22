export default function LoginForm() {
	return (
		<>
			<div className="flex flex-col rounded-sm bg-white w-[60%] mt-5">
				<div className="flex justify-between items-center shadow-[0_1px_10px_rgba(218,146,78,0.25)] px-8 py-3 rounded-t-[3px]">
					<div className="text-[#da924e] font-bold text-center">
						<a href="">Forgot Password?</a>
					</div>
				</div>
				<div className="flex flex-col py-5 px-4">
					<form action="" method="post">
						<div className="my-2">
							<input
								type="text"
								name="phone"
								id="phone"
								placeholder="Enter your mobile number"
								className="w-full py-2 px-3 text-[10px] bg-[#f5f8f9] text-[#808080] rounded-[3px] focus:border-[#dbdee0] border-1 border-[#f5f8f9] focus:outline-none"
							/>
						</div>
						<div className="py-2">
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								className="w-full py-2 px-3 text-[10px] bg-[#f5f8f9] text-[#808080] rounded-[3px] focus:border-[#dbdee0] border-1 border-[#f5f8f9] focus:outline-none"
							/>
						</div>
						<div className="py-2">
							<button
								type="submit"
								className="w-full bg-[#006747] text-white border-[#006747] disabled:bg-[#9bb9b0] text-center py-2 px-3 disabled:text-[#808080] border-[1.5px] disabled:border-[#4d645d] rounded-[3.5px] hover:bg-[#1ba97d] hover:border-[#1ba97d] font-medium"
								disabled
							>
								LOGIN
							</button>
						</div>
						<div className="py-0.5 text-[#d3d9dc] text-center font-bold">
							OR
						</div>
						<div className="pt-0.5 text-center underline font-medium">
							<a href="" className="text-[#006747]">
								REGISTER
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
