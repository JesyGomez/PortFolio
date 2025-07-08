import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' o 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); 
    const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID; 
    const formUrl = `https://formspree.io/f/${FORM_ID}`;

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        const data = await response.json();
        console.error("Error al enviar el mensaje a Formspree:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error en la conexión o al enviar el mensaje:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "dev.jesicagomez@gmail.com",
      link: "mailto:dev.jesicagomez@gmail.com",
      color: "#0ea5e9", // Un tono de azul
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+54 9 11 3921-9005",
      link: "https://wa.me/5491139219005", // Enlace de WhatsApp directo
      color: "#06b6d4", // Un tono de cian
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: "https://www.google.com/maps/place/Buenos+Aires", // Enlace a Google Maps genérico para BsAs
      color: "#3b82f6", // Un tono de azul medio
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "jesygomez",
      link: "https://www.linkedin.com/in/jesygomez",
      color: "#0891b2", // Un tono de azul oscuro
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Sección de Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Trabajemos <span className="text-sky-600 dark:text-cyan-400">Juntos</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mx-auto rounded-full" />
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-4">
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start justify-center">
        {/* Sección de Información de Contacto e Ilustración */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {contactInfo.map((info) => { // Puedes remover 'index' si no lo usas para la key o 'delay'
              const ContentWrapper = info.link ? motion.a : motion.div;

              // Creamos un objeto para las props que SÍ se esparcirán
              const componentProps = {
                className:
                  "bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105" +
                  (info.link ? " cursor-pointer" : ""),
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.3 }, // Puedes ajustar el delay si lo tenías basado en 'index'
                viewport: { once: true },
                whileHover: { scale: 1.05, rotateY: 5 },
              };

              if (info.link) {
                componentProps.href = info.link;
                componentProps.target = "_blank";
                componentProps.rel = "noopener noreferrer";
              }

              return (
                // Pasa la 'key' directamente aquí y luego el resto de las props
                <ContentWrapper key={info.title} {...componentProps}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl mb-4 shadow-md"
                    style={{ backgroundColor: info.color }}
                  >
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg mb-1">
                      {info.title}
                    </h4>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {info.value}
                    </span>
                  </div>
                </ContentWrapper>
              );
            })}
          </div>

          {/* Ilustración de Contacto */}
          <motion.div
            className="w-full max-w-sm lg:max-w-md mx-auto aspect-square flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute bg-purple-300 dark:bg-sky-700 rounded-full opacity-60 filter blur-sm ${
                    i === 0 && "w-10 h-10 top-1/4 left-1/4"
                  } ${i === 1 && "w-6 h-6 bottom-1/4 right-1/4"} ${
                    i === 2 && "w-8 h-8 top-1/3 right-1/3"
                  } ${i === 3 && "w-5 h-5 bottom-1/3 left-1/3"} ${
                    i === 4 &&
                    "w-7 h-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  }`}
                  animate={{
                    y: [0, (i % 2 === 0 ? -20 : 20), 0],
                    rotate: [0, 180 + i * 30, 360],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Icono principal de la ilustración */}
              <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white text-7xl sm:text-8xl shadow-2xl">
                <i className="fas fa-rocket"></i>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Sección del Formulario de Contacto */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+54 11 1234-5678"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="asunto"
                  className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="¿De qué quieres hablar?"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="mensaje"
                className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto o idea..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-y transition-all duration-200"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 mt-4 bg-cyan-600 text-white rounded-md font-semibold text-lg hover:bg-sky-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Enviar Mensaje
                </>
              )}
            </motion.button>

            {submitStatus && (
              <motion.div
                className={`mt-4 p-3 rounded-md text-center flex items-center justify-center gap-2 text-sm font-medium
                  ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus === "success" ? (
                  <>
                    <i className="fas fa-check-circle"></i>
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </>
                ) : (
                  <>
                    <i className="fas fa-exclamation-circle"></i>
                    Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                  </>
                )}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}