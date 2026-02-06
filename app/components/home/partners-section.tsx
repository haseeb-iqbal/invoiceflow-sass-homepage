"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { partnersData } from "../partners";

export function PartnerSection() {
  const logos = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="border-y border-border bg-muted/30 pb-12 pt-6">
      <div>
        <p className="text-center pb-6 text-muted-foreground mb-4">
          Trusted by industry leaders
        </p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          allowTouchMove={false}
          className="logo-swiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={`${logo.name}-${index}`} className="h-24!">
              <div className="flex flex-col items-center justify-end gap-2 opacity-90 hover:opacity-100 h-full">
                <div className="h-16  [&>svg]:h-full [&>svg]:w-auto">
                  {logo.svg}
                </div>
                <span className="text-sm font-medium text-foreground/70">
                  {logo.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
