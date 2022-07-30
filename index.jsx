// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { Autoplay, Navigation, Pagination } from 'swiper';

const ListingSlideContainer = ({ img, heading }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={img.length > 1 ? true : false}
        speed={1000}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper listingSlider relative aspect-[4/3] w-full items-center rounded-lg md:w-52 xl:w-64"
      >
        {img.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image
              src={photo}
              alt={heading}
              className="rounded-lg object-cover"
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={nextRef} className="absolute top-[45%] right-2 z-50">
        <button className=" text-2xl text-white">
          <AiFillRightCircle />
        </button>
      </div>
      <div ref={prevRef} className="absolute top-[45%] left-2 z-50">
        <button className="text-2xl text-white">
          <AiFillLeftCircle />
        </button>
      </div>
    </div>
  );
};
export default ListingSlideContainer;
