import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Camera, Share2, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modernismo Corporativo com Dinamismo
 * - Paleta: Preto (#000000), Amarelo (#FCD34D), Branco (#FFFFFF)
 * - Layout: Assimétrico com seções diagonais (clip-path)
 * - Tipografia: Poppins Bold para títulos, Inter Regular para corpo
 * - Animações: Fade-in, slide-up, hover effects sutis
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER/NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-lg">=</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">beepy</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm hover:text-yellow-400 transition">
              Serviços
            </a>
            <a href="#entregaveis" className="text-sm hover:text-yellow-400 transition">
              Entregáveis
            </a>
            <a href="#investimento" className="text-sm hover:text-yellow-400 transition">
              Investimento
            </a>
          </nav>
          <a href="https://wa.me/5583999398449" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition">
              Conversar
            </Button>
          </a>
        </div>
      </header>

      {/* HERO SECTION - Branco */}
      <section className="pt-28 pb-28 px-4 md:px-0 bg-white">
        <div className="container mt-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Marketing 360 para Seu Negócio
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transforme seu marketing em <span className="text-yellow-400">resultados reais</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Assessoria completa de marketing online e offline. Estratégia, criação, execução e otimização em um único pacote irresistível.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://wa.me/5583999398449" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition gap-2">
                    Agende uma Conversa <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="relative h-80 hidden md:block animate-slide-up">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663075048680/kCeNDL6TCzuE7sjLmMdFBD/hero-marketing-strategy-fF5sx7NXfgZrzx4pmC7thp.webp"
                alt="Marketing Strategy"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ESTRATÉGICA - Preto */}
      <section id="servicos" className="py-28 px-4 md:px-0 bg-black text-white">
        <div className="container space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frente <span className="text-yellow-400">Estratégica</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Somos seu parceiro estratégico, garantindo que cada decisão seja fundamentada e alinhada aos seus objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Assessoria Completa",
                desc: "Suporte contínuo e consultoria especializada para todas as suas necessidades de marketing",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Planejamento Anual",
                desc: "Desenvolvimento de plano robusto com metas claras e estratégias inovadoras",
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Gestão de Verba",
                desc: "Otimização inteligente do orçamento garantindo máximo retorno sobre investimento",
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Parcerias Estratégicas",
                desc: "Identificação e gerenciamento de colaborações que amplificam seu alcance",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400 transition group cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO OPERACIONAL - Branco */}
      <section id="entregaveis" className="py-28 px-4 md:px-0 bg-white">
        <div className="container space-y-20">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frente <span className="text-yellow-400">Operacional</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Execução de excelência com criatividade e eficiência em todos os canais
            </p>
          </div>

          {/* Entregável 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-start py-12">
            <div className="space-y-4">
              <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                01
              </div>
              <h3 className="text-3xl font-bold">Kit Campanha Mensal</h3>
              <p className="text-gray-700 leading-relaxed">
                Transformamos suas ofertas em materiais visuais irresistíveis, prontos para impactar seu cliente onde ele estiver.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Tabloide impresso profissional",
                  "Encartes digitais otimizados",
                  "Display de loja (preços de gôndolas)",
                  "Mídias PDV (banners e faixas)",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663075048680/kCeNDL6TCzuE7sjLmMdFBD/content-production-fo7pvRXzqCbtfH2cxACGdf.webp"
                alt="Kit Campanha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Entregável 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-start py-12">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663075048680/kCeNDL6TCzuE7sjLmMdFBD/social-media-management-5MeyS3zkz4cT6fPfdtkUnD.webp"
                alt="Social Media"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 md:order-1">
              <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                02
              </div>
              <h3 className="text-3xl font-bold">Gestão de Redes Sociais</h3>
              <p className="text-gray-700 leading-relaxed">
                Sua presença digital será vibrante e estratégica, mantendo seu público engajado e informado.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Ofertas diárias impulsionadas",
                  "01 conteúdo estratégico semanal",
                  "Engajamento e relacionamento",
                  "Análise de performance",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Entregável 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-start py-12">
            <div className="space-y-4">
              <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                03
              </div>
              <h3 className="text-3xl font-bold">Produção de Conteúdo</h3>
              <p className="text-gray-700 leading-relaxed">
                Vídeos que contam a história da sua marca, gerando conexão e desejo com seu público.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Gravação local em 01 loja/mês",
                  "Até 08 vídeos profissionais",
                  "Videomaker profissional",
                  "Modelo para gravação/fala",
                  "Pós-produção e edição completa",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663075048680/kCeNDL6TCzuE7sjLmMdFBD/hero-marketing-strategy-fF5sx7NXfgZrzx4pmC7thp.webp"
                alt="Produção"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Entregável 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-start py-12">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663075048680/kCeNDL6TCzuE7sjLmMdFBD/roi-results-msTohkGuKTM6CyAggZnaLd.webp"
                alt="ROI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 md:order-1">
              <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                04
              </div>
              <h3 className="text-3xl font-bold">Gestão de Tráfego</h3>
              <p className="text-gray-700 leading-relaxed">
                Seu investimento em marketing digital será otimizado para alcançar as pessoas certas, no momento certo.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Impulsionamento de ofertas",
                  "Gestão de verba digital",
                  "Monitoramento constante",
                  "Ajustes para maximizar ROI",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO INVESTIMENTO - Preto */}
      <section id="investimento" className="py-28 px-4 md:px-0 bg-black text-white">
        <div className="container space-y-16 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Investimento <span className="text-yellow-400">Estratégico</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Não é um custo, mas um investimento no futuro e crescimento exponencial do seu negócio
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl p-12 text-black shadow-2xl max-w-2xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-gray-800">Investimento Mensal</p>
              <h3 className="text-6xl md:text-7xl font-bold">R$ 3.750</h3>
              <p className="text-gray-800 text-lg">
                Assessoria completa, estratégia, criação, execução e otimização em um único pacote
              </p>
              <Button className="bg-black text-white hover:bg-gray-900 mt-6 gap-2 w-full">
                Começar Agora <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { label: "Horas de Estratégia", value: "40+" },
              { label: "Conteúdos Criados", value: "50+" },
              { label: "Canais Gerenciados", value: "360°" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - Branco */}
      <section className="py-28 px-4 md:px-0 bg-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como a Beepy pode levar sua marca para o próximo nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="https://wa.me/5583999398449" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition gap-2">
                Agende uma Reunião <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:mkt.anapaularibeiro@gmail.com">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition">
                Enviar Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Preto */}
      <footer className="bg-black text-white py-20 px-4 md:px-0">
        <div className="container border-t border-gray-800 pt-16">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">=</span>
                </div>
                <span className="font-bold">beepy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Agência de marketing e inteligência comercial para o seu negócio.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition">Marketing 360</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Estratégia Digital</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Produção de Conteúdo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://www.agenciabeepy.com.br" className="hover:text-yellow-400 transition">www.agenciabeepy.com.br</a></li>
                <li><a href="https://instagram.com/agenciabeepy" className="hover:text-yellow-400 transition">@agenciabeepy</a></li>
                <li><a href="https://wa.me/5583999398449" className="hover:text-yellow-400 transition">WhatsApp</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Portfólio</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Beepy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Estilos de Animação */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
