import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmergency, MdWorkspacePremium, MdThumbUp, MdShower, MdElectricalServices, MdPower, MdBuild, MdCall, MdEvent, MdConstruction, MdTaskAlt, MdExpandMore } from 'react-icons/md'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'

import { getServiceBySlug } from '~/lib/content'

export async function generateMetadata() {
  const data = await getServiceBySlug('eletricista')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Eletricista Profissional — Grupo LF'
  const description = fm.description ?? 'Eletricista em Goiânia — instalação, manutenção e serviços elétricos com segurança e qualidade.'

    const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${_base}/servicos/eletricista`,
        images: [{ url: `${_base}/services/eletricista.jpg`, width: 1200, height: 630 }],
      },
    alternates: { canonical: 'https://servicoslf.com.br/servicos/eletricista' },
  }
}

export default async function Eletricista() {
  const data = await getServiceBySlug('eletricista')
  const fm = data?.frontmatter ?? {}
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <ServiceJsonLd
          name={fm.title ?? 'Eletricista Profissional'}
          description={fm.description}
          provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
          serviceType={fm.slug ?? 'eletricista'}
          areaServed={fm.areaServed ?? 'Goiânia, GO'}
          priceRange={fm.priceRange}
          image={fm.image ?? '/services/eletricista.jpg'}
        />
        {/* Layout container to match Gesseiro structure */}
        <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section (match Gesseiro layout) */}
        <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#F59E0B] via-[#C87A03] to-[#8a4f00] z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-display">{fm.title ?? 'Eletricista Profissional em Goiânia'}</h1>
              <h2 className="text-white/90 text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">{fm.description ?? 'Soluções elétricas rápidas e seguras para sua casa ou empresa.'}</h2>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, preciso de atendimento elétrico em Goiânia.')}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                className="btn-whatsapp"
              >
                <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                <span className="truncate">Chamar no WhatsApp</span>
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços elétricos em Goiânia.')}`}
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

        {/* The rest of the page content lives inside the same layout container */}

      {/* Why Us Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20 bg-background-light-section dark:bg-background-dark-section">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <MdEmergency aria-hidden="true" className="text-[#F59E0B] text-4xl mb-2" size={36} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">Atendimento 24h</h3>
                <p className="text-sm leading-normal text-text-muted-light dark:text-text-muted-dark">Conte conosco a qualquer hora do dia para resolver problemas elétricos urgentes em Goiânia.</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <MdWorkspacePremium aria-hidden="true" className="text-[#F59E0B] text-4xl mb-2" size={36} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">Técnicos Certificados</h3>
                <p className="text-sm leading-normal text-text-muted-light dark:text-text-muted-dark">Nossa equipe é qualificada e segue rigorosamente todas as normas de segurança NR-10.</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <MdThumbUp aria-hidden="true" className="text-[#F59E0B] text-4xl mb-2" size={36} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">Garantia de Serviço</h3>
                <p className="text-sm leading-normal text-text-muted-light dark:text-text-muted-dark">Oferecemos garantia completa em todos os serviços prestados, assegurando sua total satisfação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20" id="servicos">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <MdShower aria-hidden="true" className="text-[#F59E0B] text-3xl" size={28} />
              <h3 className="text-base font-bold">Instalação de Chuveiro</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Instalação e troca de chuveiros elétricos com segurança.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <MdElectricalServices aria-hidden="true" className="text-[#F59E0B] text-3xl" size={28} />
              <h3 className="text-base font-bold">Troca de Fiação</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Modernização da fiação antiga para evitar acidentes.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <MdPower aria-hidden="true" className="text-[#F59E0B] text-3xl" size={28} />
              <h3 className="text-base font-bold">Instalação de Tomadas</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Novos pontos de tomada e interruptores conforme sua necessidade.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <MdBuild aria-hidden="true" className="text-[#F59E0B] text-3xl" size={28} />
              <h3 className="text-base font-bold">Manutenção Preventiva</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Verificação completa do sistema elétrico para garantir segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20 bg-background-light-section dark:bg-background-dark-section">
        <div className="w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Como Funciona Nosso Atendimento</h2>
          <p className="max-w-2xl mx-auto text-text-muted-light dark:text-text-muted-dark mb-12">Nosso processo é simples, rápido e transparente, pensado para resolver seu problema com eficiência.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-16 rounded-full bg-[#F59E0B] text-text-light mb-4"><MdCall aria-hidden="true" className="text-4xl" size={36} /></div>
              <h3 className="font-bold mb-2">1. Contato e Orçamento</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Você entra em contato e descreve o problema. Enviamos um orçamento rápido e sem compromisso.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-16 rounded-full bg-[#F59E0B] text-text-light mb-4"><MdEvent aria-hidden="true" className="text-4xl" size={36} /></div>
              <h3 className="font-bold mb-2">2. Agendamento</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Com o orçamento aprovado, agendamos a visita técnica no melhor horário para você.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-16 rounded-full bg-[#F59E0B] text-text-light mb-4"><MdConstruction aria-hidden="true" className="text-4xl" size={36} /></div>
              <h3 className="font-bold mb-2">3. Execução Segura</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Nossos técnicos realizam o serviço com equipamentos adequados e seguindo as normas de segurança.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-16 rounded-full bg-[#F59E0B] text-text-light mb-4"><MdTaskAlt aria-hidden="true" className="text-4xl" size={36} /></div>
              <h3 className="font-bold mb-2">4. Revisão e Garantia</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Após a conclusão, revisamos tudo com você e entregamos o certificado de garantia do serviço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Trabalhos Realizados em Goiânia</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Eletricista profissional em Goiânia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOwG-47CI1csgG24vpUdmdPia341IOYQheqz-BMy6T8VDKJDIcLb9BIs37sNJrGci9aB4a8IabEVQZr5jEDGdXE8xNqb91qDZBQL-eSpAKTHYoSgQgapt3GTCk4NED6AQoQj3lBaJlDUJpS_IpFXcB6uSZ5iiGRW6LDE36M7IiwwDSzwic8Mnzs5CyYsc8f5djtk2gzaOfhyee2tp4vlpUPilbEL99S722soXw7sGgjvLV5BlAbprzvwOuch9tqo19smTv9FVEqw" />
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Eletricista profissional em Goiânia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4HC6N2eoOn5FT1TtZ2WbLyJ0QQmbgyobo-Dpu1TKC2XBIM2Hg59DWhhbiBhFQ7bwtHwQVlki5UwOqaFNPL-FI3jIVg5U5jfeCW7V6IK6fJKCqTbzRkVFUaCbqllHGOpJJvleMxTQLnrVZr19C0esGf_mOXEwj3pvxoHjOJRENXLNiw1iiRIIJDGzs44jzcLsAa_UyM9LJtE_sTclRddzJm_Gkewl1QGRqxEod2rMb_4Ov7h-MBaNo-haDs-BiT07GiaVco_7SAw" />
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Manutenção em painel elétrico de um comércio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Jagyc8UoAYcOumNhaTvDQ0M_BWo3HFbkEUWOonK1rF5U9PL2Bl_ft-UyhB5ATXd-bc3fVf8CgHR4rAb3L7oSlpEKB1IOWsgH8HcBDEJXr-RLItNatQPcRb3GGpVFYHDuX7uzJLRnqjp2D4K5YRaR_9qO-HBtWzGW_PObr1xMx00D417FIbuKrdHS3KPg24MhtYwtPOepjQF8XkZthF0kiiNq5YR7LA9BoDHK33vf5vLBfFvpbZ8XL37H819EZwljlN1FM2rimA" />
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Instalação de novas tomadas em uma parede." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIEtSZFru1x5SEhJ_ovQFKT45Bd8Xgsb8V8Gwa7Mcs-USLXmMRYVbI0s3GMRp5pBzIkFi221lOfM9xja-Inar2b0GKmjnHt2hLr8KGUDb2Vp9LjfEMZU5bJvA6STovfWNmBAbHgAjgC6c3h53rSJ8bGpk231sYecSTLkw7Yv8gsWjkSzSakLSa8y-EnoMyxdrhDSGcBixY5wuXRgdg9Z8QFU-w3lt4FhE1cAVQRpLFEcYVxbFCNSxP9FgM130RDzPih6F94iDpgw" />
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Troca de fiação elétrica antiga por nova." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXjIJm0FkHMep084r8zZwbxroiE1r79Orp_IGB34L_5mvBu_Ue_Hb7gOxBhHvY2Q4bR3FYWr75f7lQZFpR_H60mjyd-xlg9paIXto2gZ1gBBmLQ0H7aR6bPJubNJX61TqoGHk7ZJ7EgXM56TfL0Crm0aD7QPhK8v0PxsKB8WJ_0qWAbC7VS8Sdt3d0la8Lr7VlnhrPZXVX0NxUgMZvODk44b4KVvlALiBjgYBkS34-wo8_JP5wEzdXCXrFUqYgNLaMG9NZdMLaw" />
            <img className="rounded-lg object-cover aspect-square hover:opacity-90 transition-opacity cursor-pointer" alt="Detalhe de um eletricista conectando fios em um disjuntor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvNFg3Xf7_eJLJP-EA51r0qaZurScLcm41UiL-UUXN5ETc-Cnnfj0wwdq35nSVAW8EOXVGbXAfZrIqXIeFmOhoDZC1l5mO_vsii87io53_YqLIb3VOyRmbOiP1BdSgCpoNVg0E4k348bGMYogCKn_ZFXCxH8mwH0AwLkH5lWkExy46UThZr5yh4dghbuO1pEwQgCbRgOW6mUYDiCdYs1AkWis81lCKVX8N-O_Ug_3GxVeUdb0_vAhKrwNuaCrkBY1SpZDtfn42Bg" />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-background-light-section dark:bg-background-dark-section p-4 cursor-pointer">
              <summary className="flex items-center justify-between font-medium">Vocês atendem emergências 24 horas? <MdExpandMore aria-hidden="true" className="transition-transform group-open:rotate-180" /></summary>
              <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Sim! Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para atender chamados de emergência elétrica em toda a região de Goiânia.</p>
            </details>
            <details className="group rounded-lg bg-background-light-section dark:bg-background-dark-section p-4 cursor-pointer">
              <summary className="flex items-center justify-between font-medium">Qual a garantia do serviço prestado?<MdExpandMore aria-hidden="true" className="transition-transform group-open:rotate-180" /></summary>
              <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Oferecemos uma garantia padrão de 90 dias para todos os serviços de mão de obra, conforme o Código de Defesa do Consumidor, e a garantia do fabricante para as peças utilizadas.</p>
            </details>
            <details className="group rounded-lg bg-background-light-section dark:bg-background-dark-section p-4 cursor-pointer">
              <summary className="flex items-center justify-between font-medium">Quais formas de pagamento vocês aceitam?<MdExpandMore aria-hidden="true" className="transition-transform group-open:rotate-180" /></summary>
              <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Aceitamos diversas formas de pagamento para sua conveniência, incluindo PIX, cartões de débito, crédito (parcelado) e transferência bancária.</p>
            </details>
            <details className="group rounded-lg bg-background-light-section dark:bg-background-dark-section p-4 cursor-pointer">
              <summary className="flex items-center justify-between font-medium">O orçamento tem algum custo?<MdExpandMore aria-hidden="true" className="transition-transform group-open:rotate-180" /></summary>
              <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Não, nosso orçamento é totalmente gratuito e sem compromisso. Entre em contato, descreva sua necessidade e forneceremos uma estimativa de valor.</p>
            </details>
          </div>
        </div>
      </section>

        {/* JSON-LD do serviço (moved to top of container) */}
        </div>

        <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de ${fm.title ?? 'Eletricista'}.`} />
      </div>

      {/* Final CTA & Contact Section */}
      <section className="w-full flex justify-center px-4 py-12 md:py-20 bg-[#F59E0B]" id="contato">
        <div className="w-full max-w-6xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Pronto para resolver seu problema elétrico?</h2>
          <p className="max-w-2xl mx-auto mb-8">Entre em contato agora mesmo e solicite um orçamento gratuito. Nossa equipe está pronta para te atender!</p>
            <div className="flex justify-center flex-wrap gap-4">
              <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
              className="btn-whatsapp"
            >
              <FaWhatsapp aria-hidden="true" size={20} className="mr-2" />
              <span className="truncate">Chamar no WhatsApp</span>
            </a>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light/90 dark:bg-background-dark/90 text-black dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-background-light dark:hover:bg-background-dark transition-colors">
              <span className="truncate">Ligar Agora: (62) 99115-7746</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
