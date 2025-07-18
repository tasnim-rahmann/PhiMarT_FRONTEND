import bgImg from "../../../assets/images/banner-image-bg-1.jpg"

const CarouselSlide = ({ title, subtitle, image }) => {
    return (
        <section className="w-full h-[650px] bg-cover bg-center flex flex-col md:flex-row justify-center items-center px-2 md:px-8" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full md:max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-600 my-4">{subtitle}</p>
                    <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">Shop Product</button>
                </div>

                {/* Right Content */}
                <div className="w-1/2 flex items-center justify-center">
                    <img className="max-w-sm mt-6 md:mt-0 h-[300px] md:max-w-md drop-shadow-lg" src={image} />
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;