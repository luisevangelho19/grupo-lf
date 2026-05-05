import React from 'react'
import { getServiceBySlug } from '~/lib/content'
import ServiceJsonLd from '~/components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'
import {
  MdWorkspacePremium,
  MdPalette,
  MdSchedule,
  MdHome,
  MdApartment,
  MdTexture,
  MdVilla,
  MdExpandMore,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export async function generateMetadata() {
  const data = await getServiceBySlug('pintor')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Pintor Profissional — Grupo LF'
  const description = fm.description ?? 'Renove seus ambientes com pintura profissional e acabamento impecável em Goiânia.'

  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  return {
    title,
    description,
    openGraph: { title, description, url: `${_base}/servicos/pintor`, images: [{ url: `${_base}/services/pintor.jpg`, width: 1200, height: 630 }] },
    alternates: { canonical: `${_base}/servicos/pintor` },
  }
}

export default async function Pintor() {
  const data = await getServiceBySlug('pintor')
  const fm = data?.frontmatter ?? {}
  return (
    <main className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <ServiceJsonLd
        name={fm.title ?? 'Pintor Profissional'}
        description={fm.description}
        provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={fm.slug ?? 'pintor'}
        areaServed={fm.areaServed}
        priceRange={fm.priceRange}
        image={fm.image ?? '/services/pintor.jpg'}
      />
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Pintor.`} />
      {/* Hero Section - match Gesseiro layout, painter-specific colors */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#0f3a72] via-[#1f78d1] to-[#0f5fb3] z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl @[480px]:text-5xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-display">Pintor Profissional em Goiânia</h1>
              <h2 className="text-white/90 text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">Renove seus ambientes com pintura profissional — acabamento impecável em cores que valorizam seus espaços.</h2>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços de pintura em Goiânia.')}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                className="btn-whatsapp"
              >
                <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                <span className="truncate">Chamar no WhatsApp</span>
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para pintura em Goiânia.')}`}
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

      {/* Stats Section / Benefits Bar */}
      <div className="px-4 py-5 sm:px-10 lg:px-20 bg-white dark:bg-background-dark">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1">
          <div className="flex flex-wrap gap-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-heading-light dark:text-heading-dark text-base font-medium leading-normal">Acabamento Perfeito</p>
              <p className="text-heading-light dark:text-heading-dark tracking-light text-2xl font-bold leading-tight">Garantido</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-heading-light dark:text-heading-dark text-base font-medium leading-normal">Limpeza Pós-serviço</p>
              <p className="text-heading-light dark:text-heading-dark tracking-light text-2xl font-bold leading-tight">Inclusa</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-heading-light dark:text-heading-dark text-base font-medium leading-normal">Orçamento Rápido</p>
              <p className="text-heading-light dark:text-heading-dark tracking-light text-2xl font-bold leading-tight">Em até 24h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1">
          <h2 className="text-heading-light dark:text-heading-dark text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex-col items-center text-center">
              <MdWorkspacePremium aria-hidden="true" className="text-[#1F78D1] text-4xl" />
              <div className="flex flex-col gap-1">
                <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight">Anos de Experiência</h3>
                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Nossa equipe possui vasta experiência, garantindo um serviço sem falhas e com a melhor técnica.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex-col items-center text-center">
              <MdPalette aria-hidden="true" className="text-[#1F78D1] text-4xl" />
              <div className="flex flex-col gap-1">
                <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight">Materiais de Qualidade</h3>
                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Trabalhamos apenas com as melhores marcas de tintas e materiais para um resultado duradouro.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex-col items-center text-center">
              <MdSchedule aria-hidden="true" className="text-[#1F78D1] text-4xl" />
              <div className="flex flex-col gap-1">
                <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight">Pontualidade e Confiança</h3>
                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Cumprimos rigorosamente os prazos combinados e cuidamos do seu espaço com o máximo respeito.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-white dark:bg-gray-900">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1">
          <h2 className="text-heading-light dark:text-heading-dark text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Nossos Serviços de Pintura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700">
              <MdHome aria-hidden="true" className="text-[#1F78D1] text-3xl" />
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">Pintura Residencial</h3>
              <p className="text-sm text-text-light dark:text-text-dark">Transforme sua casa com cores novas, de paredes internas a tetos e acabamentos.</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700">
              <MdApartment aria-hidden="true" className="text-[#1F78D1] text-3xl" />
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">Pintura Comercial</h3>
              <p className="text-sm text-text-light dark:text-text-dark">Renove o visual do seu escritório, loja ou empresa com um serviço ágil e profissional.</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700">
              <MdTexture aria-hidden="true" className="text-[#1F78D1] text-3xl" />
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">Aplicações e Texturas</h3>
              <p className="text-sm text-text-light dark:text-text-dark">Crie ambientes únicos com cimento queimado, marmorato e outras texturas especiais.</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700">
              <MdVilla aria-hidden="true" className="text-[#1F78D1] text-3xl" />
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">Pintura de Fachadas</h3>
              <p className="text-sm text-text-light dark:text-text-dark">Proteja e valorize seu imóvel com pintura externa resistente às intempéries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps Component */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="layout-content-container mx-auto flex max-w-5xl flex-col flex-1 items-center">
          <h2 className="text-heading-light dark:text-heading-dark text-3xl font-bold leading-tight tracking-[-0.015em] pb-12 text-center">Nosso Processo Simplificado</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 -translate-y-1/2 -mt-4"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1F78D1] text-white flex items-center justify-center text-2xl font-bold border-4 border-background-light dark:border-background-dark z-10">1</div>
              <h3 className="mt-4 text-lg font-bold text-heading-light dark:text-heading-dark">Contato e Visita</h3>
              <p className="mt-2 text-sm">Avaliamos o local e entendemos suas necessidades para um orçamento preciso.</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1F78D1] text-white flex items-center justify-center text-2xl font-bold border-4 border-background-light dark:border-background-dark z-10">2</div>
              <h3 className="mt-4 text-lg font-bold text-heading-light dark:text-heading-dark">Orçamento Detalhado</h3>
              <p className="mt-2 text-sm">Apresentamos uma proposta clara, com todos os custos e prazos definidos.</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1F78D1] text-white flex items-center justify-center text-2xl font-bold border-4 border-background-light dark:border-background-dark z-10">3</div>
              <h3 className="mt-4 text-lg font-bold text-heading-light dark:text-heading-dark">Execução Profissional</h3>
              <p className="mt-2 text-sm">Preparamos o ambiente e realizamos a pintura com máxima qualidade.</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1F78D1] text-white flex items-center justify-center text-2xl font-bold border-4 border-background-light dark:border-background-dark z-10">4</div>
              <h3 className="mt-4 text-lg font-bold text-heading-light dark:text-heading-dark">Entrega e Limpeza</h3>
              <p className="mt-2 text-sm">Finalizamos o serviço, organizamos e limpamos todo o local de trabalho.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-white dark:bg-gray-900">
        <div className="layout-content-container mx-auto flex max-w-6xl flex-col flex-1">
          <h2 className="text-heading-light dark:text-heading-dark text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Confira Nosso Trabalho</h2>
            <div className="columns-2 md:columns-3 gap-4">
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Pintor profissional em Goiânia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANAYtFkFXknF8T0orQGfPo0LYtm2HQEpMY-DPXTEAls21edIc_ZKPZM1fPJu-IZ5y-3en64jgxH8lDfHmUd3OXecHgiDDPRmSqJhK11dp9O1G-ZoH3R9jLjiWHsjmOXiK-1KtBiSJKT5qpPlKv8Ku5yowvC6KQKvbl_oBz04yOOJkgLbjGTO5jx4i6XIi7eDgnZeeYzP1iOSLF5Lf8nBIiUmJXSe7l_jK5pkrm1X5c0rtlG2OwMhWgx2GLVG5PgHzAW-ObxD_8aA" />
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Pintor profissional em Goiânia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtb-is6mHK9vZlfqpYgkRhztKHt-8k9o_z6aOztjmUsk6imDsu2yiWSZYG8kRA0jfGABFxAGZNTw7pS_2ENyjn6_aeVR79lqbm8LCGLOiBWOEFUsMXjSolddsVmfYlCZwi0KVTgMx7NgYboyDNJXeFcV8v401jksDcdiJeQ579f_5gMCHlntzCQrH53oPDQoY6I5JCd5gu9LETXzd4Z4sGjAOkBPYdH2_TCW9ZT1CLOam1VncWrnuDpvt78UoJstIDF-WJpS51Q" />
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Quarto de casal com parede de destaque em verde musgo, pintura de interiores em apartamento." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LWXxx8tb9eMj4wHQdXC28QcEL-YZ3KWBBdD9hcWkMajPCwscMNnUEAZBkUhV_T_5bENGOpc6yq75xMzSYSxyvkv1fcdC7R0d-ZOnwcYrjZ3uwt2K-e15-CXJTeHybfBTCvhGdBxbLEYlAKegSPk8G-9EGtn3bf7XtyHXaZOafe4aWzgFXeMhvbfwVmJFd7Q_jJWtejxqqmhqy3avWm1g_RQXQepc2Z0Ogn-fZdV-hNWiqvF7XFRZfVsl2N5rSHccXeNezZgrqg" />
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Detalhe de pintor aplicando massa corrida em parede para preparação." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK8PwwIqkEtbjedX_u4PYJjicaK_hcMSV4S_LbzfUrfteahXT2aZwQzLB_AmPzK8o8L9wJzhAX5mn2ELsRwbLyxVhjpFdmyjyAIbe9R2kWA0qR-e8tcOEgu-mqmi-mAqeFd-HKbQNJNdM_5LxkwdvHIUZLTQuT0F0wDOGEJkr5edWegDcr5JIM3ONwGPtskyL0VKAbz6d-AouPP4iAd8zd6Syr_3XRqA3nfB64-PiBgs3wqYNCff_HRPzoGB3A8AetoWBmZfAUrQ" />
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Cozinha com armários pintados de azul e paredes brancas, projeto de renovação." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiufrxjrZDlrQro0EuISYfUej6x3iWrcI6P9Y6ALqQJvglcDIWA4f_dzWvLZnx7U8aoSxy7zT2XcGHmpgn_vbSrLFhKXftUXRHsKzd9J4DBl2YiIiugq7xu_ViqIs6m3HhmW0PoFH7TsgHZPpOjDfCMiwkIwUs_olg_kyMHhcRnNTQQOoIVG8p_W5Cf4vOXnrawCcI1P7VHguaY8d2joO_E2aiz2j5tG3ybF_aNvP89Zr855QvBTsEgv4jee-RZFtTSaqiVJPHOA" />
            <img className="mb-4 rounded-lg w-full break-inside-avoid" alt="Pintura finalizada em quarto de hotel, ambiente clean e moderno." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIfPQO4k_N-fnEeCViWlOrEnP0dsfgtgBW-IoKmAtM2HmdAEYN_MDCYIqZ15Q7__AmldkPcNemRpSwtlPwRRtuQHM8hGSMIENACtnGY_WxctgFs0s6HWiEky75uCO2B6mFCyEF2184dz3217mHZRmJOTR61Ds53dUko3Q-0-CULxrpQWq8Hm1tBnqCO4XfCUSnw7SxQ6dgDcUgoZBOdc1DBw0Rp1UsnrbQASlFMVe7VYbLbA4W9My533Osec-8zds_FmBqASOpaw" />
          </div>
        </div>
      </div>

      <TestimonialsSection />

      {/* FAQ */}
      <div className="px-4 py-16 sm:px-10 lg:px-20 bg-white dark:bg-gray-900">
        <div className="layout-content-container mx-auto flex max-w-3xl flex-col flex-1">
          <h2 className="text-heading-light dark:text-heading-dark text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-4 border border-gray-200 dark:border-gray-700 cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-heading-light dark:text-heading-dark">Quanto tempo leva para pintar um apartamento? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">O tempo varia com o tamanho e as condições das paredes, mas um apartamento de 2 quartos leva, em média, de 3 a 5 dias.</p>
            </details>
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-4 border border-gray-200 dark:border-gray-700 cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-heading-light dark:text-heading-dark">Vocês fornecem a tinta e os materiais? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">Sim, nosso orçamento pode incluir todos os materiais necessários, sempre trabalhando com marcas de alta qualidade para garantir o melhor acabamento.</p>
            </details>
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-4 border border-gray-200 dark:border-gray-700 cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-heading-light dark:text-heading-dark">É preciso preparar o local antes da pintura? <MdExpandMore aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" /></summary>
              <p className="mt-2 text-text-light dark:text-text-dark">Nossa equipe cuida de toda a preparação, como proteger móveis, pisos e rodapés. Pedimos apenas que retire objetos pessoais e frágeis do ambiente.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA & Contact Form removido - formulário de contato retirado conforme solicitado */}
    </main>
  )
}
