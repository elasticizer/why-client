import Image from 'next/image';
import Navbar from '@/components/home/navbar';
import Slideshow from '@/components/home/slideshow';
import Slideshow2 from '@/components/home/slideshow2';
import Course from '@/components/home/course';
import Article from '@/components/home/article';
import Rating from '@/components/home/rating';
import Footer from '@/components/home/footer';
import Card from '@/components/home/card';
import Slogan from '@/components/home/slogan';
import QuickGuide from '@/components/home/quickGuide';
import Home from '@/layouts/home';

export default function Index() {
	return (
		<Home>
			<Slideshow2 />
			<Course />
			<QuickGuide />
			{/* <Card /> */}
			<Article />
			<Rating />
		</Home>
	);
}
