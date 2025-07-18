import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';
import book from "../../../assets/images/book.png";
import fassion from "../../../assets/images/fashion.png";
import technology from "../../../assets/images/technology.png";

const HeroCarousel = () => {
    const slides = [
        {
            title: "This Fine Print Book Collection",
            subtitle: "Discount Available. Grab it now",
            image: book
        },
        {
            title: "Excluive Fassion Collections",
            subtitle: "A specialists lable creating luxury essentials!",
            image: fassion
        },
        {
            title: "Your Digital World, Connected",
            subtitle: "Explore A Range Of Device For Seamless Living",
            image: technology
        }
    ];

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <CarouselSlide title={slide.title} subtitle={slide.subtitle} image={slide.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default HeroCarousel;