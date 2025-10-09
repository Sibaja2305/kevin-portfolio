import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t mt-16">
      <h3 className="text-xl font-semibold mb-4">Encuéntrame en</h3>
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://github.com/Sibaja2305" target="_blank"><FaGithub size={24} /></a>
        <a href="https://linkedin.com/in/kevin-sibaja-granados-7522a223a" target="_blank"><FaLinkedin size={24} /></a>
        <a href="mailto:kevinsibajah@gmail.com"><FaEnvelope size={24} /></a>
      </div>
      <p className="text-gray-500 text-sm">© 2025 Kevin Sibaja. Todos los derechos reservados.</p>
    </footer>
  );
}