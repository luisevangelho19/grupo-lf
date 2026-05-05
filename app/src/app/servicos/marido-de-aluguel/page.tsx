import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdCalculate, MdBolt, MdHourglassEmpty, MdWbSunny, MdElectricalServices, MdPlumbing, MdFormatPaint, MdConstruction, MdAddShoppingCart, MdHandyman, MdCall } from 'react-icons/md'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'

const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
export const metadata = {
  title: 'Marido de Aluguel em Goiânia — Grupo LF',
  description: 'Marido de aluguel em Goiânia — pequenos reparos, montagens, instalações e serviços gerais com agilidade e confiança.',
  openGraph: {
    title: 'Marido de Aluguel em Goiânia — Grupo LF',
    description: 'Marido de aluguel em Goiânia — pequenos reparos, montagens, instalações e serviços gerais com agilidade e confiança.',
    url: `${_base}/servicos/marido-de-aluguel`,
    images: [{ url: `${_base}/services/marido-de-aluguel.jpg`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${_base}/servicos/marido-de-aluguel` },
}

export default function MaridoDeAluguelPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <ServiceJsonLd
          name="Marido de Aluguel"
          description="Marido de aluguel em Goiânia — pequenos reparos, montagens, instalações e serviços gerais com agilidade e confiança."
          provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
          priceRange="R$100 - R$1.200"
          serviceType="marido-de-aluguel"
          areaServed="Goiânia, GO"
          image={'/services/marido-de-aluguel.jpg'}
        />
        <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Marido de Aluguel.`} />

        <div className="layout-container flex h-full grow flex-col">
          {/* HeroSection */}
          <div className="relative">
            <div className="absolute inset-0 bg-black z-0" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20 bg-black">
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl font-display">Marido de Aluguel em Goiânia: Soluções Rápidas e Confiáveis</h1>
                  <h2 className="text-gray-200 text-lg font-normal leading-normal md:text-xl">Resolvemos seus problemas de manutenção residencial com agilidade e profissionalismo. De pequenos reparos a instalações completas.</h2>
                </div>
                <div className="mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={'/contato'}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-secondary text-white text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105"
                  >
                    <MdCalculate aria-hidden="true" size={20} />
                    <span className="truncate">Solicitar Orçamento</span>
                  </a>
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
                </div>
              </div>
            </div>
            {/* background is intentionally solid black for high contrast */}
          </div>

          <main className="flex flex-col items-center">
            <div className="layout-content-container flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-10 md:px-8 md:py-16">
              {/* Pacotes */}
              <div className="w-full text-center">
                <h2 className="text-primary dark:text-gray-100 text-3xl font-bold leading-tight tracking-tight md:text-4xl">Pacotes Sob Medida Para Sua Necessidade</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark text-lg">Escolha o plano perfeito para resolver seus problemas, sem complicação.</p>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-primary">
                        <MdBolt aria-hidden="true" className="text-3xl" />
                      </div>
                      <p className="text-primary dark:text-white text-xl font-bold">Visita Rápida</p>
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base">Ideal para reparos pontuais e urgentes que precisam de uma solução imediata.</p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent("Olá, quanto você cobra para fazer um reparo rápido?")}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Pedir preço — Visita Rápida (abre no WhatsApp)"
                      className="mt-auto flex w-full items-center justify-center rounded-lg h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold hover:bg-secondary/30"
                    >
                      Ver Preços
                    </a>
                  </div>
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 transition-transform hover:-translate-y-1 border-2 border-secondary">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-primary">
                        <MdHourglassEmpty aria-hidden="true" className="text-3xl" />
                      </div>
                      <p className="text-primary dark:text-white text-xl font-bold">Meia Diária</p>
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base">Perfeito para múltiplas tarefas em uma manhã ou tarde, otimizando seu tempo.</p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent("Olá, qual o valor da meia-diária para trabalhos (até 4 horas)?")}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Pedir preço — Meia Diária (abre no WhatsApp)"
                      className="mt-auto flex w-full items-center justify-center rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold hover:bg-secondary/90"
                    >
                      Ver Preços
                    </a>
                  </div>
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-primary">
                        <MdWbSunny aria-hidden="true" className="text-3xl" />
                      </div>
                      <p className="text-primary dark:text-white text-xl font-bold">Dia Inteiro</p>
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base">Para um dia completo de instalações, montagens e reparos mais complexos.</p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent("Olá, qual o valor para um dia completo de serviço?")}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Pedir preço — Dia Inteiro (abre no WhatsApp)"
                      className="mt-auto flex w-full items-center justify-center rounded-lg h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold hover:bg-secondary/30"
                    >
                      Ver Preços
                    </a>
                  </div>
                </div>
              </div>

              {/* Serviços Grid */}
              <div className="w-full pt-12 text-center">
                <h2 className="text-primary dark:text-gray-100 text-3xl font-bold leading-tight tracking-tight md:text-4xl">O Que Faz um Marido de Aluguel?</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark text-lg">Solucionamos uma vasta gama de problemas para facilitar o seu dia a dia.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdElectricalServices aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Elétrica</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Troca de tomadas, instalação de luminárias, ventiladores e pequenos reparos elétricos.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdPlumbing aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Hidráulica</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Reparos de vazamentos, instalação de pias e manutenção hidráulica básica.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdFormatPaint aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Pintura</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Pequenos retoques e pintura de portas, janelas e paredes.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdConstruction aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Montagem de Móveis</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Montagem e desmontagem de móveis novos e usados.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdAddShoppingCart aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Instalações Gerais</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Instalação de cortinas, persianas, suportes e pequenos acessórios.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <MdHandyman aria-hidden="true" className="text-primary dark:text-secondary text-3xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Pequenos Reparos</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Ajustes em portas, janelas, fechaduras e outros reparos diversos.</p>
                  </div>
                </div>
              </div>

              {/* Sticky CTA Bar for Mobile */}
              <div className="sticky bottom-0 z-50 flex w-full items-center justify-center py-6 md:hidden">
                <div className="grid grid-cols-2 gap-3 w-full max-w-xl px-4">
                  <a className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold" href={`tel:+5562991157746`}>
                    <MdCall aria-hidden="true" size={18} />
                    <span className="truncate">Ligar Agora</span>
                  </a>
                  <a
                    className="btn-whatsapp"
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                  >
                    <FaWhatsapp aria-hidden="true" size={18} className="mr-2" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                </div>
              </div>

              <TestimonialsSection />

            </div>
          </main>

        </div>
      </div>
    </main>
  )
}
