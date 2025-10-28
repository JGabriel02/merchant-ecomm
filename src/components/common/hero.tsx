import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] flex items-center justify-center text-center">
      <Image
        src="/images/RE4_Merchant.jpg"
        alt="O Mercador"
        fill
        priority
        className="object-cover brightness-[0.35]"
      />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-6">
          “What’re ya buyin’?”
        </h1>
        <p className="text-zinc-200 text-lg mb-8">
          Explore o arsenal mais poderoso de Resident Evil — diretamente das mãos do lendário Mercador.
        </p>
        <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold">
          Ver Armas
        </Button>
      </div>
    </section>
  );
}
