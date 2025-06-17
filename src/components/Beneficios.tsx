
import { ArrowRight, MessageSquare, Phone, Instagram, DollarSign } from "lucide-react";

const beneficios = [
  {
    titulo: "Economia com equipe",
    desc: "Automatize tarefas repetitivas e evite custos altos.",
    icon: Phone,
  },
  {
    titulo: "Redução de falhas humanas",
    desc: "Processos lógicos não deixam brechas para erros.",
    icon: ArrowRight,
  },
  {
    titulo: "Atendimento 24/7",
    desc: "Atendimento o tempo todo, sem salário e sem folga.",
    icon: MessageSquare,
  },
  {
    titulo: "Eficiência e Escalabilidade",
    desc: "Sua empresa preparada para crescer sem dor de cabeça.",
    icon: Instagram,
  },
  {
    titulo: "Economia financeira",
    desc: "Tenha uma atendente de IA que trabalha 10x por um \"salário\" 3x menor!",
    icon: DollarSign,
  }
];

export function Beneficios() {
  return (
    <section className="py-20 bg-agilizze-bg" id="beneficios">
      <div className="container max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-agilizze-navy mb-12 text-center">Benefícios de nossas Automações</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {beneficios.map(({ titulo, desc, icon: Icon }) => (
            <div key={titulo} className="bg-white rounded-xl p-6 text-center shadow-sm border hover:border-agilizze-lime transition hover:scale-105">
              <div className="flex justify-center mb-2">
                <Icon size={34} className="text-agilizze-navy" />
              </div>
              <div className="font-semibold text-[1.07rem] text-agilizze-navy mb-1">{titulo}</div>
              <p className="text-gray-600 text-[0.98rem]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
