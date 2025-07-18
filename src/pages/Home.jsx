import Features from "../components/home/Features";
import HeroCarousel from "../components/home/carousel/HeroCarousel";
import Category from "../components/home/categories/Category";
import DiscountSection from "../components/home/dicount/DiscountSection";
import Product from "../components/products/Product";

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <Features />
            <Category />
            <Product />
            <DiscountSection />
        </div>
    );
};

export default Home;