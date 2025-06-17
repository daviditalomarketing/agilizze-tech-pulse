
import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-agilizze-navy text-white py-8">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="font-extrabold text-agilizze-lime text-lg">Agilizze Tech</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/agilizze.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-agilizze-lime transition">
            <Instagram size={19} aria-label="Instagram" />
            @agilizze.tech
          </a>
          <span className="flex items-center gap-1">
            <Phone size={18} />
            (62) 99181-9722
          </span>
        </div>
        <span className="text-xs text-white/60 mt-2 md:mt-0">© {new Date().getFullYear()} Agilizze. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
