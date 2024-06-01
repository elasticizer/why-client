import Category from '../../components/courses/category/category';
import Banner from '../../components/courses/domainbanner/banner';
import Home from '../../layouts/home';
import Slideshow from '../../components/courses/slideShow/slideshow';
import CartLayout from '@/layouts/cart';

export default function Course() {
	return (
		<Home>
			<CartLayout>
				<Banner />
				<Slideshow />
				<div className="bg-[#fdf9f7]">
					<Category />
					<div className="flex container justify-center py-4">
					</div>
				</div>
			</CartLayout>
		</Home>
	);
}
