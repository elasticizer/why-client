import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
export default function ArtSideBar() {
	const { auth, setAuth } = useAuth();
	const router = useRouter();
	return (
		<>
			<div className="fixed flex h-screen left-20  items-center z-50">
				<div className="h-fit flex flex-col items-center justify-center gap-5 bg-white shadow-lg   p-3 rounded-full">
					{auth && (
						<div className="avatar">
							<div className="w-14 rounded-full">
								<img src={auth.img} />
							</div>
						</div>
					)}
					{auth && (
						<button
							className="btn btn-ghost btn-circle"
							onClick={() => {
								localStorage.setItem('userInfo', '');
								setAuth(null);
								console.log(' setAuth(null);');
								router.reload();
							}}>
							登出
						</button>
					)}
					{!auth && (
						<div className="text-sm p-2 text-blue-500 font-black  ">已登出</div>
					)}
					{!auth && (
						<button
							className="btn btn-ghost btn-circle w-fit  px-2"
							onClick={() => {
								setAuth({
									id: '637742b19d29c62bfd10e368',
									username: 'AME',
									img: 'https://randomuser.me/api/portraits/women/79.jpg'
								});
							}}>
							登入 <br /> AME
						</button>
					)}

					{!auth && (
						<button
							className="btn btn-ghost btn-circle w-fit  px-2"
							onClick={() => {
								setAuth({
									id: '637742b19d29c62bfd10e367',
									username: 'NEO',
									img: 'https://randomuser.me/api/portraits/men/51.jpg'
								});
							}}>
							登入
							<br />
							NEO
						</button>
					)}
					<a
						className="btn btn-ghost btn-circle w-fit  px-2"
						href={`/art/author/637742b19d29c62bfd10e368`}
						target="_blank">
						AME
						<br />
						主頁
					</a>

					<a
						className="btn btn-ghost btn-circle w-fit  px-2"
						href={`/art/author/637742b19d29c62bfd10e367`}
						target="_blank">
						NEO
						<br />
						主頁
					</a>
				</div>
			</div>
			<a
				href="#"
				className="fixed btn w-20 h-20  btn-circle bg-white shadow-xl  border-none bottom-20 left-20 z-50 ml-1">
				Top
			</a>
		</>
	);
}
