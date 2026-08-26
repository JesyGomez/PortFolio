import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      title: "Estudios en curso",
      institution: "Universidad Nacional del Oeste",
      period: "2023 - Presente",
      description: "Formación universitaria continua, incluyendo inglés técnico para IT.",
      color: "#6366f1", // Tailwind indigo-500
    },
    {
      title: "Java y Spring - Implementación de IA",
      institution: "Alura Latam - Oracle Next Education",
      period: "Marzo 2025",
      description: "Semana Carrera TechAI. Java 21, Spring Boot, Security, JWT, MySQL, NoSQL, PostgreSQL, Postman, Insomnia, Swagger, IntelliJ, Git, GitHub, Vercel.",
      color: "#22c55e", // Tailwind green-500
    },
    {
      title: "Python - Adopción de Mascotas",
      institution: "Codo a Codo 2.0",
      period: "2024",
      description: "Python, Flask, MySQL, HTML, CSS, JavaScript, Bootstrap, Firebase, PythonAnywhere, Git, GitHub.",
      color: "#3b82f6", // Tailwind blue-500
    },
    {
      title: "ReactJS",
      institution: "Universidad Tecnológica Nacional",
      period: "2023 - 2024",
      description: "HTML, CSS, JavaScript, Bootstrap, Git, GitHub, Firebase.",
      color: "#06b6d4", // Tailwind cyan-600
    },
    {
      title: "Java y AngularJS",
      institution: "Udemy",
      period: "Curso",
      description: "Java, Spring Boot, Spring Security, JWT, MySQL, PostgreSQL, Angular, Angular Material, Tailwind CSS, Postman.",
      color: "#8b5cf6", // Tailwind violet-500
    },
    {
      title: "Full Stack Java",
      institution: "Universidad Nacional de La Punta",
      period: "2021 - 2022",
      description: "Proyecto: API para Universidad-Inscripción. Java 8, MySQL, NetBeans, GitHub.",
      color: "#0ea5e9", // Tailwind sky-500
    },
  ];

  const experience = [
    {
      title: "Desarrolladora de Software",
      company: "Meditec S.R.L.",
      period: "Septiembre 2025 - Presente",
      description:
        "Mantenimiento y evolución del CRM: Java y Spring en backend; Angular 15 con Angular Material, Material Icon y AG Grid en frontend; MySQL como base de datos. Implementación de arquitectura y servicios backend escalables para el manejo de la lógica de negocio del CRM. Uso de asistentes de IA integrados al IDE para navegar código existente, comprender relaciones entre clases y componentes, proponer cambios y revisar implementaciones. Integración de librerías y gestión de versiones con Git/GitHub, organizando el trabajo en equipo con HacknPlan.",
      color: "#ec4899", // Tailwind pink-500
    },
    {
      title: "Desarrolladora Full Stack",
      company: "Pet Portal - Polo IT (MVP)",
      period: "Marzo 2025 - Agosto 2025",
      description:
        "Trabajo colaborativo en equipo multidisciplinario de 8 integrantes (front, back, QA, diseño, mentoría). Desarrollo del MVP con React, Python, Flask, MySQL, Toastify y SweetAlert2. Gestión ágil del proyecto con Jira, con participación activa en todas las fases del desarrollo.",
      color: "#a855f7", // Tailwind purple-500
    },
    {
      title: "Data Entry",
      company: "La Ley S.A.",
      period: "2004 - 2014",
      description:
        "Procesamiento, corrección y digitalización de textos legales y administrativos en grandes volúmenes, con foco en la precisión y la calidad de la información. Coordinación con distintas áreas para la correcta circulación y actualización de los documentos.",
      color: "#0891b2", // Tailwind cyan-700
    },
    {
      title: "Especialista en Data Entry",
      company: "AyN S.A.",
      period: "2005-2008",
      description:
        "Procesamiento masivo de datos, digitalización de documentos y mantenimiento de sistemas de información",
      color: "#1e40af", // Tailwind blue-800
    },
    {
      title: "Asistente Jurídica",
      company: "Dr. Amabile",
      period: "2003-2005",
      description:
        "Apoyo en investigación legal, gestión documental y coordinación de procesos judiciales",
      color: "#67e8f9", // Tailwind cyan-300
    },
  ];

  return (
    <div id="experience" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Sección de Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Mi <span className="text-purple-600 dark:text-purple-400">Trayectoria</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </motion.div>

      {/* Contenido principal de Experiencia (Educación y Profesional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sección de Educación */}
        <div className="flex flex-col">
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🎓 Educación
          </motion.h3>

          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 pl-8 relative last:mb-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute left-[-0.65rem] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 z-10"
                  style={{ backgroundColor: item.color }}
                />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
                  <div className="text-sm font-semibold mb-1" style={{ color: item.color }}>
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <div className="text-md text-gray-600 dark:text-gray-400 mb-2">{item.institution}</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sección de Experiencia Profesional */}
        <div className="flex flex-col">
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            💼 Experiencia Profesional
          </motion.h3>

          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 pl-8 relative last:mb-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute left-[-0.65rem] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 z-10"
                  style={{ backgroundColor: item.color }}
                />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl">
                  <div className="text-sm font-semibold mb-1" style={{ color: item.color }}>
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <div className="text-md text-gray-600 dark:text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}