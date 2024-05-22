import { RiDeleteBinLine } from 'react-icons/ri';
import { TbHeartPlus } from 'react-icons/tb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CourseItem({ item, checked, onChange, removeItem }) {
	const MySwal = withReactContent(Swal)

  const notifyAndRemove = (item) => {
    MySwal.fire({
      title: '確定要刪除嗎？',
      text: '你將無法回復這個操作！',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已刪除',
          text: item.Name + ' 已從購物車中刪除',
          icon: 'success',
        })

        removeItem(item)
      }
    })
  }
	return (
		<div className="flex flex-row sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-between items-center p-4 gap-3 h-full">
			<div className="flex items-start sm:gap-3">
				<div className="flex flex-row gap-3">
					<input
						type="checkbox"
						className="shrink-0 my-auto border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none size-4"
						checked={checked}
						onChange={onChange}
					/>

					<div className="w-40 h-20 rounded flex relative group overflow-hidden transition">
						<img
							className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
							src={item.Filename}
							alt={item.Name}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-1">
					<span className="inline-flex items-center py-0.5 px-1 rounded-md border border-yellow-400 text-sm font-bold bg-yellow-100 text-yellow-800 text-nowrap">
						{item.DomainName}
					</span>
					<p className="font-semibold text-lg tracking-wide">{item.Name}</p>
				</div>
			</div>
			<div className="flex lg:flex-col md:flex-col sm:flex-row lg:items-end md:items-end sm:items-center gap-3 sm:ps-6 lg:ps-0 md:h-full sm:w-full md:w-fit sm:justify-between">
				<div className="text-xl font-bold">NT${item.Price}</div>
				<div className="flex items-end gap-3 text-2xl">
					<button
						className="text-orange-500 hover:text-orange-400"
						data-hs-overlay="#hs-basic-modal-collect">
						<TbHeartPlus />
					</button>
					<button
						className="text-red-400 hover:text-red-600"
						data-hs-overlay="#hs-basic-modal-delete"
						onClick={() => notifyAndRemove(item)}>
						<RiDeleteBinLine /> {/* 刪除按鈕 */}
					</button>
					{/* 收藏Modal */}
					<div
						id="hs-basic-modal-collect"
						className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
						<div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
							<div className="flex flex-col bg-orange-50 border shadow-sm rounded-xl pointer-events-auto">
								<div className="flex justify-between items-center py-3 px-4">
									<h3 className="font-bold text-orange-800 text-sm">
										已將「{item.Name}」移至收藏清單
									</h3>
									<button
										type="button"
										className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
										data-hs-overlay="#hs-basic-modal-collect">
										<span className="sr-only">Close</span>
										<svg
											className="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M18 6 6 18" />
											<path d="m6 6 12 12" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* 刪除Modal */}
					{/* <div
						id="hs-basic-modal-delete"
						className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
						<div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
							<div className="flex flex-col bg-red-50 border shadow-sm rounded-xl pointer-events-auto">
								<div className="flex justify-between items-center py-3 px-4">
									<h3 className="font-bold text-red-800 text-sm">
										已將「{item.Name}」刪除
									</h3>
									<button
										type="button"
										className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
										data-hs-overlay="#hs-basic-modal-delete">
										<span className="sr-only">Close</span>
										<svg
											className="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M18 6 6 18" />
											<path d="m6 6 12 12" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
