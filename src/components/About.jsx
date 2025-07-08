import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Mi Historia",
      content: `Soy Jesica, una desarrolladora apasionada con experiencia en proyectos web y full-stack. Mi viaje en el desarrollo de software comenzó en 2021. Cuento con antecedentes en gestión y procesamiento de documentos en La Ley S.A. y actualmente formo parte del proyecto Acelerador Polo IT, trabajando en equipo con tecnologías como React, Python, Flask y MySQL. Estoy comprometida con el aprendizaje continuo y la creación de soluciones innovadoras.`,
    },
    {
      title: "Filosofía",
      content: `Creo firmemente que la tecnología debe servir para mejorar la vida de las personas. Cada línea de código que escribo tiene un propósito: crear experiencias digitales que sean intuitivas, eficientes y accesibles. Mi enfoque se centra en la calidad, la innovación y el impacto positivo, siempre comprometida con el aprendizaje continuo y el crecimiento profesional.`,
    },
    {
      title: "Objetivos",
      content: `Mi meta es convertirme en una desarrolladora full-stack completa, especializada en tecnologías modernas como Java, React y Spring Boot. Aspiro a liderar proyectos que marquen la diferencia y contribuir al crecimiento de equipos de desarrollo de alto rendimiento.`,
    },
  ];

  return (
    <div id="about" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Sección de Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          <span className="text-purple-600 dark:text-purple-400">Sobre</span> Mí
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </motion.div>

      {/* Contenido principal de "Sobre Mí" */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Sección de Imagen y Estadísticas */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl dark:shadow-2xl">
            {/* Si tienes una imagen real, reemplaza este src */}
            <img src="image/LogoInicial.png?height=400&width=400" alt="Jesica trabajando" className="w-full h-full object-cover" />
            {/* Marco decorativo */}
            <div className="absolute inset-0 border-4 border-purple-500 dark:border-pink-500 rounded-full transform translate-x-4 translate-y-4 -z-10" />
          </div>

          {/* Contenedor de Estadísticas */}
          <div className="flex justify-around items-center w-full max-w-sm sm:max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:shadow-xl mt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Años Estudiando</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Tecnologías</div>
            </div>
          </div>
        </motion.div>

        {/* Sección de Texto y Pestañas */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contenedor de Pestañas */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
        <div className="grid grid-cols-1 sm:flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    px-2 py-2 text-lg font-semibold transition-colors duration-200
                    ${activeTab === index
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 dark:border-purple-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-300"
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <motion.p
                key={activeTab} // Key cambia para forzar la re-animación al cambiar de pestaña
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {tabs[activeTab].content}
              </motion.p>
            </div>
          </div>

          {/* Información Personal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-gray-800 dark:text-white">Ubicación:</span>
              <span className="text-gray-600 dark:text-gray-300">Buenos Aires, Argentina</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-gray-800 dark:text-white">Estado:</span>
              <span className="text-gray-600 dark:text-gray-300">Disponible para proyectos</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-gray-800 dark:text-white">Especialidad:</span>
              <span className="text-gray-600 dark:text-gray-300">Full Stack Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}