"use client";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
  SiDotnet,
  SiMysql,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { useLanguage } from "./context/LanguageContext";
export default function Home() {
  const { t } = useLanguage();
  const skills = [
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={36} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={36} /> },
    { name: "React", icon: <SiReact color="#61DAFB" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000" size={36} /> },
    { name: "Node.js", icon: <SiNodedotjs color="#3C873A" size={36} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={36} /> },
    { name: "Git", icon: <SiGit color="#F1502F" size={36} /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={36} /> },
    {
      name: "ASP.NET Web API Core",
      icon: <SiDotnet color="#512BD4" size={36} />,
    },
    { name: "SQL Server", icon: <DiMsqlServer color="#A91D22" size={36} /> },
    { name: "C#", icon: <TbBrandCSharp color="#682876" size={36} /> },
    {
      name: "Visual Studio",
      icon: <BiLogoVisualStudio color="#5C2D91" size={36} />,
    },
    {
      name: "Visual Studio Code",
      icon: <BiLogoVisualStudio color="#007ACC" size={36} />,
    },
    { name: "Java", icon: <FaJava color="#E76F00" size={36} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={36} /> },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 px-6 py-20">
      <section className="max-w-5xl mx-auto text-center">
        <p className="uppercase text-sm tracking-[0.25em] text-muted">
          {t("home.title")}
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold mt-3 leading-tight">
          {t("home.greeting")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)]">
            Kevin Sibaja
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted max-w-3xl mx-auto leading-relaxed">
          {t("home.aboutMe")}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/contacto"
            className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-80 hover:scale-[1.02] transition-all duration-200"
          >
            {t("home.contactMe")}
          </a>
          <a
            href="/repositorios"
            className="px-6 py-3 border border-foreground text-foreground rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-200"
          >
            {t("home.viewProjects")}
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center">
        <p className="mt-6 text-lg text-muted max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          {t("home.welcomeMessage")}
        </p>
      </section>

      <section className="max-w-6xl mx-auto mt-28">
        <h2 className="text-4xl font-bold mb-10 text-center">
          {t("home.viewSkill")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl border border-muted bg-[var(--background)] hover:bg-[var(--foreground)] hover:text-[var(--background)] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-background transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
