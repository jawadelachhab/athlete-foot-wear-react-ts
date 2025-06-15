import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { footerData } from "@data";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon } from "@hugeicons/core-free-icons";

const InstagramFeeds = () => {
  const { instagramFeeds } = footerData;
  return (
    <section>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {instagramFeeds.map(({ link, image }, index) => (
          <SwiperSlide key={index}>
            <Link to={link} className="h-64 w-full overflow-hidden group">
              <img
                src={image}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="overlay flex justify-center items-center opacity-0 duration-300 transition-opacity group-hover:opacity-100">
                <HugeiconsIcon icon={InstagramIcon} size={30} color="#ffffff" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InstagramFeeds;
