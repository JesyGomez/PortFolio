import { motion } from "framer-motion";
import { useState } from "react";

export default function Header({ currentSection, sections }) { // Se quitaron las anotaciones de tipo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => { // Se quitaron las anotaciones de tipo
    console.log(`Intentando desplazar a la sección: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log("Elemento encontrado:", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Inicio", icon: "🏠" },
    { id: "about", label: "Sobre Mí", icon: "👋" },
    { id: "skills", label: "Habilidades", icon: "⚡" },
    { id: "experience", label: "Experiencia", icon: "💼" },
    { id: "portfolio", label: "Portfolio", icon: "🚀" },
    { id: "contact", label: "Contacto", icon: "📧" },
  ];

  return (
    <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
      <div className="header-container">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <span className="logo-text">JG</span>
        </motion.div>

        <nav className="nav-desktop">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${currentSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${currentSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}