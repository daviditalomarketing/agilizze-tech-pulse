
const whatsappUrl = "https://api.whatsapp.com/message/YFSH2PU2K5YZA1?autoload=1&app_absent=0";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-agilizze-navy to-[#364087] text-white flex items-center min-h-[520px] w-full pb-12 pt-16">
      <div className="container max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Acelere sua empresa com <span className="text-agilizze-lime">automação inteligente</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-xl">
            Otimizamos <strong>atendimentos</strong>, integramos sistemas e criamos bots sob medida, elevando a performance do seu negócio com <strong>IA</strong> e tecnologia.
          </p>
          <div className="flex gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agilizze-lime text-agilizze-navy font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition anim-cta"
            >
              Fale com um especialista
            </a>
            <a href="#servicos" className="text-agilizze-lime font-semibold underline underline-offset-2 hover:text-white transition">
              Conheça nossos serviços
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
            alt="Automação Inteligente"
            className="rounded-xl shadow-2xl w-[400px] h-[340px] object-cover border-4 border-white/20"
          />
        </div>
      </div>
    </section>
  );
}
