import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        setIsLoading(true);
        apiClient.get('/products/')
            .then((res) => setProducts(res.data.results))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section className="bg-gray-50">
            <div className="py-12 max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-2 md:flex-row justify-between items-center px-4 md:px-8 mb-4 md:mb-12">
                    <h1 className="text-2xl lg:text-4xl font-bold">Tranding Product</h1>
                    <a href="#" className="btn btn-secondary px-6 py-5 rounded-full md:text-lg">View All</a>
                </div>
                {isLoading && (
                    <div className="flex justify-center items-center py-10">
                        <span className="loading loading-spinner text-secondary loading-xl"></span>
                    </div>
                )}
                {error && (
                    <ErrorAlert error={error} />
                )}
                {!isLoading && !error && products.length > 0 && (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        navigation
                        className="mt-4 px-4 container"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="flex justify-center md:ml-5">
                                <ProductItem key={product.id} product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {!isLoading && !error && products.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No Products Available</p>
                )}
            </div>
        </section>
    );
};

export default Product;