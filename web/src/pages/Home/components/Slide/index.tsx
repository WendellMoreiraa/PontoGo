import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";

import { ReactNode } from "react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}
export default function Slide({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
