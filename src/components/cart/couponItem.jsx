export default function CouponItem({ onClick, selectedCoupon }) {
	

	return (
		<>
			{couponData.map((v, i) => (
				<a
					key={i}
					className="max-w-xs flex flex-col border border-t-4 border-t-orange-400 hover:border-t-4 hover:border-t-orange-600 shadow-sm rounded-xl cursor-pointer w-1/4">
					<div className="p-4 md:p-5">
						<h3 className="text-lg text-center font-bold text-gray-800">
							{v.name}
						</h3>
						<p className="mt-2 text-gray-500 text-sm text-center">
							{v.directions}
						</p>
					</div>
				</a>
			))}
		</>
	);
}
