import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
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
            <SwiperSlide>
                <img src={`${process.env.PUBLIC_URL}/img/a9086-dow6o.svg`} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${process.env.PUBLIC_URL}/img/a96ml-0qr3t.svg`} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${process.env.PUBLIC_URL}/img/aytym-h8rct.svg`} alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;