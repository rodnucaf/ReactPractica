export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-400 py-10 px-6 border-t border-gray-800/50 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-950 to-slate-900 opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-3">
        <div className="w-20 h-[2px] bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mb-2" />

        <p className="text-sm sm:text-base">
          Hecho con 💜 y mucho <span className="text-fuchsia-400">React</span> +{" "}
          <span className="text-violet-400">Tailwind</span> por{" "}
          <a
            href="https://www.linkedin.com/in/facundorabago/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-400 transition-colors duration-300 font-medium"
          >
            Facundo Rábago
          </a>
          .
        </p>

        <p className="text-xs sm:text-sm text-gray-500">
           {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
  );
}
