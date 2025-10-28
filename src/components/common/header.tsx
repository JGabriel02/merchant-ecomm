"use client";

import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-yellow-500">
          O Mercador
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="#hero" className="hover:text-yellow-500 transition">Início</Link>
          <Link href="#armas" className="hover:text-yellow-500 transition">Armas</Link>
          <Link href="#about" className="hover:text-yellow-500 transition">Sobre</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10">
            <ShoppingCart size={18} />
          </Button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 space-y-3">
          <Link href="#hero" className="block hover:text-yellow-500">Início</Link>
          <Link href="#armas" className="block hover:text-yellow-500">Armas</Link>
          <Link href="#about" className="block hover:text-yellow-500">Sobre</Link>
        </nav>
      )}
    </header>
  );
}
