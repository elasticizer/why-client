import 'react-quill/dist/quill.snow.css'; // Import quill styles
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

export default function Quill({ text, setText, metion }) {
	return (
		<div>
			<div className={`form-group ${metion}`}>
				<ReactQuill
					value={text}
					onChange={value => {
						setText(value);
					}}
					modules={{
						toolbar: [
							[{ header: [1, 2, 3, 4, 5, 6, false] }],
							['bold', 'italic', 'underline', 'strike'],
							['link'],
							[{ align: [] }],
							['blockquote', 'code-block'],
							[{ list: 'ordered' }, { list: 'bullet' }],
							[{ script: 'sub' }, { script: 'super' }],
							[{ image: 'image' }]
						]
					}}
					formats={[
						'header',
						'bold',
						'italic',
						'underline',
						'strike',
						'link',
						'align',
						'blockquote',
						'code-block',
						'list',
						'bullet',
						'script',
						'image'
					]}
				/>
			</div>
		</div>
	);
}
