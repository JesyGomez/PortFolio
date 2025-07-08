import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portal de Mascotas (Polo IT)",
      longDescription:
        "Desarrollo de una aplicación web para la gestión y adopción de mascotas, parte del proyecto Acelerador Polo IT.",
      image: "image/portalMascotas.png?height=300&width=400",
      category: "fullstack",
      technologies: [
        "React",
        "Python",
        "Flask",
        "MySQL",
        "GitHub",
        "Bootstrap",
        "SweetAlert2",
        "Figma",
        "Jira",
      ],
      github: "https://github.com/JesyGomez/PortalMascotas-PoloIT.git",
      demo: "https://drive.google.com/file/d/1gKS4ahkugXCuUkQXf53qgX7JbSIUzC8G/view?usp=drive_link",
      featured: true,
      color: "#0ea5e9",
    },
    {
      id: 2,
      title: "E-commerce Tienda Mascotas",
      longDescription:
        "Implementación de una tienda en línea completa para productos de mascotas, desde el frontend hasta la gestión de datos.",
      image: "image/TiendaMascota.png?height=300&width=400",
      category: "frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "SweetAlert2",
        "Toastify",
        "Netlify",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/JesyGomez/ecommerce-mascotas.git",
      demo: "https://ecommerce-patitas.netlify.app",
      featured: true,
      color: "#0ea5e9",
    },
    {
      id: 3,
      title: "AG's Nails",
      longDescription:
        "Desarrollo de una página web para un negocio de estética de uñas.",
      image: "image/AgNails.png?height=300&width=400",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Netlify"],
      github: "https://github.com/JesyGomez/ManicuraAGNails.git",
      demo: "https://jesygomez.github.io/ManicuraAGNails/",
      featured: true,
      color: "#0ea5e9",
    },

    {
      id: 4,
      title: "Sistema de Compras Empresarial",
      description:
        "Aplicación completa para gestión de compras con Java y Spring Boot",
      longDescription:
        "Sistema robusto desarrollado en Java que permite a las empresas gestionar todo su proceso de compras, desde la solicitud hasta la facturación. Incluye autenticación, roles de usuario, reportes y dashboard administrativo.",
      image: "image/sistema.compras.jpg?height=300&width=400",
      category: "backend",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/JesyGomez/Compras_grupo64",
      demo: null,
      featured: true,
      color: "#0ea5e9",
    },
    {
      id: 5,
      title: "API Clínica Médica",
      description: "API REST segura para gestión de clínicas con JWT",
      longDescription:
        "API REST desarrollada con Spring Boot que maneja la gestión completa de una clínica médica. Incluye autenticación JWT, gestión de pacientes, médicos, citas y historiales médicos con alta seguridad.",
      image: "image/FotoClinica.jpg?height=300&width=400",
      category: "backend",
      technologies: [
        "Java 21",
        "Spring Boot",
        "JWT",
        "MySQL",
        "Spring Security",
      ],
      github: "https://github.com/JesyGomez/ApiClinica.git",
      demo: "https://github.com/JesyGomez/ApiClinica.git",
      featured: true,
      color: "#06b6d4",
    },
    {
      id: 6,
      title: "E-commerce Moderno",
      description: "Tienda online con Angular y diseño responsive",
      longDescription:
        "Aplicación de comercio electrónico moderna desarrollada con Angular 17 y Tailwind CSS. Incluye carrito de compras, filtros avanzados, sistema de pagos y panel administrativo.",
      image: "image/tienda.ecommerce.jpg?height=300&width=400",
      category: "frontend",
      technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
      github: "https://github.com/JesyGomez/e.commerce_Angular17",
      demo: "https://store-end7pwabo-jesica-gs-projects.vercel.app/",
      featured: true,
      color: "#3b82f6",
    },
    {
      id: 7,
      title: "Pastelería TechTalent",
      description: "Sitio web elegante para pastelería con reservas online",
      longDescription:
        "Sitio web responsive para una pastelería que incluye catálogo de productos, sistema de reservas, galería de imágenes y formulario de contacto. Diseño elegante y moderno.",
      image: "image/PasteriaTech.png?height=300&width=400",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/JesyGomez/Pasteleria-TalentoTech.git",
      demo: "https://jesygomez.github.io/Pasteleria-TalentoTech/",
      featured: false,
      color: "#0891b2",
    },
    {
      id: 8,
      title: "Adopción de Mascotas",
      description: "Plataforma colaborativa para adopción de mascotas",
      longDescription:
        "Proyecto colaborativo desarrollado con Flask y Python para facilitar la adopción de mascotas. Incluye perfiles de mascotas, sistema de adopción y panel administrativo.",
      image: "image/AdopMascotas.png?height=300&width=400",
      category: "fullstack",
      technologies: ["Flask", "Python", "Bootstrap", "MySQL"],
      github: "https://github.com/SabrinaCortez/back-Adopcion-Web.git",
      demo: "https://adrianreciomdq.pythonanywhere.com/",
      featured: false,
      color: "#1e40af",
    },
    {
      id: 9,
      title: "Portfolio Internacional",
      description: "Portfolio personal en inglés con diseño minimalista",
      longDescription:
        "Portfolio personal desarrollado en inglés con un enfoque minimalista y profesional. Incluye todas mis habilidades y proyectos con un diseño limpio y moderno.",
      image: "image/logoportfolioingles.jpg?height=300&width=400",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/JesyGomez/Portfolio-in-English",
      demo: "https://jesygomez.github.io/Portfolio-in-English/",
      featured: false,
      color: "#67e8f9",
    },
  ];

  const categories = [
    { id: "all", label: "Todos", icon: "🌟" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "fullstack", label: "Full Stack", icon: "🚀" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="portfolio-container">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Mi <span className="title-accent">Portfolio</span>
        </h2>
        <div className="title-underline" />
        <p className="section-subtitle">
          Proyectos que reflejan mi pasión por crear soluciones innovadoras
        </p>
      </motion.div>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`filter-button ${
              filter === category.id ? "active" : ""
            }`}
            onClick={() => setFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="filter-icon">{category.icon}</span>
            {category.label}
          </motion.button>
        ))}
      </div>

      <motion.div className="projects-grid" layout>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-container">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="project-image"
              />
              <div
                className="project-overlay"
                style={{
                  background: `linear-gradient(135deg, ${project.color}aa, ${project.color}dd)`,
                }}
              >
                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <div
                className="project-category"
                style={{ color: project.color }}
              >
                {categories.find((cat) => cat.id === project.category)?.label}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{ borderColor: project.color }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-more">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {project.featured && (
              <div className="featured-badge">
                <i className="fas fa-star"></i>
                Destacado
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="portfolio-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/JesyGomez?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          <span>Ver más proyectos en GitHub</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="project-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-content">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="modal-image"
              />

              <div className="modal-info">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">
                  {selectedProject.longDescription}
                </p>

                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn primary"
                    >
                      <i className="fab fa-github"></i>
                      Ver Código
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn secondary"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
