import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import { getServiceBySlug } from '~/lib/content'
import TestimonialsSection from '~/components/TestimonialsSection'
import { MdVerifiedUser, MdSchedule, MdEngineering, MdWorkspacePremium, MdDiamond, MdSentimentVerySatisfied, MdHealthAndSafety, MdCall, MdLocationOn } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export async function generateMetadata() {
  const data = await getServiceBySlug('vidraceiro')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Vidraceiro em Goiânia — Grupo LF'
  const description = fm.description ?? 'Especialistas em projetos de vidro sob medida em Goiânia. Instalação de boxes, portas, janelas, espelhos e envidraçamento de sacadas com segurança e qualidade.'
  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${_base}/servicos/vidraceiro`,
      images: [{ url: `${_base}/services/vidraceiro.jpg`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `${_base}/servicos/vidraceiro` },
  }
}

export default async function VidraceiroPage() {
  const data = await getServiceBySlug('vidraceiro')
  const fm = data?.frontmatter ?? {}
  // Use a page-specific WhatsApp number for vidraceiro (only affects this page)
  const vidraceiroPhone = '5562993133596' // +55 62 99313-3596 (international format for wa.me and tel links)

  return (
    <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <ServiceJsonLd
        name={fm.title ?? 'Vidraceiro em Goiânia'}
        description={fm.description}
        provider={{ name: 'Grupo LF', telephone: '+55 62 99313-3596', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={fm.slug ?? 'vidraceiro'}
        areaServed={fm.areaServed}
        priceRange={fm.priceRange}
        image={fm.image ?? '/services/vidraceiro.jpg'}
      />
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Vidraceiro.`} phone={vidraceiroPhone} />
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section (match Serralheiro layout) */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#00796b] z-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl font-display">Vidraceiro em Goiânia: Manutenção, Venda e Soluções Personalizadas em Vidro</h1>
                <h2 className="text-white/90 text-lg font-normal leading-normal max-w-2xl mx-auto sm:text-xl">Manutenção geral de vidros, espelhos sob medida, vidros temperados personalizados, box de banheiro, moladoras, instalações e muito mais. Qualidade, precisão e profissionalismo em cada projeto.</h2>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={`https://wa.me/${vidraceiroPhone}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços de vidraceiro em Goiânia.')}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                  <span className="truncate">Chamar no WhatsApp</span>
                </a>
                <a
                  href={`https://wa.me/${vidraceiroPhone}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para vidraceiro em Goiânia.')}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Pedir orçamento gratuito pelo WhatsApp (abre em nova aba)"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 border border-white/50 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors"
                >
                  <span className="truncate">Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-10 lg:py-16">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1 gap-12 lg:gap-16">
            {/* Stats / Trust Bar */}
            <div className="flex flex-wrap gap-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                <MdVerifiedUser aria-hidden="true" className="text-[#00796b] text-3xl" />
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Garantia de Qualidade</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Serviços executados com perfeição e durabilidade.</p>
              </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                <MdSchedule aria-hidden="true" className="text-[#00796b] text-3xl" />
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Atendimento Rápido</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Agilidade do orçamento à instalação final.</p>
              </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                <MdEngineering aria-hidden="true" className="text-[#00796b] text-3xl" />
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Profissionais Certificados</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Equipe técnica qualificada e experiente.</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-[#00796b] text-3xl font-bold leading-tight tracking-tight pb-6 text-center">Por que escolher nossos serviços?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 items-center text-center">
                  <MdWorkspacePremium aria-hidden="true" className="text-[#00796b] text-4xl mb-2" />
                  <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Anos de Experiência</h3>
                  <p className="text-text-light dark:text-text-muted-dark text-sm font-normal leading-normal">Nossa equipe qualificada garante um serviço preciso e de alta qualidade em todos os projetos de vidraçaria em Goiânia.</p>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 items-center text-center">
                  <MdDiamond aria-hidden="true" className="text-[#00796b] text-4xl mb-2" />
                  <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Materiais de Primeira Linha</h3>
                  <p className="text-text-light dark:text-text-muted-dark text-sm font-normal leading-normal">Utilizamos apenas vidros temperados e laminados que seguem as mais rigorosas normas de segurança da ABNT.</p>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 items-center text-center">
                  <MdSentimentVerySatisfied aria-hidden="true" className="text-[#00796b] text-4xl mb-2" />
                  <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Satisfação Garantida</h3>
                  <p className="text-text-light dark:text-text-muted-dark text-sm font-normal leading-normal">Compromisso total com a sua satisfação, do primeiro contato à finalização da instalação do seu projeto.</p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div>
              <h2 className="text-[#00796b] text-3xl font-bold leading-tight tracking-tight pb-6 text-center">Nossos Serviços Especializados em Vidro</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Espelhos - Venda e Personalização */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Espelhos sob medida e personalizados" src="/vidracaria/espelho-led.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Espelhos - Venda e Personalização</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Ampla variedade de espelhos sob medida com corte e acabamento personalizado conforme suas necessidades únicas.</p>
                  </div>
                </div>

                {/* Vidros Personalizados */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Vidros temperados e personalizados sob medida" src="/vidracaria/espelho-personalizado.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Vidros Personalizados</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Temperados, laminados ou especiais, todos cortados e acabados conforme sua especificação.</p>
                  </div>
                </div>

                {/* Box de Banheiro */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Box de banheiro de vidro temperado" src="/vidracaria/box-banheiro.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Box de Banheiro</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Modelos de correr, abrir e de canto em vidro temperado com instalação profissional garantida.</p>
                  </div>
                </div>

                {/* Molas de piso e aéreas */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Moladoras de piso, aérea e impermeabilização" src="/vidracaria/mola.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Molas de piso e aéreas</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Molas de piso, aéreas e sistemas de impermeabilização de alta qualidade com garantia completa.</p>
                  </div>
                </div>

                {/* Rodana e Trilho */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Rodana e trilho de correr para vidro" src="/vidracaria/Rodana.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Rodana e Trilho</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Sistemas de rolamento de primeira qualidade para vidros deslizantes com durabilidade comprovada.</p>
                  </div>
                </div>

                {/* Instalação Profissional */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                  <img className="w-full aspect-square object-cover" alt="Instalação profissional de vidros e estruturas" src="/vidracaria/instalacao-profissional.webp" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark">Instalação Profissional</h3>
                    <p className="text-sm text-text-light dark:text-text-muted-dark mt-2">Montagem com precisão, vedação perfeita, alinhamento garantido e acabamento impecável em todos os projetos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process & Security & CTA similar to source */}
            <div>
              <h2 className="text-[#00796b] text-3xl font-bold leading-tight tracking-tight pb-8 text-center">Nosso Processo Simplificado</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00796b]/10 text-[#00796b] font-bold text-2xl mb-4">1</div>
                  <h3 className="font-bold mb-2">Contato e Consulta</h3>
                  <p className="text-sm text-text-light dark:text-text-muted-dark">Você entra em contato e explica sua necessidade. Oferecemos uma consulta inicial gratuita.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00796b]/10 text-[#00796b] font-bold text-2xl mb-4">2</div>
                  <h3 className="font-bold mb-2">Medição e Projeto</h3>
                  <p className="text-sm text-text-light dark:text-text-muted-dark">Nossa equipe técnica vai ao local para tirar as medidas exatas e elaborar o projeto ideal.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00796b]/10 text-[#00796b] font-bold text-2xl mb-4">3</div>
                  <h3 className="font-bold mb-2">Instalação Profissional</h3>
                  <p className="text-sm text-text-light dark:text-text-muted-dark">Executamos a instalação com precisão, limpeza e seguindo todas as normas de segurança.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00796b]/10 text-[#00796b] font-bold text-2xl mb-4">4</div>
                  <h3 className="font-bold mb-2">Revisão e Garantia</h3>
                  <p className="text-sm text-text-light dark:text-text-muted-dark">Após a conclusão, fazemos uma revisão final e você recebe a garantia completa do serviço.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#00796b]/10 dark:bg-[#00796b]/20 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-[#00796b] shrink-0">
                  <MdHealthAndSafety aria-hidden="true" className="text-7xl" />
                </div>
                <div>
                  <h2 className="text-[#00796b] text-2xl font-bold">Segurança e Conformidade em Primeiro Lugar</h2>
                  <p className="mt-2 text-text-light dark:text-text-dark/90">Sua tranquilidade é nossa prioridade. Todos os nossos projetos utilizam vidros de segurança (temperados ou laminados) e seguem rigorosamente as normas técnicas da ABNT. Garantimos uma instalação segura, durável e que valoriza seu imóvel em Goiânia.</p>
                </div>
              </div>
            </div>

            <TestimonialsSection />

            {/* Pronto para transformar seu ambiente (contato removido) */}
          </div>
        </div>
      </div>
    </div>
  )
}
