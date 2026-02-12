# My Portfolio

A modern, responsive portfolio website built with React and Vite, featuring 3D interactions and smooth animations to showcase my projects and experience.

## 🚀 Features

- **Interactive 3D Elements**: Powered by Three.js and React Three Fiber.
- **Smooth Animations**: Utilizing GSAP for seamless transitions and scroll effects.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS.
- **Modern Tech Stack**: Fast and efficient development with Vite.
- **Contact Form**: Integrated with EmailJS for direct communication.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your EmailJS configuration:
    ```env
    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🚀 Deployment

### Netlify

This project is configured for easy deployment on Netlify.

1.  **Connect to Netlify:**
    - Log in to [Netlify](https://app.netlify.com/).
    - Click **"Add new site"** -> **"Import from Git"**.
    - Select your repository.

2.  **Build Settings:**
    Netlify should automatically detect the settings from `netlify.toml`:
    - **Build command:** `npm run build`
    - **Publish directory:** `dist`

3.  **Environment Variables (Crucial):**
    Go to **Site configuration > Environment variables** and add the following:
    - `VITE_APP_EMAILJS_SERVICE_ID`
    - `VITE_APP_EMAILJS_TEMPLATE_ID`
    - `VITE_APP_EMAILJS_PUBLIC_KEY`

4.  **Deploy:**
    Click **"Deploy site"**. Your portfolio will be live in minutes!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
