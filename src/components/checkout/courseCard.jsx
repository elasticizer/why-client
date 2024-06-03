export default function CourseCard({ name, filename }) {
	return (
		<a
			className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition w-1/3"
			href="#">
			<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
				<img
					className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
					src={
							filename && filename.startsWith('h')
								? filename
								: `/learner/LessonVideo/${filename}`
						}
				/>
			</div>
			<div className="p-4 md:p-5">
				<h3 className="text-lg font-bold text-gray-800">{name}</h3>
			</div>
		</a>
	);
}