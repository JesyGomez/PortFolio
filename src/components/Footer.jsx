import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <span className="logo-text">JG</span>
          </div>

          <p className="footer-text">Desarrollado con ❤️ usando React</p>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/jesygomez" className="footer-social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/JesyGomez" className="footer-social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:dev.jesicagomez@gmail.com" className="footer-social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <p className="footer-copyright">© {currentYear} Jesica Gomez. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
