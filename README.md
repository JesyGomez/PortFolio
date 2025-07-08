# Portfolio Personal de Jesica Gomez

[![Netlify Status](https://api.netlify.com/api/v1/badges/19034426-48e1-412e-b9ae-37f5b9215283/deploy-status)](https://jesicagomezdesarrolladora.netlify.app)

## 🚀 Vista Previa del Proyecto

Este es mi portfolio personal, una plataforma para mostrar mis habilidades, proyectos y experiencia en el desarrollo Full Stack. Diseñado para ser moderno, responsivo y fácil de navegar, este sitio es una ventana a mi trabajo y una forma sencilla de contactarme.

**Puedes ver la demo en vivo aquí:** [https://jesicagomezdesarrolladora.netlify.app](https://[jesicagomezdesarrolladora].netlify.app)


## ✨ Características Principales

* **Diseño Responsivo:** Adaptable a cualquier tamaño de pantalla, desde móviles pequeños hasta monitores grandes.
* **Modo Oscuro/Claro:** Permite a los usuarios cambiar entre temas de interfaz para una experiencia visual personalizada.
* **Secciones Dinámicas:** Navegación suave entre las secciones Inicio, Sobre Mí, Habilidades, Experiencia, Portfolio y Contacto.
* **Formulario de Contacto Funcional:** Integrado con Formspree para un envío de mensajes confiable directamente desde el sitio.
* **Animaciones Fluidas:** Utiliza Framer Motion para transiciones y animaciones que mejoran la experiencia de usuario.
* **Cursor Personalizado y Elementos Flotantes:** Detalles interactivos que añaden un toque único a la interfaz.

## 🛠️ Tecnologías Utilizadas

* **Frontend:**
    * [React](https://react.dev/) - Biblioteca de JavaScript para construir interfaces de usuario.
    * [Vite](https://vitejs.dev/) - Herramienta de construcción rápida para proyectos web modernos.
    * [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first para estilos rápidos y responsivos.
    * [Framer Motion](https://www.framer.com/motion/) - Librería de React para animaciones.
* **Backend del Formulario:**
    * [Formspree](https://formspree.io/) - Servicio para manejar envíos de formularios sin código de servidor.
* **Despliegue (Deployment):**
    * [Netlify](https://www.netlify.com/) - Plataforma de despliegue continuo y hosting.

## 🚀 Configuración y Ejecución Local

Sigue estos pasos para tener una copia del proyecto ejecutándose en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

* [Node.js](https://nodejs.org/) (versión LTS recomendada)
* [npm](https://www.npmjs.com/) (viene con Node.js) o [Yarn](https://yarnpkg.com/)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/JesyGomez/PortFolio.git](https://github.com/JesyGomez/PortFolio.git)
    cd tu-repositorio
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo llamado `.env` en la raíz de tu proyecto.
    Dentro de `.env`, añade tu ID de formulario de Formspree:
    ```
    VITE_FORMSPREE_FORM_ID=tu_id_de_formulario_formspree
    ```
    *(`tu_id_de_formulario_formspree` es solo el ID único, **sin** el `https://formspree.io/f/` que lo precede).*

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    ```
    El proyecto debería abrirse en tu navegador en `http://localhost:5173`.

## 🌐 Despliegue en Netlify

Este proyecto está configurado para un despliegue sencillo en Netlify.

1.  **Conexión a GitHub (Recomendado):**
    La forma más sencilla es conectar tu repositorio de GitHub directamente a Netlify. Netlify detectará automáticamente que es un proyecto de Vite/React y configurará el comando de construcción (`npm run build`) y el directorio de publicación (`dist/`).

2.  **Variables de Entorno en Netlify:**
    Después de conectar tu repositorio (o si subes manualmente), ve a la configuración de tu sitio en Netlify:
    `Site settings` > `Build & deploy` > `Environment`.
    Añade una nueva variable:
    * **Key:** `VITE_FORMSPREE_FORM_ID`
    * **Value:** `tu_id_de_formulario_formspree` (solo el ID, sin el prefijo URL).

3.  **Despliegue Manual (Alternativa):**
    También puedes construir el proyecto localmente (`npm run build`), y luego arrastrar y soltar la carpeta `dist` resultante en el panel de Netlify. Si usas este método, asegúrate igualmente de configurar la variable de entorno `VITE_FORMSPREE_FORM_ID` en la configuración del sitio en Netlify.

## ✉️ Contacto

Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en contactarme a través del formulario en este portfolio o directamente en:

* **Correo Electrónico:** [dev.jesicagomez@gmail.com](mailto:dev.jesicagomez@gmail.com)
* **LinkedIn:** [linkedin.com/in/jesygomez](https://www.linkedin.com/in/jesygomez)
* **GitHub:** [github.com/JesyGomez](https://github.com/JesyGomez)