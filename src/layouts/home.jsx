import Navbar from '@/components/home/navbar.jsx';
import Footer from '@/components/home/footer.jsx';
import { CartProvider } from '../contexts/cart';

export default function Home({ children }) {
    return (
        <>
            <CartProvider>
                <Navbar />
                {children}
                <Footer />
            </CartProvider>
        </>
    );
}