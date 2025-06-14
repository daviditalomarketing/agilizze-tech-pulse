
import { MessageSquare, Phone, ArrowRight, Instagram, Whatsapp } from "lucide-react";

const listaServicos = [
  {
    titulo: "Atendimento com IA",
    desc: "Bots inteligentes que entendem, resolvem e encantam clientes em múltiplos canais.",
    icon: MessageSquare,
  },
  {
    titulo: "Integrações de Sistemas",
    desc: "Conecte WhatsApp, Google Agenda, CRMs e plataformas em fluxos automatizados.",
    icon: ArrowRight,
  },
  {
    titulo: "Notificações Automáticas",
    desc: "Envio de lembretes, confirmações e avisos em tempo real para clientes e equipes.",
    icon: Phone,
  },
  {
    titulo: "Bots Personalizados",
    desc: "Desenvolvimento customizado de bots conforme o processo do seu negócio.",
    icon: Instagram,
  },
  {
    titulo: "Automação de Processos",
    desc: "Fluxos automatizados que reduzem falhas e aumentam sua produtividade.",
    icon: Whatsapp,
  },
];

export function Servicos() {
  return (
    <section className="py-24 bg-agilizze-white" id="servicos">
      <div className="container max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-agilizze-navy mb-12 text-center">Principais Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listaServicos.map(({ titulo, desc, icon: Icon }, i) => (
            <div
              key={titulo}
              className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-4">
                <Icon size={36} className="text-agilizze-lime" />
              </div>
              <h3 className="text-lg font-semibold text-agilizze-navy mb-2">{titulo}</h3>
              <p className="text-gray-700 text-[1rem]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
