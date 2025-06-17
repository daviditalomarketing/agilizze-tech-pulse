
const depoimentos = [
  {
    nome: "Clínica Viver Bem",
    texto: "Depois da automação com a Agilizze, conseguimos eliminar completamente os atendimentos manuais. A economia com equipe e a agilidade no retorno aos pacientes foram absurdas.",
    cargo: "Coordenadora Administrativa",
  },
  {
    nome: "Consultório Dr. Henrique",
    texto: "A atendente virtual resolveu 90% das perguntas frequentes dos pacientes. Hoje, minha secretária foca só nos casos que realmente exigem atenção humana.",
    cargo: "Dr. Henrique Lima, Odontologista",
  },
  {
    nome: "Clínica Essencial Saúde",
    texto: "Economizamos mais de R$3.000 por mês com automações. Fora a redução de faltas e o aumento na satisfação dos pacientes. A Agilizze transformou nossa operação.",
    cargo: "Diretora Executiva",
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
