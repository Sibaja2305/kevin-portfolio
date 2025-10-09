export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <p className="uppercase tracking-widest text-gray-500 text-sm">
        Desarrollador de software con enfasis en Backend
      </p>
      <h1 className="text-5xl font-bold mt-2">
        Hola, soy <span className="text-gray-300">Kevin Sibaja</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
        Estudiante de cuarto año de la carrera de informática empresarial con
        interés en el desarrollo web, preferiblemente en la parte de Backend y
        en el diseño y administración de base de datos. Soy una persona
        responsable, organizada, acompañada de fuertes habilidades en
        comunicación y trabajo en equipo. Me caracterizo por mi capacidad de
        adaptarme a diferentes entornos, tengo la habilidad de resolver
        problemas, puedo gestionar de una buena manera mi tiempo y puedo tomar
        decisiones bajo presión.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/contacto"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          Contáctame
        </a>
        <a
          href="/repositorios"
          className="border border-black px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Ver Proyectos
        </a>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <p className="text-gray-600 leading-relaxed">
          Soy estudiante del último año de Informática Empresarial en la
          Universidad de Costa Rica, apasionado por el desarrollo web con
          enfoque en backend con .NET y SQL Server, aunque también tengo
          experiencia en frontend con React y Next.js.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Actualmente realizo mi práctica profesional de último año de la
          carrera, participando en el desarrollo Backend de aplicaciones web,
          trabajando tanto en el consumo y diseño de APIs REST como tambien un
          poco de Frontend con React y Next.js.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Git",
            "PostgreSQL",
            "ASP.NET Web API Core",
            "SQL Server",
            "C#",
            "Entity Framework",
            "LINQ",
            "Visual Studio",
            "Visual Studio Code",
            "JAVA",
            "MySQL",
            
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
