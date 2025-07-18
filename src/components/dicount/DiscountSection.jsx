import bgImg from "../../assets/images/banner-image-bg-2.jpg"
import bannerImg from "../../assets/images/banner-image3.png";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
    return (
        <section className="w-full h-[500px] md:h-[600px] bg-cover bg-center flex flex-col md:flex-row justify-center items-center px-2" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="w-1/2 flex items-center justify-center md:justify-start">
                    <img className="max-w-2xl mt-6 md:mt-0 h-[200px] md:h-[400px] md:max-w-md drop-shadow-lg" src={bannerImg} />
                </div>
                {/* Right Content */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-2xl md:text-5xl font-bold text-gray-900">30% Discount On All Items. Hurry Up!!!</h1>
                    <DiscountTimer />
                    <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">Shop Collection</button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;