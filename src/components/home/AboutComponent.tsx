"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { CarouselData } from "@/util/types/types";

interface Data {
  img: string;
  title: string;
  paragraph: string;
}

const AboutComponent = () => {
  const data: Data[] = [
    {
      img: "assets/images/about/01.png",
      title: "Soluciones Agropecuarias",
      paragraph: "Ofrecemos soluciones integrales para el campo adaptadas a las necesidades de cada cliente.",
    },
    {
      img: "assets/images/about/02.png",
      title: "Servicio y asesoramiento",
      paragraph: "Contamos con un equipo de profesionales capacitados para brindar el mejor servicio y aseoramiento a nuestros clientes.",
    },
    {
      img: "assets/images/about/03.png",
      title: "Productos de alta calidad",
      paragraph: "Ofrecemos productos cuidadosamente seleccionados para garantizar su eficacia y seguridad a precios competitivos.",
    },
    {
      img: "assets/images/about/04.png",
      title: "Somos la farmacia del campo",
      paragraph: "Estamos comprometidos a ofrecer soluciones efectivas y adaptadas a cada necesidad.",
    },
  ];

  const img: CarouselData[] = [
    {
      id: 1,
      image: "/assets/images/carrousel/1.jpeg",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "/assets/images/carrousel/2.jpeg",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "/assets/images/carrousel/3.jpeg",
      title: "",
      description: "",
    },
    {
      id: 4,
      image: "/assets/images/carrousel/4.jpeg",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "/assets/images/carrousel/5.jpeg",
      title: "",
      description: "",
    },
  ];
  return (
  <div className="  w-full gap-8 flex flex-col justify-center items-center ">
      <div className="w-full flex  items-center   gap-2 flex-col">
        <h5 className="text-2xl md:text-4xl font-semibold text-center">Experiencia y asesoramiento para maximizar tu producción</h5>
          <p className="text-center flex mx-auto lg:mx-[300px]">
          Descubre cómo podemos ayudarte a maximizar tu rendimiento con nuestros productos de alta calidad y el mejor asesoramiento técnico
          </p>
      </div>
      <div className="grid  lg:grid-cols-2 gap-5 ">
        <div className="grid md:max-w-[750px] mx-auto w-full  sm:grid-cols-2 gap-5 ">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-2 md:py-8 md:px-4 hover-shadow-b
               bg-white hover:bg-transparent hover:-translate-y-3 
               duration-200  group  flex flex-col justify-center items-center"
             >
              <div className="max-w-[120px]  max-h-[120px] ">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <h5 className="text-xl text-center mb-1 font-semibold group-hover:text-light">
                {item.title}
              </h5>
              <p className="text-center">{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className=" md:max-w-[750px] mx-auto w-full  overflow-hidden ">
          <Swiper
            className=" lg:h-full z-0 rounded-md h-[500px]" 
           autoplay={true}
           pagination={{ clickable: true }}
           modules={[Controller, Pagination, Autoplay]}
          >
            {img.map((item) => (
              <SwiperSlide
              key={item.id}>
                <img
                  className="w-full h-full aspect-square object-cover mix-blend-hard-light bg-black/50"
                  src={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
