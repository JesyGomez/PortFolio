import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Transformo ideas en código"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-image-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img src="image/fotoperfil.png" alt="Jesica Gomez" className="hero-image" />
            <div className="image-glow" />
          </div>
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="title-line">Hola, soy</span>
            <span className="title-name">JESICA GOMEZ</span>
            <span className="title-subtitle">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jesygomez" className="social-link linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/JesyGomez" className="social-link github">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:julianycia.m@gmail.com" className="social-link email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/5491139219005" className="social-link whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {/* Botón para redirigir a GitHub */}
          <a
            href="https://github.com/JesyGomez" // Asegúrate de que esta URL sea tu perfil de GitHub
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Buena práctica de seguridad al usar target="_blank"
            className="cta-button primary"
          >
            <span>Ver mi GitHub</span>
            <div className="button-glow" />
          </a>
          {/* Botón para descargar el CV */}
          <a
            href="image/CVJesicaGomez.pdf" // Ruta a tu archivo PDF. Asegúrate de que CVJesicaGomez.pdf esté en la carpeta `public` de tu proyecto.
            download="CV_Jesica_Gomez.pdf" // Nombre del archivo cuando se descargue
            className="cta-button secondary"
          >
            <span>Descargar CV</span>
          </a>
        </motion.div>
      </div>

      <div className="hero-decoration">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}