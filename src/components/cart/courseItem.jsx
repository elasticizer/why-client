import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function CourseItem({ item, checked, onChange, removeItem }) {
	const MySwal = withReactContent(Swal);

	const notifyAndRemove = item => {
		MySwal.fire({
			title: '確定要刪除嗎？',
			text: '你將無法回復這個操作！',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: '取消',
			confirmButtonText: '確定刪除'
		}).then(result => {
			if (result.isConfirmed) {
				MySwal.fire({
					title: '已刪除',
					text: item.Name + ' 已從購物車中刪除',
					icon: 'success'
				});

				removeItem(item);
			}
		});
	};
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
						className="text-red-400 hover:text-red-600"
						onClick={() => notifyAndRemove(item)}>
						<RiDeleteBinLine />
					</button>
				</div>
			</div>
		</div>
	);
}
