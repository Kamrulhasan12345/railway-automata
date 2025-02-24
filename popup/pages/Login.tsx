import LoginForm from "../components/LoginForm";
import LogoSm from "../components/LogoSm";

export default function Login() {
	return (
		<>
			<div className="flex flex-col justify-start items-center bg-[#e4eae8] h-[100vh]">
				<div className="mt-5"></div>
				<LogoSm />
				<LoginForm />
			</div>
		</>
	);
}
