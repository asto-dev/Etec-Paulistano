import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Gallery as Photos } from "../../../../constants/Photos";
import "./styles/Gallery.css";
export default function Gallery(props: { Name: string }) {
  return (
    <section id="Gallery" className=" h-[800px] bg-[var(--light-bg)] pb-10 ">
      <div className=" flex  justify-center pb-32">
        <div className="border-b-[2px] border-b-[var(--secound)] w-[550px] flex flex-col items-center pb-4">
          <h1 className=" text-6xl font-bold text-[var(--light-primary)] text-nowrap">
            {props.Name}
          </h1>
        </div>
      </div>
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span key="${index}" class='${className}'></span>`;
          },
        }}
        modules={[Pagination]}
        loop={true}
        className="swiper"
        style={{ paddingBottom: "120px" }}
      >
        <div className="swiper-wrapper flex flex-row pb-20 overflow-x-hidden w-[100%]">
          {Photos.map((Photo, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  id="Photo"
                  className=" w-[100%] h-[400px] rounded-[2rem] object-cover"
                  src={Photo.image}
                  style={{
                    boxShadow: "15px 15px 0px rgba(0,0,0,.25)",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
}
