import { PlayCircle } from "lucide-react";

export default function Video() {
  return (
    <section
      id="videito"
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-slate-950 to-slate-900 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-b from-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
            Cancioncita
          </span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Te dejo una canción que descubrí hace poco y me gustó mucho.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-800/50 rounded-2xl overflow-hidden shadow-lg shadow-fuchsia-800/20 hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-500">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Oen85HLuNss"
              title="Cancioncita"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
