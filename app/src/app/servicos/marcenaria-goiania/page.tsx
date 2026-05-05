import React from 'react'
import { getServiceBySlug } from '~/lib/content'
import ServiceJsonLd from '~/components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'
import {
  MdDesignServices,
  MdConstruction,
  MdArchitecture,
  MdExpandMore,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export async function generateMetadata() {
  const data = await getServiceBySlug('marcenaria-goiania')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Marceneiro de Alto Padrão — Goiânia'
  const description = fm.description ?? 'Transformamos seus ambientes com projetos de marcenaria personalizados, combinando design, funcionalidade e acabamento impecável em Goiânia.'

  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  return {
    title,
    description,
    openGraph: { title, description, url: `${_base}/servicos/marcenaria-goiania`, images: [{ url: `${_base}/og-marcenaria-1200x630.svg`, width: 1200, height: 630 }] },
    alternates: { canonical: `${_base}/servicos/marcenaria-goiania` },
  }
}

export default async function MarcenarioGoiania() {
  const data = await getServiceBySlug('marcenaria-goiania')
  const fm = data?.frontmatter ?? {}
  return (
    <main className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <ServiceJsonLd
        name={fm.title ?? 'Marceneiro de Alto Padrão'}
        description={fm.description}
        provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={fm.slug ?? 'marcenaria-goiania'}
        areaServed={fm.areaServed}
        priceRange={fm.priceRange}
        image={fm.image ?? '/og-marcenaria-1200x630.svg'}
      />
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Marcenaria.`} />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#D4AF37] z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl font-display">Marcenaria de Alto Padrão em Goiânia</h1>
              <h2 className="text-gray-800 text-lg font-normal leading-normal max-w-2xl mx-auto sm:text-xl">Transformamos seus ambientes com projetos de marcenaria personalizados, combinando design, funcionalidade e acabamento impecável.</h2>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços de marcenaria em Goiânia.')}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                className="btn-whatsapp"
              >
                <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                <span className="truncate">Chamar no WhatsApp</span>
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para marcenaria em Goiânia.')}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Pedir orçamento gratuito pelo WhatsApp (abre em nova aba)"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-900/10 border border-gray-900/50 text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-900/20 transition-colors"
              >
                <span className="truncate">Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div className="bg-[#D4AF37] py-3 overflow-hidden">
        <div className="relative w-full">
          <div className="flex animate-marquee gap-8">
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">MÓVEIS SOB MEDIDA</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">PROJETOS PERSONALIZADOS</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">RESTAURAÇÕES</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">ACABAMENTO PREMIUM</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">MÓVEIS SOB MEDIDA</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">PROJETOS PERSONALIZADOS</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">RESTAURAÇÕES</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">ACABAMENTO PREMIUM</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">MÓVEIS SOB MEDIDA</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">PROJETOS PERSONALIZADOS</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">RESTAURAÇÕES</span>
            <span className="text-lg font-semibold text-gray-900">◇</span>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">ACABAMENTO PREMIUM</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-white dark:bg-background-dark">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1">
          <h2 className="text-[#D4AF37] text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 text-center">Nossos Serviços</h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">Soluções completas em marcenaria premium para seu espaço.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 rounded-lg bg-[#FBF7F0] dark:bg-gray-800 p-8 text-center border-2 border-[#D4AF37]/20">
              <MdDesignServices aria-hidden="true" className="text-[#D4AF37] text-5xl mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Móveis Sob Medida</h3>
              <p className="text-gray-600 dark:text-gray-400">Criamos peças exclusivas que se encaixam perfeitamente no seu ambiente e estilo de vida.</p>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Gostaria de saber mais sobre Móveis Sob Medida')}`} target="_blank" rel="noreferrer noopener" className="font-semibold text-[#D4AF37] hover:text-yellow-600 transition-colors">Saber Mais</a>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-[#FBF7F0] dark:bg-gray-800 p-8 text-center border-2 border-[#D4AF37]/20">
              <MdConstruction aria-hidden="true" className="text-[#D4AF37] text-5xl mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Restaurações de Móveis</h3>
              <p className="text-gray-600 dark:text-gray-400">Recuperamos o valor e a beleza de móveis antigos com técnicas especializadas e acabamento de alta qualidade.</p>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Gostaria de saber mais sobre Restaurações de Móveis')}`} target="_blank" rel="noreferrer noopener" className="font-semibold text-[#D4AF37] hover:text-yellow-600 transition-colors">Saber Mais</a>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-[#FBF7F0] dark:bg-gray-800 p-8 text-center border-2 border-[#D4AF37]/20">
              <MdArchitecture aria-hidden="true" className="text-[#D4AF37] text-5xl mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Projetos Personalizados</h3>
              <p className="text-gray-600 dark:text-gray-400">Desenvolvemos projetos completos de marcenaria, desde a concepção até a instalação final, em parceria com você.</p>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Gostaria de saber mais sobre Projetos Personalizados')}`} target="_blank" rel="noreferrer noopener" className="font-semibold text-[#D4AF37] hover:text-yellow-600 transition-colors">Saber Mais</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-[#FBF7F0] dark:bg-gray-900" id="portfolio">
        <div className="layout-content-container mx-auto flex max-w-7xl flex-col flex-1">
          <h2 className="text-[#D4AF37] text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 text-center">Nosso Portfólio</h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">Confira alguns dos nossos trabalhos mais recentes em marcenaria premium.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Sala de estar com móvel de marcenaria" src="/marcenaria/IMG-20250807-WA0014.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Cozinha planejada com armários" src="/marcenaria/IMG-20250807-WA0015.avif" />
            </div>
            <div className="col-span-1 row-span-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Detalhe de móvel de madeira sofisticado" src="/marcenaria/IMG-20250807-WA0016.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Quarto com guarda-roupa embutido" src="/marcenaria/IMG-20250807-WA0017.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Mesa de centro de madeira maciça" src="/marcenaria/IMG-20250807-WA0018.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Banheiro com armário sob medida" src="/marcenaria/IMG-20250807-WA0019.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Estante de livros personalizada" src="/marcenaria/IMG-20250807-WA0020.avif" />
            </div>
            <div className="col-span-1 row-span-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Escritório com mesa e prateleiras" src="/marcenaria/IMG-20250807-WA0021.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Painel de madeira decorativo" src="/marcenaria/IMG-20250807-WA0022.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Móvel planejado para sala" src="/marcenaria/IMG-20250807-WA0023.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Armário de parede com design moderno" src="/marcenaria/IMG-20250807-WA0024.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Divisória de madeira em ambiente" src="/marcenaria/IMG-20250807-WA0025.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Gabinete de cozinha com acabamento premium" src="/marcenaria/IMG-20250807-WA0026.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Bancada de madeira em cozinha" src="/marcenaria/IMG-20250807-WA0027.avif" />
            </div>
            <div className="col-span-1 row-span-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Projeto completo de marcenaria em ambiente" src="/marcenaria/IMG-20250807-WA0028.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Móvel planejado com detalhes sofisticados" src="/marcenaria/IMG-20250807-WA0029.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Acabamento de madeira em ambiente moderno" src="/marcenaria/IMG-20250807-WA0030.avif" />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img className="w-full h-full object-cover" alt="Detalhe de marcenaria personalizada" src="/marcenaria/IMG-20250807-WA0031.avif" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-white dark:bg-background-dark">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1">
          <h2 className="text-[#D4AF37] text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 text-center">Nossos Clientes</h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">Veja o que nossos clientes dizem sobre nossos projetos e instalações.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FBF7F0] dark:bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Qualidade e atenção aos detalhes impressionantes. O resultado final ficou incrível e superou minhas expectativas."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-gray-900 font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">João da Silva</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cliente Satisfeito</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FBF7F0] dark:bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"O serviço foi rápido, limpo e superou todas as minhas expectativas. Recomendo a todos. Profissionais exemplares!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-gray-900 font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Maria Oliveira</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cliente Satisfeita</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FBF7F0] dark:bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Profissionalismo exemplar e um acabamento de primeiríssima linha. A marcenaria ficou perfeita, exatamente como planejado."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-gray-900 font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Pedro Costa</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cliente Satisfeito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-[#FBF7F0] dark:bg-gray-900">
        <div className="layout-content-container mx-auto flex max-w-3xl flex-col flex-1">
          <h2 className="text-[#D4AF37] text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border-2 border-[#D4AF37]/30 dark:border-gray-700 cursor-pointer hover:border-[#D4AF37]/60 transition-colors">
              <summary className="flex items-center justify-between font-medium text-[#D4AF37] dark:text-[#D4AF37]">Qual é o prazo para um projeto de marcenaria? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">O prazo depende da complexidade e tamanho do projeto, mas em média leva de 2 a 4 semanas, desde o projeto até a instalação final.</p>
            </details>
            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border-2 border-[#D4AF37]/30 dark:border-gray-700 cursor-pointer hover:border-[#D4AF37]/60 transition-colors">
              <summary className="flex items-center justify-between font-medium text-[#D4AF37] dark:text-[#D4AF37]">Vocês trabalham com diferentes tipos de madeira? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">Sim, utilizamos diversos tipos de madeira (MDF, madeira maciça, compensado, etc.) conforme o projeto e o orçamento disponível.</p>
            </details>
            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border-2 border-[#D4AF37]/30 dark:border-gray-700 cursor-pointer hover:border-[#D4AF37]/60 transition-colors">
              <summary className="flex items-center justify-between font-medium text-[#D4AF37] dark:text-[#D4AF37]">É possível solicitar uma restauração de móvel antigo? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">Sim, realizamos restauração de móveis antigos com técnicas especializadas, recuperando sua beleza e funcionalidade.</p>
            </details>
            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border-2 border-[#D4AF37]/30 dark:border-gray-700 cursor-pointer hover:border-[#D4AF37]/60 transition-colors">
              <summary className="flex items-center justify-between font-medium text-[#D4AF37] dark:text-[#D4AF37]">Vocês oferecem garantia nos serviços? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">Sim, todos os nossos trabalhos possuem garantia de qualidade e acabamento, com suporte técnico disponível.</p>
            </details>
          </div>
        </div>
      </div>
    </main>
  )
}
