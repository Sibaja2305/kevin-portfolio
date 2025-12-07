'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-10 text-center border-t border-gray-300 dark:border-gray-800 mt-16 bg-transparent text-inherit transition-colors">
      <h3 className="text-xl font-semibold mb-4">{t("footer.findMeOn")} </h3>

      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/Sibaja2305"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/kevin-sibaja-granados-7522a223a"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:kevinsibajah@gmail.com"
          className="hover:opacity-80 transition"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
        © 2025 Kevin Sibaja. {t("footer.law")}.
      </p>
    </footer>
  );
}
