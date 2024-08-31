import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../style/Home/Videoslider/Videoslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Videoslider() {
    return (
        <div className="container-swiper">
            <Swiper
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    slideShadows: false,
                }}
                grabCursor={true}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className="youtubeVideo">
                        <iframe
                            src="https://www.youtube.com/embed/4Wk-6efLA1M"
                            title="Youtube Video"
                        />
                        <p className="video-title">Video pitch 2 - Softtek</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="youtubeVideo">
                        <iframe
                            src="https://www.youtube.com/embed/qgjfKKskmzg?si=nh6CdXqOlwx4W2c8"
                            title="YouTube Video"
                        />
                        <p className="video-title">Video pitch 1 - Softtek</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
}

export default Videoslider;
