import React from 'react';

export const InstitutionalSectionComponent = () => {
  const institutional = [
    {
      img: "assets/images/services/solucionesagropecuarias.jpg",
      title: "Soluciones agropecuarias",
      description: "Ofrecemos soluciones para el rendimiento y el cuidado de todos tus cultivos. Contamos con productos que optimizan cada etapa del ciclo de crecimiento."
    },
    {
      img: "assets/images/services/servicioyasesoramientos.jpg",
      title: "Servicios y asesoramientos",
      description: "Resuelve todas tus dudas con nuestros profesionales dispuestos a ofrecerte la mejor orientación para maximizar el rendimiento de tus cultivos."
    },
    {
      img: "assets/images/services/productosagropecuarios.jpg",
      title: "Productos de primera calidad",
      description: "Nuestros productos son seleccionados con los más altos estándares de calidad, garantizando seguridad y precios competitivos para cada tipo de cultivo."
    },
    {
      img: "assets/images/services/prioridadsalud.jpg",
      title: "Optimizamos tu produccion",
      description: "Comprometidos a cuidar la salud y el desarrollo de tu campo, proporcionamos productos que fomentan un crecimiento sano y sostenible."
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutional.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden max-h-[500px] py-8 px-4 text-center transition-transform transform hover:scale-105 flex flex-col justify-between min-h-[350px]" // Altura mínima para las tarjetas
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-[20px] font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed h-[150px] overflow-hidden">{item.description}</p> {/* Limitamos la altura del texto */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};