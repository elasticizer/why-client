import React from 'react';
import styles from '@/styles/modal.module.css';
import { IoMdClose } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';

const Modal = ({ show, onClose }) => {
	if (!show) {
		return null;
	}

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<button
					className={styles.closeButton}
					onClick={onClose}>
					<IoMdClose />
				</button>
				<div>
					<h2>歡迎使用Why School小幫手</h2>
					<p>有任何問題歡迎隨時傳訊息與我們聯絡</p>
				</div>
				<div className={styles.chatBoxBody}></div>
				<form className="flex gap-2">
					<input className="py-3 px-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
					<button
						className="hover:scale-110"
						type="submit">
						<IoSend />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
