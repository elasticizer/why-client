import Link from 'next/link';
import { BsFillTrash3Fill } from "react-icons/bs";
import Swal from 'sweetalert2';
import 'animate.css';


export default function ContentCard({
	key,
	WhenCreated,
	Title,
	Content,
	Author,
	UserSN,
	ArticleSN,
	setDataSuccess }) {


	// html轉純文字。
	const stripHtmlTags = (html) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || "";
	};

	const deletedData = async () => {
		try {
			const result = await Swal.fire({
				title: "確定要刪除該篇收藏嗎?",
				text: "或許他還對妳有幫助!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "刪除!",
				cancelButtonText: "取消!"
			});

			if (result.isConfirmed) {
				const data = await fetch(`/api/learner/articleBookmarking/delete?UserSN=${UserSN}&ArticleSN=${ArticleSN}`).then(r => r.json());
				// 將空物件設定給狀態，讓content再次渲染
				setDataSuccess({});
				console.log('刪除成功');

				await Swal.fire({
					title: "已刪除!",
					text: "如果有需要可以再列入收藏",
					icon: "success",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "完成!"
				});
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Link href="#" className="animate__animated animate__fadeIn">
			<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-gray-100	animate__animated animate__fadeIn">
				<div className="flex items-center gap-x-4 text-xs">
					<time dateTime="2020-03-16" className="text-gray-500">
						{WhenCreated}
					</time>
					<a
						href="#"
						className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					>
						Marketing
					</a>
				</div>
				<div className="group relative w-full">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
						<a href="#">
							<span className="inset-0 line-clamp-1">{Title}</span>

						</a>
					</h3>
					<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-justify">
						{stripHtmlTags(Content)}
					</p>
				</div>
				<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
					<div className="relative flex items-center gap-x-4">
						<img
							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							className="h-10 w-10 rounded-full bg-gray-50"
						/>
						<div className="text-sm leading-6">
							<p className="font-semibold text-gray-900">
								<a href="#">
									<span className="absolute inset-0" />
									{Author}
								</a>
							</p>
						</div>
					</div>
					<button className="mb-1" onClick={deletedData}><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
				</div>

			</article>
		</Link>


	);
}
