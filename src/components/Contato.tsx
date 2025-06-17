
import { MessageSquare } from "lucide-react";

const whatsappUrl = "https://api.whatsapp.com/message/YFSH2PU2K5YZA1?autoload=1&app_absent=0";

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-agilizze-white">
      <div className="container max-w-4xl mx-auto px-5 text-center">
        <div className="bg-white rounded-xl shadow-md border p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agilizze-navy mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Converse com um especialista da Agilizze e descubra como nossa automação inteligente pode revolucionar sua empresa, economizar recursos e aumentar a satisfação dos seus clientes.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-agilizze-lime text-agilizze-navy font-bold px-8 py-4 rounded-full text-xl hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageSquare size={28} />
            Falar com especialista agora
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Resposta rápida garantida • Consultoria gratuita
          </p>
        </div>
      </div>
    </section>
  );
}
