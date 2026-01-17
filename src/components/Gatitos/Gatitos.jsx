import GatitosCards from "../GatitosCards/GatitosCards";

export default function Gatitos() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">A ver qué onda?</span>
            <br />
            <span className="bg-gradient-to-b from-purple-300 to-purple-600 bg-clip-text text-transparent">Mirá, mirá</span>
          </h2>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-20 lg-space-y-32">
        {GatitosCards()}
      </div>
    </section>
  );
}
