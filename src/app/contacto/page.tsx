"use client";
import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24 bg-background text-foreground transition-colors duration-500">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--background)] to-[var(--background)]"></div>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400  bg-clip-text ">
          {t("contact.title")}
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FORMULARIO */}
        <div className="p-10 rounded-2xl border border-muted bg-[color-mix(in_srgb,var(--background)_95%,var(--foreground)_5%)] backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3">{t("contact.formTitle")}</h2>
          <p className="text-muted mb-8">{t("contact.formSubtitle")}</p>

          <form
            action="https://formspree.io/f/xblzzjoz"
            method="POST"
            className="space-y-5"
          >
            {[ 
              { id: "name", label: t("contact.name"), type: "text", placeholder: t("contact.namePlaceholder") },
              { id: "email", label: t("contact.email"), type: "email", placeholder: t("contact.emailPlaceholder") }
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-sm font-medium mb-1 text-foreground">
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
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                required
                className="w-full rounded-lg border border-muted bg-[color-mix(in_srgb,var(--background)_90%,var(--foreground)_10%)] px-4 py-3 focus:ring-2 focus:ring-accent outline-none resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-xl transition-all duration-300"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>

        {/* INFORMACIÓN */}
        <div className="space-y-6">
          {[
            {
              title: t("contact.directEmail"),
              content: (
                <>
                  <p className="text-muted mt-2">{t("contact.directEmailSubtitle")}</p>
                  <p className="text-lg font-semibold mt-1 text-foreground">
                    kevinsibajah@gmail.com
                  </p>
                </>
              ),
              icon: <FaEnvelope />,
            },
            {
              title: t("contact.responseTime"),
              content: <p className="text-muted mt-2">{t("contact.responseText")}</p>,
            },
            {
              title: t("contact.availability"),
              content: <p className="text-muted mt-2">{t("contact.availabilityText")}</p>,
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
