import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
} from "swiper/modules";

const picsMeetOurTeam = [
    {
        url: "/images/foto-carol.png",
        name: "Caroline Nunes Levino Brandão",
        dev: "Página Home",
        work: 'Roteiro vídeo pitch, Concepção do MVP'
    },
    {
        url: "/images/foto-ivan.png",
        name: "Ivan Ramos Biagioni",
        dev: "Página Configuração de Conta",
        work: 'Edição vídeo pitch, Concepção do MVP'
    },
    {
        url: "/images/foto-sani.png",
        name: "Luiz Henrique Sani",
        dev: "Página sobre o projeto",
        work: 'Concepção e design do MVP'
    },
    {
        url: "/images/foto-lorenzo.png",
        name: "Lorenzo Oliveira Zimbres",
        dev: "Página e lógica de Autenticação",
        work: 'Concepção e design do MVP'
    },
    {
        url: "/images/foto-othon.png",
        name: "José Othon Ribeiro Moreira Neto",
        dev: "Página Chat, Widget Chat",
        work: 'Gravação vídeo pitch, Concepção e design do MVP'
    },
];

function TeamCarousel() {
    return (
        <div className="container-swiper">
            <Swiper
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoHeight
                spaceBetween={48}
                loop={true}
                autoplay={{
                    disableOnInteraction: false,
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    stopOnLastSlide: false,
                }}
                centeredSlides
                slidesPerView={3}
                grabCursor={true}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                <div className="containerPictures">
                    {picsMeetOurTeam.map((item) => (
                        <SwiperSlide key={item.name}>
                            <div
                                className="membersPicture"
                                data-bg={item.url}
                                style={{
                                    backgroundImage: `url(${item.url})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="insideBoxPicture">
                                    <p className="namePicture">{item.name}</p>
                                    <div className="workPicture">
                                        <p>Dev: {item.dev}.</p>
                                        <p>{item.work}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
}

export default TeamCarousel;
