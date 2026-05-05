import React from 'react'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import TestimonialsSection from '~/components/TestimonialsSection'
import { FaWhatsapp } from 'react-icons/fa'
import { MdSchedule, MdRequestQuote, MdVerified } from 'react-icons/md'

const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
export const metadata = {
  title: 'Montador de Móveis em Goiânia — Grupo LF',
  description: 'Montador de móveis em Goiânia — montagem, desmontagem e fixações com segurança e agilidade.',
  openGraph: {
    title: 'Montador de Móveis em Goiânia — Grupo LF',
    description: 'Montador de móveis em Goiânia — montagem, desmontagem e fixações com segurança e agilidade.',
    url: `${_base}/servicos/montador-de-moveis`,
    images: [
      { url: `${_base}/services/montador-de-moveis.jpg`, width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: `${_base}/servicos/montador-de-moveis` },
}

export default function MontadorDeMoveisPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <ServiceJsonLd
          name="Montador de Móveis"
          description="Montagem e desmontagem de móveis, fixações e pequenos reparos residenciais e comerciais em Goiânia."
          provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
          serviceType="montador-de-moveis"
          areaServed="Goiânia, GO"
           priceRange="R$80 - R$1.500"
           image={'/services/montador-de-moveis.jpg'}
        />

        <div className="layout-container flex h-full grow flex-col">
          {/* full-bleed hero (moved out of the inner content container to match serralheiro) */}
          <div className="relative">
            <div className="absolute inset-0 bg-black z-0" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl font-display">Montador de Móveis em Goiânia</h1>
                  <h2 className="text-white/90 text-lg font-normal leading-normal max-w-2xl mx-auto sm:text-xl">Montagem, desmontagem e fixações com segurança, rapidez e garantia.</h2>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para montagem de móveis em Goiânia.')}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                    className="btn-whatsapp"
                  >
                    <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                    <span className="truncate">Chamar no WhatsApp</span>
                  </a>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para montagem de móveis em Goiânia.')}`}
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
          <main className="flex flex-col items-center">
            <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-16 sm:gap-20">
              {/* Resumo de Destaques */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-4xl text-primary"><MdSchedule size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Atendimento Rápido</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Atendimento ágil para montagem e desmontagem em Goiânia.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-4xl text-primary"><MdRequestQuote size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Orçamento Sem Compromisso</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Avaliação e orçamento rápido, sem surpresas.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-4xl text-primary"><MdVerified size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Garantia de Serviço</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Qualidade e garantia em nossas montagens.</p>
                  </div>
                </div>
              </section>
              

          {/* Services Section */}
          <section id="servicos" className="py-8">
            <div className="layout-content-container">
              <h2 className="text-strong text-[22px] font-bold pb-3 pt-2">Nossos Serviços</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
                <div className="flex flex-1 gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col">
                  <span className="material-symbols-outlined text-primary text-3xl">build_circle</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-base font-bold leading-tight">Montagem de Móveis</h3>
                    <p className="text-muted dark:text-gray-400 text-sm">Montamos móveis prontos ou planejados com precisão e cuidado.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col">
                  <span className="material-symbols-outlined text-primary text-3xl">construction</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-base font-bold leading-tight">Desmontagem e Reinstalação</h3>
                    <p className="text-muted dark:text-gray-400 text-sm">Desmontamos seus móveis para mudanças e remontamos no novo local.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col">
                  <span className="material-symbols-outlined text-primary text-3xl">push_pin</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-base font-bold leading-tight">Fixação e Instalações</h3>
                    <p className="text-muted dark:text-gray-400 text-sm">Instalamos prateleiras, painéis de TV e suportes com segurança.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col">
                  <span className="material-symbols-outlined text-primary text-3xl">tune</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-base font-bold leading-tight">Ajustes e Reparos</h3>
                    <p className="text-muted dark:text-gray-400 text-sm">Ajustes finos em portas, gavetas e dobradiças para deixar tudo perfeito.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="precos" className="py-6">
            <div className="layout-content-container">
              <h2 className="text-strong text-[22px] font-bold pb-3 pt-2">Pacotes e Preços</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className="flex flex-col gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-6">
                  <h3 className="text-primary text-lg font-bold">Visita Rápida</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">1 a 2 itens pequenos.</p>
                  <div className="text-strong dark:text-white text-3xl font-bold">R$ 80 <span className="text-base font-normal">/hora</span></div>
                  <p className="text-xs text-muted dark:text-gray-400">Ex: Instalar prateleira</p>
                </div>
                <div className="flex flex-col gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-6">
                  <h3 className="text-primary text-lg font-bold">Meia-Diária</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Ideal para montar móveis de um cômodo.</p>
                  <div className="text-strong dark:text-white text-3xl font-bold">R$ 250</div>
                  <p className="text-xs text-muted dark:text-gray-400">Até 4 horas de serviço.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-lg border border-light dark:border-white/10 bg-white dark:bg-background-dark p-6">
                  <h3 className="text-primary text-lg font-bold">Diária Completa</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Para mudanças completas ou projetos maiores.</p>
                  <div className="text-strong dark:text-white text-3xl font-bold">R$ 450</div>
                  <p className="text-xs text-muted dark:text-gray-400">Até 8 horas de serviço.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-lg border border-primary/50 bg-primary/5 dark:bg-primary/10 p-6">
                  <h3 className="text-primary text-lg font-bold">Móveis Planejados</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Montagem de cozinhas, closets e projetos sob medida.</p>
                  <div className="text-strong dark:text-white text-3xl font-bold">Sob consulta</div>
                  <p className="text-xs text-muted dark:text-gray-400">Orçamento gratuito.</p>
                </div>
              </div>
              <p className="px-4 text-sm text-muted dark:text-gray-400">* Nota: Custos com materiais (parafusos, buchas, etc.) não estão inclusos.</p>
            </div>
          </section>

          {/* Processo & Garantia */}
          <section id="processo" className="py-6">
            <div className="layout-content-container">
              <h2 className="text-strong dark:text-white text-[22px] font-bold pb-3 pt-2">Como Funciona</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                {['Agendamento', 'Visita Técnica', 'Execução', 'Garantia'].map((t, i) => (
                  <div key={t} className="flex items-center gap-4">
                    <div className="shrink-0 flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary font-bold text-xl">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-strong dark:text-white">{t}</h3>
                      <p className="text-sm text-muted dark:text-gray-400">{[
                        'Você entra em contato e agendamos a visita.',
                        'Analisamos o serviço e confirmamos o orçamento.',
                        'Montamos seus móveis com qualidade e rapidez.',
                        'Você confere o serviço e recebe nossa garantia.'
                      ][i]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Warranty and Testimonials (abridged) */}
          <section id="garantia" className="py-6">
            <div className="layout-content-container grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  <div className="flex flex-col items-center text-center gap-2 rounded-lg bg-white dark:bg-background-dark p-6 border border-light dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                <h3 className="font-bold text-strong dark:text-white">Garantia</h3>
                <p className="text-sm text-muted dark:text-gray-400">Cobrimos problemas relacionados à montagem por 30 dias.</p>
              </div>
                <div className="flex flex-col items-center text-center gap-2 rounded-lg bg-white dark:bg-background-dark p-6 border border-light dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl">shield</span>
                <h3 className="font-bold text-strong dark:text-white">Seguro Contra Danos</h3>
                <p className="text-sm text-muted dark:text-gray-400">Trabalhamos com cuidado e temos seguro para sua tranquilidade.</p>
              </div>
                <div className="flex flex-col items-center text-center gap-2 rounded-lg bg-white dark:bg-background-dark p-6 border border-light dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl">badge</span>
                <h3 className="font-bold text-strong dark:text-white">Técnicos Verificados</h3>
                <p className="text-sm text-muted dark:text-gray-400">Equipe qualificada e de confiança do Grupo LF.</p>
              </div>
            </div>
          </section>

          <TestimonialsSection />

          {/* FAQ */}
          <section id="faq" className="py-6">
            <div className="layout-content-container">
              <h2 className="text-strong dark:text-white text-[22px] font-bold pb-3 pt-2">Perguntas Frequentes</h2>
              <div className="flex flex-col gap-2 p-4">
                <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light dark:border-white/10">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h3 className="font-medium text-strong dark:text-white">Vocês atendem em quais cidades?</h3>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-strong dark:text-white">expand_more</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted dark:text-gray-400">Atendemos em toda a região de Goiânia e Aparecida de Goiânia. Para outras localidades, entre em contato para consulta de taxa de deslocamento.</p>
                </details>
                <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light dark:border-white/10">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h3 className="font-medium text-strong dark:text-white">O que preciso ter em mãos para a montagem?</h3>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-strong dark:text-white">expand_more</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted dark:text-gray-400">Apenas o móvel e o manual de instruções. Nossos montadores possuem todas as ferramentas necessárias para o serviço.</p>
                </details>
                <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light dark:border-white/10">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h3 className="font-medium text-strong dark:text-white">Como é feito o pagamento?</h3>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-strong dark:text-white">expand_more</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted dark:text-gray-400">Aceitamos pagamento via Pix, cartão de débito e crédito (com parcelamento) e dinheiro. O pagamento é realizado ao final do serviço.</p>
                </details>
              </div>
            </div>
          </section>

            </div>
          </main>

        </div>
        </div>
      {/* Floating CTA: WhatsApp */}
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Montador de Móveis.`} />
    </main>
  )
}
