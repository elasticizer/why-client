import ArtDetailLeft from '@/components/art/ArtDetailLeft';
import RightSearch from '@/components/art/RightSearch';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { FaTrashAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { IoIosWarning } from 'react-icons/io';
const demo = {
	title: '',
	subTitle: '',
	content: { name: '', content: '' }
};

export default function Index({}) {
	const [isSave, setIsSave] = useState(false);
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [trynnaSave, setTrynnaSave] = useState('');
	const [para, setPara] = useState([{ name: '段落', content: '' }]);
	const dialog = useRef(null);
	const id = router.query.slug;
	function addNewPara() {
		const next = [...para, { name: '段落', content: '' }];
		setPara(next);
	}
	function save() {
		setTrynnaSave(true);
		if (!title.trim() || !subTitle.trim()) {
			toast('請輸入完整資料');
		}

		toast('請不要新增空段落');
		toast('段落名稱不可為空');

		return;
		// toast.success('保存成功');
		setIsSave(true);
	}
	function saveParaName(e, i) {
		const next = para.map((v, index) => v);
		next[i].name = e.currentTarget.value;
		setPara(next);
	}
	function saveParaContent(e, i) {
		const next = para.map((v, index) => v);
		next[i].content = DOMPurify.sanitize(e.currentTarget.value);
		setPara(next);
	}

	function tryToDeleteCurrentPara(e) {
		dialog.current.showModal();
	}
	// const clean = DOMPurify.sanitize("<b>hello there</b>");

	console.log(para);
	return (
		<>
			<dialog
				className="modal"
				ref={dialog}>
				<div className="modal-box">
					<div className="flex gap-5 items-center ">
						<IoIosWarning className="text-3xl text-red-500" />
						<p className="py-4">真的要刪除段落嗎 ?</p>
					</div>

					<div className="flex gap-5 justify-end">
						<div
							className="btn"
							onClick={() => {
								dialog.current.close();
							}}>
							取消
						</div>
						<div className="btn btn-error text-white ">確定刪除</div>
					</div>
				</div>
				<form
					method="dialog"
					className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
			{/*  */}
			<section className="flex flex-row justify-center mt-5 gap-5 min-h-screen">
				<div className="w-[1000px] flex flex-col gap-10 mb-20">
					<h2 className="text-2xl font-black text-orange-300 w-full rounded-xl border-4 p-4 text-center border-orange-200 shadow-right-bottom-sm">
						新增文章
					</h2>
					<div className=" flex flex-row justify-end items-end">
						<div className="flex flex-row gap-5">
							{isSave && (
								<div className="btn w-fit text-xl font-black">
									<FaPlus className="text-3xl" />
									發布文章
								</div>
							)}

							<div
								className="btn w-fit text-xl font-black"
								onClick={save}>
								<FaPlus className="text-3xl" />
								儲存草稿
							</div>
						</div>
					</div>
					<div className="flex flex-col  w-full rounded-xl border-4 py-10 px-5 border-orange-200 gap-5">
						<h2 className="text-lg font-black text-zinc-500">文章標題</h2>
						<textarea
							placeholder="文章標題"
							className={clsx(
								'textarea textarea-bordered textarea-sm w-full text-xl font-black text-zinc-700',
								trynnaSave && !title.trim() && 'textarea-error'
							)}
							onChange={e => {
								setTitle(DOMPurify.sanitize(e.currentTarget.value));
							}}></textarea>
					</div>
					<div className="flex flex-col  w-full rounded-xl border-4 py-10 px-5 border-orange-100 gap-5 ">
						<h2 className="text-lg font-black text-zinc-500">文章副標題</h2>
						<textarea
							placeholder="文章副標題"
							className={clsx(
								'textarea textarea-bordered textarea-sm w-full text-xl font-black text-zinc-700',
								trynnaSave && !subTitle.trim() && 'textarea-error'
							)}
							onChange={e => {
								setSubTitle(DOMPurify.sanitize(e.currentTarget.value));
							}}></textarea>
					</div>

					<h2 className="text-lg font-black text-zinc-500">文章內容</h2>
					<div className="divider my-0"></div>
					{para.map((item, i) => {
						return (
							<div className="flex flex-col  w-full rounded-xl border-4 py-10 px-5 border-orange-100 odd:border-orange-200  gap-5 ">
								<div
									className="flex flex-row w-full"
									key={i}>
									<div className="flex flex-col justify-between  w-36 mr-3 ">
										<div className="flex flex-col gap-3">
											{/* <h2 className="text-lg font-black text-zinc-400">
											段落標題
										</h2> */}
											<textarea
												type="text"
												defaultValue={item.name}
												placeholder={item.name}
												className="input text-xl font-black text-zinc-700 "
												onChange={e => saveParaName(e, i)}></textarea>
										</div>
										<div
											className="btn"
											onClick={tryToDeleteCurrentPara}>
											<FaTrashAlt className="text-2xl" />
										</div>
									</div>
									<textarea
										onChange={e => saveParaContent(e, i)}
										placeholder="段落內容"
										className={clsx(
											'textarea textarea-bordered textarea-sm min-h-[500px] w-full  text-xl font-black text-zinc-700',
											trynnaSave && !para[i].content.trim() && 'textarea-error'
										)}></textarea>
								</div>
							</div>
						);
					})}

					<div
						className="btn w-fit text-xl font-black ml-auto"
						onClick={addNewPara}>
						<FaPlus className="text-3xl" />
						新增段落
					</div>
				</div>
				<div className="w-[350px] flex justify-center h-screen items-center sticky top-0">
					<ul className="timeline timeline-vertical">
						<h2 className="text-2xl font-black text-zinc-500 text-end mb-5">
							文章架構
						</h2>
						{para.map((item, i) => {
							return (
								<li key={i}>
									{i !== 0 && <hr />}
									<div className="timeline-middle">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-5 h-5">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div className="timeline-end timeline-box  text-xl font-black text-zinc-700">
										{item.name}
									</div>
									{i + 1 !== para.length && <hr />}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
