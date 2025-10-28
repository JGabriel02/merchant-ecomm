"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Arma } from "@/data/armas";

interface ArmaCardProps {
  arma: Arma;
}

export function ArmaCard({ arma }: ArmaCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-900 border-zinc-800 text-zinc-100 hover:scale-[1.02] transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{arma.nome}</CardTitle>
        <p className="text-sm text-zinc-400">{arma.categoria}</p>
      </CardHeader>
      <CardContent>
        <Image
          src={arma.imagem}
          alt={arma.nome}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4 text-sm">
          <p><strong>Power:</strong> {arma.power}</p>
          <p><strong>Ammo:</strong> {arma.ammo}</p>
          <p><strong>Reload:</strong> {arma.reload}</p>
          <p><strong>Firerate:</strong> {arma.firerate}</p>
          <p><strong>Precision:</strong> {arma.precision}</p>
        </div>
      </CardContent>
    </Card>
  );
}
