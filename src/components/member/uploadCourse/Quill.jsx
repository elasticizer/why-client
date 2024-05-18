import "react-quill/dist/quill.snow.css"; // Import quill styles
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

export default function Quill({ text, setText }) {
	return (
		<div>
			<div className="form-group">
				<ReactQuill
					value={text}
					onChange={(value) => {
						setText(value);
					}}
					modules={{
						toolbar: [
							[{ header: [1, 2, false] }],
							["bold", "italic", "underline", "strike"],
							["link"],
							[{ align: [] }],
							["blockquote", "code-block"],
							[{ list: "ordered" }, { list: "bullet" }],
							[{ script: "sub" }, { script: "super" }],
						],
					}}
					formats={[
						"header",
						"bold",
						"italic",
						"underline",
						"strike",
						"link",
						"align",
						"blockquote",
						"code-block",
						"list",
						"bullet",
						"script",
					]}
				/>
			</div>
		</div>
	);
}
