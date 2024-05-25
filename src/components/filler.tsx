import type { Inputable } from '@/types';
import { sleep } from '@/utilities';
import { GoPencil } from 'react-icons/go';

type FillerProps = {
	data: Record<string, string>;
	keystrokesPerSecond?: BigInt;
};

export default function Filler({
	data,
	keystrokesPerSecond = 50n
}: FillerProps) {
	return (
		<div
			className="absolute top-0 end-0 m-4 cursor-pointer"
			onClick={_ =>
				Object.keys(data).forEach(async id => {
					const element = document.getElementById(id) as Inputable;
					const event = new InputEvent('input', { bubbles: true });

					if (!element) return;

					await keyIn(element, data[id], keystrokesPerSecond);
					element.dispatchEvent(event);
				})
			}>
			<span className="inline-flex justify-center items-center size-[46px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800 dark:border-blue-900 dark:bg-blue-800 dark:text-blue-400">
				<GoPencil
					color="currentColor"
					size={24}
				/>
			</span>
		</div>
	);
}

async function keyIn(
	element: Inputable,
	value: string,
	keystrokesPerSecond: BigInt
) {
	if (element.value !== '') return element;

	for (const character of value) {
		element.value += character;

		await sleep(keystrokesPerSecond);
	}

	return element;
}
