

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
            <SwiperSlide>
                <div className='slider-1 slider'>
                    <div className='overlay text-white flex items-center justify-center'>
                        <h1 className='text-5xl'>Jahid hasa</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-2 slider'>
                    <div className='overlay'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-3 slider'>
                    <div className='overlay'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-4 slider'>
                    <div className='overlay'></div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;