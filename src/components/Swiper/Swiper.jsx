// Import Swiper React components
import { Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="slide-text">
                    <p>Sarqavorum</p>
                    <p className="small">Designers and arkaskasm learn through a combination of formal education, practical experience, and continuing professional development. </p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-text">
                    <p>Sarqavorum</p>
                    <p className="small">Designers and arkaskasm learn through a combination of formal education, practical experience, and continuing professional development. </p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} alt="Slide 1" />

            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-text">
                    <p>Sarqavorum</p>
                    <p className="small">Designers and arkaskasm learn through a combination of formal education, practical experience, and continuing professional development. </p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} alt="Slide 1" />

            </SwiperSlide>

        </Swiper>
    );
};
