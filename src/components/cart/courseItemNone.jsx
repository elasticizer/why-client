import { PiListPlusBold } from "react-icons/pi";

export default function CourseItemNone() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-4 p-24">
        <p className="text-9xl "><PiListPlusBold /></p>
				<p className='text-lg font-semibold'>購物車是空的，去逛逛吧！</p>
				<a
					type="button"
					href='#'
					className="py-2 px-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
					前往首頁
				</a>
			</div>
		</>
	);
}
