"use client";
import { FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24 bg-background text-foreground transition-colors duration-500">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--background)] to-[var(--background)]"></div>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400  bg-clip-text ">
          Hablemos
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes
          en contactarme — respondo todos los mensajes lo antes posible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-10 rounded-2xl border border-muted bg-[color-mix(in_srgb,var(--background)_95%,var(--foreground)_5%)] backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3">Envíame un mensaje</h2>
          <p className="text-muted mb-8">
            Completa el formulario y te responderé lo antes posible.
          </p>

          <form
            action="https://formspree.io/f/xblzzjoz"
            method="POST"
            className="space-y-5"
          >
            {[
              {
                id: "name",
                label: "Nombre",
                type: "text",
                placeholder: "Tu nombre",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "tu@email.com",
              },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-sm font-medium mb-1 text-foreground"
                >
                  {f.label}
                </label>
                <input
                  type={f.type}
                  id={f.id}
                  name={f.id}
                  placeholder={f.placeholder}
                  required
                  className="w-full rounded-lg border border-muted bg-[color-mix(in_srgb,var(--background)_90%,var(--foreground)_10%)] px-4 py-3 focus:ring-2 focus:ring-accent outline-none transition"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                required
                className="w-full rounded-lg border border-muted bg-[color-mix(in_srgb,var(--background)_90%,var(--foreground)_10%)] px-4 py-3 focus:ring-2 focus:ring-accent outline-none resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-xl transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Email Directo",
              content: (
                <>
                  <p className="text-muted mt-2">
                    También puedes escribirme directamente a:
                  </p>
                  <p className="text-lg font-semibold mt-1 text-foreground">
                    kevinsibajah@gmail.com
                  </p>
                </>
              ),
              icon: <FaEnvelope />,
            },
            {
              title: "Tiempo de Respuesta",
              content: (
                <p className="text-muted mt-2">
                  Normalmente respondo en menos de 24 horas. Si no recibes
                  respuesta, revisa tu carpeta de spam o intenta nuevamente.
                </p>
              ),
            },
            {
              title: "Disponibilidad",
              content: (
                <p className="text-muted mt-2">
                  Actualmente estoy disponible para proyectos freelance,
                  colaboraciones o posiciones remotas.
                </p>
              ),
            },
          ].map(({ title, content, icon }, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-muted bg-[color-mix(in_srgb,var(--background)_95%,var(--foreground)_5%)] backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                {icon && <span className="text-accent">{icon}</span>} {title}
              </h3>
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
