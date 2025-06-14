
// Landing page Agilizze

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Servicos } from "@/components/Servicos";
import { Beneficios } from "@/components/Beneficios";
import { Depoimentos } from "@/components/Depoimentos";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-agilizze-bg">
      <Header />
      <main className="">
        <Hero />
        <Servicos />
        <Beneficios />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
