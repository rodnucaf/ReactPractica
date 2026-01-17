import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-75"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl text-center animate-in slide-in-from-top duration-700 ease-out">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Finalmente me amigué con el frontend usando{" "}
          <span className="text-purple-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            React + Tailwind
          </span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed">
          Texto lindo y bonito con el que busco llenar espacio. Ahora voy a
          poder darle vida a mi desarrollo backend :')
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white 
              bg-gradient-to-r from-violet-600 to-fuchsia-600 
             hover:from-violet-500 hover:to-fuchsia-500 
              transition-all duration-300 
              shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] 
              backdrop-blur-sm"
          >
            Empezar ahora <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-500 hover:text-blue-400 rounded-xl font-medium transition-all duration-300"
          >
            Ir más abajo
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
