
import { Phone, Instagram, MessageSquare } from "lucide-react";

const whatsappUrl = "https://api.whatsapp.com/message/YFSH2PU2K5YZA1?autoload=1&app_absent=0";

export function Header() {
  return (
    <header className="w-full bg-agilizze-navy text-white shadow-md sticky top-0 z-40">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/7a1d661e-35e5-4fb1-a1e4-295b931f4f63.png" 
            alt="Agilizze Logo" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex gap-8 font-semibold text-lg">
          <a href="#servicos" className="hover:text-agilizze-lime transition">Serviços</a>
          <a href="#beneficios" className="hover:text-agilizze-lime transition">Benefícios</a>
          <a href="#depoimentos" className="hover:text-agilizze-lime transition">Clientes</a>
          <a href="#contato" className="hover:text-agilizze-lime transition">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-agilizze-lime text-agilizze-navy font-extrabold px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition hover:shadow-lg"
          >
            <MessageSquare size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
