import Features from "../components/Features";
import HeroCarousel from "../components/carousel/HeroCarousel";
import Category from "../components/categories/Category";
import DiscountSection from "../components/dicount/DiscountSection";
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