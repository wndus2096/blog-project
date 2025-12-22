import { NavLink, useNavigate } from "react-router";
import { Separator } from "../ui/separator";
import { useAuthStore } from "@/stores";

const AppHeader = () => {
	const navigate = useNavigate();

	const user = useAuthStore((state) => state.user);
	const reset = useAuthStore((state) => state.reset);

	return (
		<header className="fiexed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
		<div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
			{/* 로고 & 내비게이션 UI */}
			<div className="flex items-center gap-5">
			<img src="/assets/icons/img-001.png" alt="@LOGO" className="w-6 h-6 cursor-pointer" onClick={() => navigate("/")} />
			<div className="flex items-center gap-5">
				<div className="font-semibold">토픽 인사이트</div>
				<Separator orientation="vertical" className="!h-4"/>
				<div className="font-semibold">포트폴리오</div>
			</div>
			</div>

			{ user.email ? (
				<div className="flex items-center gap-5">
					<span>{user.email}</span>
					<Separator orientation="vertical" className="!h-4" />
					<span onClick={reset}>로그아웃</span>
				</div>
			) : (
				<NavLink to={"/sign-in"}>로그인</NavLink>
			)}
			
		</div>
		</header>
	)
}

export { AppHeader };