import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { FaTrashAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { IoIosWarning } from 'react-icons/io';
import ContentBlock from '../../../components/art/(withbehavior)/ContentBlock';
import { AnimatePresence } from 'framer-motion';
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
	const [userAnswer, setUserAnswer] = useState(false);
	const [count, setCount] = useState(1);
	const [para, setPara] = useState([{ name: '段落標題', content: '', id: 0 }]);
	const dialog = useRef(null);
	const id = router.query.slug;
	function addNewPara() {
		const next = [...para, { name: '段落標題', content: '', id: count }];
		setPara(next);
		setCount(prev => prev + 1);
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

	function swapWithPrevious(arr, i) {
		if (i <= 0 || i >= arr.length) {
			return arr;
		}
		[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
		return arr;
	}
	function swapWithNext(arr, i) {
		if (i < 0 || i >= arr.length - 1) {
			return arr; // Invalid i or no next element to swap
		}
		[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
		return arr;
	}
	function upPara(i) {
		let array = [...para];
		const next = swapWithPrevious(array, i);
		setPara(next);
	}
	function downPara(i) {
		let array = [...para];
		const next = swapWithNext(array, i);
		setPara(next);
	}

	const awaitUserAnswer = () => {
		return new Promise(resolve => {
			const handleConfirm = () => {
				resolve(true);
			};
			const handleCancel = () => {
				resolve(false);
			};

			setUserAnswer({
				message: '真的要刪除段落嗎 ?',
				handleConfirm: handleConfirm,
				handleCancel: handleCancel
			});
		});
	};
	const tryToDeleteCurrentPara = async (e, i) => {
		if (para.length < 2) {
			toast.error('不可刪除，文章至少需要有一個段落');
			return;
		}
		dialog.current.showModal();
		const confirmed = await awaitUserAnswer();
		if (confirmed) {
			console.log('User confirmed!');
			const newP = para.filter((v, index) => index !== i);
			setPara(newP);
			toast('已刪除');
		} else {
			console.log('User canceled.');
		}
		setUserAnswer(false);
	};

	// const clean = DOMPurify.sanitize("<b>hello there</b>");

	console.log(para);
	return (
		<>
			<dialog
				onClose={userAnswer.handleCancel}
				ref={dialog}
				className="modal">
				<div className="modal-box">
					<div className="flex gap-5 items-center ">
						<IoIosWarning className="text-3xl text-red-500" />
						<p className="py-4">{userAnswer.message}</p>
					</div>

					<div className="flex gap-5 justify-end">
						<div
							className="btn"
							onClick={() => {
								dialog.current.close();
							}}>
							取消
						</div>
						<div
							className="btn btn-error text-white"
							onClick={() => {
								userAnswer.handleConfirm();
								dialog.current.close();
							}}>
							確定刪除
						</div>
					</div>
				</div>
				<form
					method="dialog"
					className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<section className="flex flex-row justify-center pt-5 gap-5 min-h-screen bg-orange-50">
				<div className="w-[1000px] flex flex-col gap-10 mb-20">
					<h2 className="text-2xl font-black text-orange-300 w-full rounded-xl border-4 p-4 text-center border-orange-200 shadow-right-bottom-sm bg-white">
						新增文章
					</h2>
					<div className=" flex flex-row justify-end items-end">
						<div className="flex flex-row gap-5">
							{isSave && (
								<div className="btn w-fit text-xl font-black  btn-light-orange">
									<FaPlus className="text-3xl" />
									發布文章
								</div>
							)}

							<div
								className="btn w-fit text-xl font-black  btn-light-orange"
								onClick={save}>
								<FaPlus className="text-3xl" />
								儲存草稿
							</div>
						</div>
					</div>
					<div className="flex flex-col  w-full rounded-3xl border-4 pt-5 pb-10 px-5 border-orange-200 gap-5 bg-white">
						<h2 className="text-xl font-black text-orange-300">文章標題</h2>
						<textarea
							rows="1"
							className={clsx(
								'textarea textarea-bordered textarea-sm w-full text-xl font-black text-zinc-700',
								trynnaSave && !title.trim() && 'textarea-error'
							)}
							onChange={e => {
								setTitle(DOMPurify.sanitize(e.currentTarget.value));
							}}></textarea>
					</div>
					<div className="flex flex-col  w-full rounded-3xl border-4 pb-10 pt-5  px-5 border-orange-300 gap-5  bg-white">
						<h2 className="text-xl font-black text-orange-300">文章副標題</h2>
						<textarea
							rows="2"
							className={clsx(
								'textarea textarea-bordered textarea-sm w-full text-xl font-black text-zinc-700',
								trynnaSave && !subTitle.trim() && 'textarea-error'
							)}
							onChange={e => {
								setSubTitle(DOMPurify.sanitize(e.currentTarget.value));
							}}></textarea>
					</div>

					<div className="divider  divider-start my-0">
						<h2 className="text-lg font-black text-zinc-500">文章內容</h2>
					</div>
					<AnimatePresence>
						{para.map((item, i) => {
							return (
								<ContentBlock
									key={item.id}
									i={i}
									para={para}
									item={item}
									saveParaName={saveParaName}
									upPara={upPara}
									downPara={downPara}
									tryToDeleteCurrentPara={tryToDeleteCurrentPara}
									saveParaContent={saveParaContent}
									trynnaSave={trynnaSave}></ContentBlock>
							);
						})}
					</AnimatePresence>

					<div
						className="btn w-fit text-xl font-black ml-auto  btn-light-orange"
						onClick={addNewPara}>
						<FaPlus className="text-3xl" />
						新增段落
					</div>
				</div>
				<div className="w-[350px] flex justify-center h-screen items-center sticky top-0 flex-col gap-5">
					<h2 className="text-2xl font-black text-orange-300 rounded-xl border-4 py-2 px-4 text-center border-orange-200 shadow-right-bottom-sm bg-white ">
						文章架構
					</h2>
					<ul className="timeline timeline-vertical -ml-56">
						{para.map((item, i) => {
							return (
								<li
									key={i}
									className="min-h-16">
									{i !== 0 && <hr className="bg-orange-200" />}
									<div className="timeline-middle">
										<div className="rounded-full bg-orange-300 w-5 h-5"></div>
									</div>
									<div
										className="timeline-end timeline-box  text-xl font-black text-zinc-700 max-w-80 h-auto cursor-pointer hover:text-orange-300"
										onClick={() => {
											router.push(`#para-${i}`);
										}}>
										{item.name}
									</div>
									{i + 1 !== para.length && <hr className="bg-orange-200 " />}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
