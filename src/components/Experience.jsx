import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      title: "Semana CarreraTech IA",
      institution: "Alura",
      period: "2025",
      description: "Implementación de IA con Java, Spring, editor de código, excel, landing page.",
      color: "#f59e0b", // Tailwind amber-500
    },
    {
      title: "ReactJs - Ecommerce-Pet",
      institution: "Talento Tech",
      period: "2025 - Presente",
      description: "Tecnologías: HTML, CSS, JS, Bootstrap, SweetAlert.",
      color: "#ef4444", // Tailwind red-500
    },
    {
      title: "Java, Angular - Ecommerce-Tienda",
      institution: "Udemy",
      period: "2024 - Presente",
      description: "Tecnologías: HTML, CSS, JS, Typescript, Tailwind, Firebase, NoSql, Angular, Git, Github.",
      color: "#8b5cf6", // Tailwind violet-500
    },
    {
      title: "Java-Spring-Security-Sql-Front",
      institution: "Alura-Oracle",
      period: "2024 - Presente",
      description: "Proyectos: ForumHub, Api Clinica, Librería, etc. Tecnologías: Java 21, Spring Boot, Security, JWT, Mysql, Postman, Postgres, Workbench, Intellij, Insomnia, Swagger, Trello, Git, Github, Vercel.",
      color: "#22c55e", // Tailwind green-500
    },
    {
      title: "Python - Adopción de Mascotas",
      institution: "Codo a Codo 2.0",
      period: "2024",
      description: "Tecnologías: Python, HTML, CSS, JS, Bootstrap, VSC, Mysql, Flask, PythonAnywhere, Git, Github.",
      color: "#3b82f6", // Tailwind blue-500
    },
    {
      title: "ReactJs - Ecommerce",
      institution: "Universidad Tecnológica Nacional",
      period: "2024",
      description: "Tecnologías: HTML, CSS, JS, Bootstrap, VSC, Git, Github, Firebase.",
      color: "#06b6d4", // Tailwind cyan-600
    },
    {
      title: "Inglés Intermedio",
      institution: "Universidad Nacional del Oeste",
      period: "2023 - Presente",
      description: "Fortalecimiento de habilidades comunicativas en inglés técnico para IT.",
      color: "#6366f1", // Tailwind indigo-500
    },
    {
      title: "Desarrollo de Aplicaciones Full Stack Java",
      institution: "Universidad Nacional de La Punta",
      period: "2021 - 2022",
      description: "Proyecto: Api para Universidad-Inscripción. Tecnologías: Java8, Mysql, Neatbeans, Github.",
      color: "#0ea5e9", // Tailwind sky-500
    },
  ];

  const experience = [
    {
      title: "Desarrolladora",
      company: "Pet Portal - Polo IT",
      period: "Marzo-2025 - Presente",
      description:
        "Trabajo colaborativo en equipo multidisciplinario (front, back, QA, diseño, mentor). Uso de Jira para gestión ágil. Desarrollo con React, Python, Flask, MySQL. Participación activa en todas las fases: desarrollo.",
      color: "#a855f7", // Tailwind purple-500
    },
    {
      title: "Data Entry",
      company: "La Ley S.A.",
      period: "2008-2013",
      description:
        "Gestión y procesamiento de textos legales y administrativos, asegurando precisión y calidad en la información. Manejo de escaneo, lectura, corrección y digitalización de documentos, aplicando atención al detalle y manejo de grandes volúmenes de información. Coordinación con diferentes áreas para garantizar la correcta circulación y actualización de documentos. Adaptación rápida a tecnologías propias y a flujos de trabajo exigentes en un entorno legal.",
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
        {/* Subrayado con gradiente, similar al Header */}
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

          {/* Línea de tiempo de Educación */}
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
                {/* Marcador de la línea de tiempo */}
                <div
                  className="absolute left-[-0.65rem] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 z-10"
                  style={{ backgroundColor: item.color }}
                />
                {/* Contenido del ítem de la línea de tiempo */}
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

          {/* Línea de tiempo de Experiencia Profesional */}
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
                {/* Marcador de la línea de tiempo */}
                <div
                  className="absolute left-[-0.65rem] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 z-10"
                  style={{ backgroundColor: item.color }}
                />
                {/* Contenido del ítem de la línea de tiempo */}
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