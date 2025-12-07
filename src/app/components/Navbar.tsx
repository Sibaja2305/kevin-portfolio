'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { isDark, setIsDark } = useTheme();

  const links = [
    { href: "/", label: t("navbar.home") },
    { href: "/repositorios", label: t("navbar.projects") },
    { href: "/contacto", label: t("navbar.contact") },
  ];

  return (
    <nav className="bg-background border-b border-theme shadow-sm transition">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 px-4 gap-3 sm:gap-0">

        <Link
          href="/"
          className="font-semibold text-lg text-foreground text-center sm:text-left"
        >
          Kevin Sibaja Granados
        </Link>

        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${
                pathname === link.href
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-accent"
              } transition`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs border border-theme px-3 py-1 rounded-md hover:bg-accent hover:text-white transition"
            title="Cambiar idioma"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md border border-theme hover:bg-accent hover:text-white transition"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
