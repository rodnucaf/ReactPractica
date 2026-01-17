export default function GatitosCards() {
  const features = [
    {
      title: "Gatito violeta",
      description:
        "Literlamente busqué 'gatito violeta' en mi buscador de preferencia para que sea coherente con la paleta de colores que elegí. Esta foto es de https://unsplash.com/es/@shahedd",
      image: "/images/gato-violeta.png",
      imagePosition: "left",
    },
    {
      title: "Otro gatito violeta",
      description:
        "Encontré otro en la misma página del que saqué el primero. Esta foto es de https://unsplash.com/es/@cruik",
      image: "/images/gato-violeta-dos.png",
      imagePosition: "right",
    },
    {
      title: "Este se parece a mi gata Azul",
      description:
        "Azul es mi gata, la adopté en el 2013. Una tipaza. Esta foto es de https://unsplash.com/es/@lisoglazka",
      image: "/images/se-parece-a-mi-gata.jpg",
      imagePosition: "left",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      {features.map((feature, key) => (
        <div
          key={key}
          className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
            feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 w-full relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl sm:rounded-2xl overflow-hidden group-hover:border-blue-600/50 
                transition-all duration-300 shadow-lg shadow-black/40"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
