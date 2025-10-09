"use client";
import { FaEnvelope } from "react-icons/fa";

export default function Contacto() {

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-4">Hablemos</h1>
      <p className="text-gray-600 mb-12 text-lg max-w-2xl">
        ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en
        contactarme. Respondo todos los mensajes.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-8 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Envíame un mensaje</h2>
          <p className="text-gray-500 mb-6">
            Completa el formulario y te responderé lo antes posible.
          </p>

          <form
            action="https://formspree.io/f/xblzzjoz" 
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full border rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                required
                className="w-full border rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                required
                className="w-full border rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-black outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

       
        <div className="space-y-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaEnvelope /> Email Directo
            </h3>
            <p className="text-gray-500 mt-2">
              También puedes escribirme directamente a:
            </p>
            <p className="text-gray-800 font-medium mt-1">kevinsibajah@gmail.com</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Tiempo de Respuesta</h3>
            <p className="text-gray-500 mt-2">
              Normalmente respondo en menos de 24 horas. Si no recibes
              respuesta, revisa tu carpeta de spam o intenta nuevamente.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Disponibilidad</h3>
            <p className="text-gray-500 mt-2">
              Actualmente estoy disponible para proyectos freelance,
              colaboraciones o posiciones remotas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
