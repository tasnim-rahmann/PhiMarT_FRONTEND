import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImg from "../../assets/default_product.jpg";

const ProductImageGallery = ({ images, ProductName }) => {
    const [thumbsSwiper] = useState(null);
    const displayImages = images.length > 0 ? images : [defaultImg];
    console.log(displayImages);

    return (
        <div className="rounded-lg border m-4 overflow-hidden">
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                className="product-main-slider"
            >
                {displayImages.map((imageObj, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-square bg-base-100">
                            <img src={imageObj} alt={ProductName} className="h-full w-full"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageGallery;