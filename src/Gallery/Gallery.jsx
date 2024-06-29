// Import Swiper React components
import {Pagination, FreeMode} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import './gallery.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={true}
            pagination={{
                clickable: true,
            }}
            className="gallery"
            modules={[FreeMode, Pagination]}
        >
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>
            </SwiperSlide>
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>

            </SwiperSlide>
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>

            </SwiperSlide>
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>

            </SwiperSlide>
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>

            </SwiperSlide>
            <SwiperSlide>

                <img src={`${process.env.PUBLIC_URL}/images/gallery_img.png`} alt="Slide 1"/>

            </SwiperSlide>

        </Swiper>
    );
};
