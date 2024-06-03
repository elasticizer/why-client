import { forwardRef } from "react";
import { IoIosWarning } from 'react-icons/io';

export default forwardRef(function ConfirmDialog({ userAnswer, ref }) {
	const { message, handleConfirm } = userAnswer;
	return (
		<dialog
			ref={ref}
			className="modal">
			<div className="modal-box">
				<div className="flex gap-5 items-center ">
					<IoIosWarning className="text-3xl text-red-500" />
					<p className="py-4">{message}</p>
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
						onClick={handleConfirm}>
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
	);
});
