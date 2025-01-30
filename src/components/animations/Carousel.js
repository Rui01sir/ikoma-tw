import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
    const navigate = useNavigate();

    const slides = [
        {
            img: `${process.env.PUBLIC_URL}/img/ad2xc-ead6f.webp`,
            alt: "Slide 1",
            id: 1,
        },
        {
            img: `${process.env.PUBLIC_URL}/img/anumd-f6zxq.webp`,
            alt: "Slide 2",
            id: 1,
        },
        {
            img: `${process.env.PUBLIC_URL}/img/as77e-ae9xo.webp`,
            alt: "Slide 3",
            id: 1,
        },
    ];

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    onClick={() => navigate(`/news/${slide.id}`)} // 點擊跳轉到對應頁面
                    style={{ cursor: "pointer" }}
                >
                    <img src={slide.img} alt={slide.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel; 