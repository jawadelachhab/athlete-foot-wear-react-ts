import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { homeData } from "@data";
import { Container, Button } from "@components/ui";

const Hero = () => {
  const { products } = homeData;
  return (
    <section className="overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {products.map(({ image, title, subtitle }, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay"></div>
              <Container
                className="h-screen flex flex-col justify-center items-center text-center text-white relative z-20"
                as="div"
              >
                <h5 className="text-xl font-medium capitalize  mb-4">
                  {subtitle}
                </h5>
                <h2 className="text-6xl md:text-8xl font-semibold capitalize mb-8">
                  {title}
                </h2>

                <Button>Shop now</Button>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
