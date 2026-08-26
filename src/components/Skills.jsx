import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("technical")

  const skillsData = {
    technical: [
      { name: "Java", icon: "☕", color: "#0ea5e9" },
      { name: "Spring Boot", icon: "🍃", color: "#06b6d4" },
      { name: "Spring Security", icon: "🔒", color: "#6db33f" }, // Nuevo
      { name: "JWT", icon: "🔑", color: "#b47e14" }, // Nuevo
      { name: "React", icon: "⚛️", color: "#3b82f6" },
      { name: "Angular", icon: "🅰️", color: "#dc2626" },
      { name: "AG Grid", icon: "📊", color: "#1a73e8" },
      { name: "JavaScript", icon: "🟨", color: "#0891b2" },
      { name: "HTML", icon: "📄", color: "#e34c26" }, // Nuevo
      { name: "CSS", icon: "🎨", color: "#264de4" }, // Nuevo
      { name: "Python", icon: "🐍", color: "#1e40af" },
      { name: "Flask", icon: "🧪", color: "#1f2937" },
      { name: "TypeScript", icon: "🔷", color: "#67e8f9" },
      { name: "MySQL", icon: "🗄️", color: "#0284c7" },
      { name: "PostgreSQL", icon: "🐘", color: "#0369a1" },
      { name: "NoSql", icon: "💾", color: "#475569" }, // Nuevo
      { name: "Bootstrap", icon: "🇧", color: "#7952b3" },
      { name: "Tailwind", icon: "💨", color: "#06b6d4" },
      { name: "SweetAlert", icon: "🔔", color: "#22c55e" },
      { name: "Toasty", icon: "🍞", color: "#f97316" },
      { name: "IA", icon: "🤖", color: "#8b5cf6" },
      { name: "APIs REST", icon: "🔗", color: "#0284c7" },
    ],
    tools: [
      { name: "Git", icon: "📝", color: "#0ea5e9" },
      { name: "GitHub", icon: "🐙", color: "#4a5568" },
      { name: "VS Code", icon: "💻", color: "#3b82f6" },
      { name: "IntelliJ IDEA", icon: "💡", color: "#3b82f6" }, // Nuevo (color ajustado)
      { name: "Netbeans", icon: "🟦", color: "#0284c7" }, // Nuevo (color ajustado)
      { name: "Postman", icon: "📮", color: "#0891b2" },
      { name: "Insomnia", icon: "🌙", color: "#8b5cf6" }, // Nuevo (color ajustado)
      { name: "Swagger", icon: "📜", color: "#85ea2d" }, // Nuevo
      { name: "Firebase", icon: "🔥", color: "#1e40af" },
      { name: "Vercel", icon: "▲", color: "#67e8f9" },
      { name: "Netlify", icon: "⚗️", color: "#00c7b7" },
      { name: "PythonAnywhere", icon: "☁️", color: "#0ea5e9" }, // Nuevo (color ajustado)
      { name: "Jira", icon: "📊", color: "#2563eb" },
      { name: "Trello", icon: "🗂️", color: "#3b82f6" },
      { name: "MySQL Workbench", icon: "🗜️", color: "#0284c7" }, // Nuevo
      { name: "HacknPlan", icon: "📋", color: "#22c55e" },
    ],
    soft: [
      { name: "Liderazgo", icon: "👑", description: "Capacidad para guiar equipos" },
      { name: "Comunicación", icon: "💬", description: "Comunicación efectiva" },
      { name: "Resolución de Problemas", icon: "🧩", description: "Análisis y solución" },
      { name: "Trabajo en Equipo", icon: "🤝", description: "Colaboración efectiva" },
      { name: "Adaptabilidad", icon: "🔄", description: "Flexibilidad al cambio" },
      { name: "Creatividad", icon: "🎨", description: "Pensamiento innovador" },
    ],
  };

  return (
    <div id="skills" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Sección de Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Mis <span className="text-purple-600 dark:text-purple-400">Habilidades</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </motion.div>

      {/* Contenido principal de Habilidades */}
      <div className="skills-content">
        {/* Navegación de Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeCategory === "technical"
                ? "bg-purple-600 text-white shadow-lg dark:bg-purple-500 dark:text-gray-100"
                : "bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              }`}
            onClick={() => setActiveCategory("technical")}
          >
            <span className="text-2xl">⚡</span>
            Técnicas
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeCategory === "tools"
                ? "bg-purple-600 text-white shadow-lg dark:bg-purple-500 dark:text-gray-100"
                : "bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              }`}
            onClick={() => setActiveCategory("tools")}
          >
            <span className="text-2xl">🛠️</span>
            Herramientas
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeCategory === "soft"
                ? "bg-purple-600 text-white shadow-lg dark:bg-purple-500 dark:text-gray-100"
                : "bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              }`}
            onClick={() => setActiveCategory("soft")}
          >
            <span className="text-2xl">🧠</span>
            Blandas
          </button>
        </div>

        {/* Grid de Habilidades */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center"
          key={activeCategory} // Key para animar la transición de la cuadrícula
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeCategory === "soft"
            ? // Diseño para habilidades blandas
            skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl transition-transform duration-200 text-center w-full max-w-xs hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-lg bg-purple-100 dark:bg-purple-900/50">
                    <span className="text-5xl">{skill.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))
            : // Diseño para habilidades técnicas y herramientas
            skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl transition-transform duration-200 w-full max-w-xs text-center hover:scale-105"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Burbuja del icono */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: skill.color }}
                  >
                    <span className="text-4xl">{skill.icon}</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                </motion.div>
              ))}
        </motion.div>
      </div>

      {/* Sección "Actualmente Aprendiendo" */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🚀 Actualmente Aprendiendo</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-300">Spring Security</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-300">Microservicios</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-300">AWS</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-300">Docker</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}