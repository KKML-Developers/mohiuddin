import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./about.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [])


    const brands = data?.brands;
    return (
        <Swiper
            spaceBetween={10}
            freeMode={true}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                pauseOnMouseEnter: true
            }}
            breakpoints={{

                575: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1201: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

            }}
            modules={[FreeMode, Autoplay]}
        >
            {brands?.brandLogos?.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link to={item.url} target='_blank' name={item.alt} title={item.alt}>
                        <img src={item.logo} alt={item.alt} />
                    </Link>
                </SwiperSlide>

            ))}
        </Swiper>
    )
}

export default Slider