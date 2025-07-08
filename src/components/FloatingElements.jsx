import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="floating-elements-container">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`floating-element-global element-${i + 1}`}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            background: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
            borderRadius: "50%",
            opacity: 0.1,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  )
}
