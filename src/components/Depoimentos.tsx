
const depoimentos = [
  {
    nome: "Clínica Vida Saúde",
    texto: "A automação da Agilizze otimizou nosso atendimento — conseguimos responder pacientes 24/7 e reduzir custos. Recomendo muito!",
    cargo: "Gestora de Atendimento",
  },
  {
    nome: "Consultório Dr. Carlos",
    texto: "Os bots reduziram em 80% o tempo com agendamento e integração com WhatsApp foi perfeita!",
    cargo: "Administrador",
  },
  {
    nome: "Clínica Nova Era",
    texto: "Conseguimos eliminar erros simples e passamos a focar mais no paciente. Equipe ágil e prestativa, resultados acima do esperado.",
    cargo: "Coordenadora",
  },
];

export function Depoimentos() {
  return (
    <section className="py-20" id="depoimentos">
      <div className="container max-w-4xl mx-auto px-5">
        <h2 className="text-3xl text-agilizze-navy font-bold mb-12 text-center">Clientes satisfeitos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((dep) => (
            <div key={dep.nome} className="bg-white border border-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="font-semibold text-agilizze-navy text-lg mb-2">{dep.nome}</div>
              <div className="text-gray-700 mb-3 text-[1rem]">&quot;{dep.texto}&quot;</div>
              <div className="text-agilizze-lime font-semibold text-xs">{dep.cargo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
