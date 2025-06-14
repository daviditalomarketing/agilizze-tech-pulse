
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const whatsappUrl = "https://api.whatsapp.com/message/YFSH2PU2K5YZA1?autoload=1&app_absent=0";

export function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviando, setEnviando] = useState(false);

  function onInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast({ title: "Por favor, preencha todos os campos.", variant: "destructive" });
      return;
    }
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setForm({ nome: "", email: "", mensagem: "" });
      toast({
        title: "Mensagem enviada!",
        description: "Em breve um especialista entrará em contato com você.",
      });
    }, 1500);
  }

  return (
    <section id="contato" className="py-20 bg-agilizze-white">
      <div className="container max-w-3xl mx-auto px-5">
        <div className="bg-white rounded-xl shadow-md border p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-agilizze-navy mb-6">Contato rápido</h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-agilizze-lime transition font-medium"
                type="text"
                name="nome"
                placeholder="Seu Nome"
                value={form.nome}
                onChange={onInput}
                disabled={enviando}
              />
            </div>
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-agilizze-lime transition font-medium"
                type="email"
                name="email"
                placeholder="Seu E-mail"
                value={form.email}
                onChange={onInput}
                disabled={enviando}
              />
            </div>
            <div>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-agilizze-lime transition font-medium"
                name="mensagem"
                placeholder="Como podemos ajudar?"
                rows={4}
                value={form.mensagem}
                onChange={onInput}
                disabled={enviando}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                type="submit"
                disabled={enviando}
                className="flex-1 bg-agilizze-navy text-white font-bold px-6 py-3 rounded-full hover:bg-agilizze-lime hover:text-agilizze-navy transition duration-150 hover:scale-105"
              >
                {enviando ? "Enviando..." : "Enviar mensagem"}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-agilizze-lime text-agilizze-navy font-bold px-6 py-3 rounded-full hover:scale-105 transition whitespace-nowrap"
              >
                <MessageSquare size={22} />
                WhatsApp direto
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
