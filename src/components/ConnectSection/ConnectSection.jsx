import { Linkedin, Github } from "lucide-react";

const profiles = [
  {
    name: "LinkedIn",
    description:
      "Mi LinkedIn. Voy a empezar a compartir cosas acá :)",
    icon: <Linkedin className="w-8 h-8 text-violet-400" />,
    color: "from-violet-600/20 to-fuchsia-500/20",
    url: "https://www.linkedin.com/in/facundorabago/",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "GitHub",
    description:
      "Mis repositorios con algunas de las cosas que aprendí durante todo este tiempo.",
    icon: <Github className="w-8 h-8 text-gray-200" />,
    color: "from-purple-500/20 to-pink-500/20",
    url: "https://github.com/rodnucaf",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function ConnectSection() {
  return (
    <section
      id="ConnectSection"
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-slate-950 to-slate-900 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-b from-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
            Mis cositas
          </span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Conectá conmigo en mis redes!
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`relative group bg-gray-900/40 backdrop-blur-md border border-gray-800/50 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-violet-600/50 animate-in slide-in-from-top duration-700 ease-out`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-slate-800/50 rounded-full ring-1 ring-violet-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                {profile.icon}
              </div>
              <h3 className="text-3xl font-bold">{profile.name}</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {profile.description}
              </p>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 bg-gradient-to-r ${profile.gradient} hover:scale-105 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]`}
              >
                Ver perfil
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
