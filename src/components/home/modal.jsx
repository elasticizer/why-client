import React from 'react';
import styles from '@/styles/modal.module.css';
import { IoMdClose } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';

const Modal = ({ show }) => {
	if (!show) {
		return null;
	}

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<div className={styles.header}>
					<div className="flex flex-col">
						<h2 className={styles.title}>歡迎使用why小幫手</h2>
						<p>留下您的疑問，我們將及時回覆</p>
					</div>
				</div>
				{/* <div className={styles.chatBoxBody}></div> */}
				<div className={styles.chatWindow}>{/* 聊天內容可以在這裡添加 */}</div>
				<div className={styles.inputContainer}>
					<input
						type="text"
						className={styles.input}
						placeholder="Send a message..."
					/>
					<button className={styles.sendButton}>
						<IoSend />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
