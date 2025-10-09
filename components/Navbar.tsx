"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/repositorios", label: "Repositorios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="font-semibold text-lg">
          Kevin Sibaja Granados
        </Link>
        <div className="space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
