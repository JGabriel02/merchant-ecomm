import { Header } from "@/components/common/header";
import { Hero } from "@/components/common/hero";
import { About } from "@/components/common/about";
import { ArmaCard } from "@/components/common/arma-cards";
import { armas } from "@/data/armas";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <section id="armas" className="bg-zinc-950 text-zinc-100 py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-500">Armas Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {armas.map((arma) => (
            <ArmaCard key={arma.nome} arma={arma} />
          ))}
        </div>
      </section>

      <About />
    </>
  );
}
