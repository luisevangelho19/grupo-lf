import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdSchedule, MdRequestQuote, MdVerified, MdGroups, MdConstruction, MdSpeed, MdEmergency, MdCall, MdWaterDrop, MdPlumbing, MdBuild, MdShower, MdCleaningServices, MdLocalFireDepartment, MdExpandMore } from 'react-icons/md'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'

const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
export const metadata = {
  title: 'Encanador Profissional em Goiânia — Soluções em Vazamentos',
  description: 'Encanador especializado em soluções de vazamentos. Quebramos parede, corrigimos 100% do problema e deixamos limpo. Reparos hidráulicos e desentupimento 24h.',
  openGraph: {
    title: 'Encanador Profissional em Goiânia — Soluções em Vazamentos',
    description: 'Encanador especializado em soluções de vazamentos. Quebramos parede, corrigimos 100% do problema e deixamos limpo. Reparos hidráulicos e desentupimento 24h.',
    url: `${_base}/servicos/encanador`,
    images: [{ url: `${_base}/services/encanador.jpg`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${_base}/servicos/encanador` },
}

export default function EncanadorPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <ServiceJsonLd
          name="Encanador Profissional"
          description="Encanador especializado em soluções de vazamentos. Quebramos parede, corrigimos 100% do problema e deixamos limpo. Reparos hidráulicos e desentupimento 24h em Goiânia."
          provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
          serviceType="encanador"
          areaServed="Goiânia, GO"
          priceRange="R$120 - R$900"
          image={'/services/encanador.jpg'}
        />
        <div className="layout-container flex h-full grow flex-col">
          {/* Hero Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#0d47a1] z-0" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl font-display">
                    Soluções em Vazamentos em Goiânia
                  </h1>
                  <h2 className="text-white/90 text-lg font-normal leading-normal max-w-2xl mx-auto sm:text-xl">
                    Seu vazamento está à vista? Quebramos a parede, corrigimos 100% do problema e deixamos tudo limpo e restaurado. Atendimento 24 horas para emergências.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                    className="btn-whatsapp"
                  >
                    <FaWhatsapp size={20} aria-hidden="true" />
                    <span className="truncate">Chamar no WhatsApp</span>
                  </a>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para serviços de encanador em Goiânia. Poderiam me ajudar?')}`}
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
            {/* background replaced with solid blue for contrast (no image) */}
          </div>

          <main className="flex flex-col items-center">
            <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-16 sm:gap-20">
              {/* Resumo de Destaques */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-[#0d47a1] text-4xl"><MdSchedule size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Atendimento 24h</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Emergências a qualquer hora do dia ou da noite. Chegamos rápido.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-[#0d47a1] text-4xl"><MdRequestQuote size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Orçamento sem Compromisso</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Avaliação justa e transparente antes de iniciar qualquer serviço.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-[#0d47a1] text-4xl"><MdVerified size={36} aria-hidden="true" /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Garantia de Serviço</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Tranquilidade com a nossa garantia de qualidade em todos os reparos.</p>
                  </div>
                </div>
              </section>

              {/* Por que nos escolher */}
              <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1">
                  <img alt="Encanador profissional em Goiânia" className="rounded-xl object-cover w-full h-auto aspect-square md:aspect-auto" src="/sobre-nos.avif" />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <h2 className="text-[#0d47a1] dark:text-secondary text-sm font-bold uppercase tracking-wider font-display">Nossos Diferenciais</h2>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display">Por que Confiar na Nossa Solução de Vazamentos?</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className="text-[#0d47a1] flex items-center justify-center rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 shrink-0 size-12 mt-1">
                        <MdGroups className="text-[#0d47a1]" size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Solução Completa e Definitiva</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Não apenas identificamos, mas resolvemos 100% do problema. Quebramos parede se necessário, corrigimos a raiz do vazamento e restauramos o local com acabamento de qualidade.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#0d47a1] flex items-center justify-center rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 shrink-0 size-12 mt-1">
                        <MdConstruction className="text-[#0d47a1]" size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Limpeza e Restauração Garantidas</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Após a correção do vazamento, fazemos a limpeza completa do ambiente. Você recebe seu espaço limpo, organizado e como se nada tivesse acontecido.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#0d47a1] flex items-center justify-center rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 shrink-0 size-12 mt-1">
                        <MdSpeed className="text-[#0d47a1]" size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Execução Rápida e Eficiente</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Nossa equipe trabalha com agilidade e precisão. Minimizamos o tempo de interrupção do seu dia e maximizamos a qualidade do reparo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Atendimento Emergencial 24 Horas */}
              <section className="bg-[#0d47a1] text-white rounded-xl p-8 sm:p-12 text-center flex flex-col items-center gap-4">
                <div className="text-5xl sm:text-6xl text-white"><MdEmergency className="text-5xl sm:text-6xl text-white" size={76} aria-hidden="true" /></div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display">Atendimento Emergencial 24 Horas</h2>
                <p className="max-w-2xl text-lg sm:text-xl">Vazamentos, entupimentos ou qualquer problema hidráulico urgente? Nossa equipe está de plantão em Goiânia 24/7 para te atender.</p>
                <a
                  href={process.env.NEXT_PUBLIC_EMERGENCY_TEL ?? 'tel:+5562991157746'}
                  aria-label="Ligar para emergência agora"
                  className="mt-4 inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-white text-[#0d47a1] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-slate-100 transition-colors gap-3"
                >
                  <MdCall className="text-[#0d47a1]" size={20} aria-hidden="true" />
                  <span className="truncate">Ligar Para Emergência Agora</span>
                </a>
              </section>

              {/* Nossos Serviços */}
              <section className="flex flex-col gap-8 items-center">
                <div className="text-center max-w-2xl">
                  <h2 className="text-[#0d47a1] dark:text-secondary text-sm font-bold uppercase tracking-wider font-display">Soluções Completas</h2>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display mt-2">Serviços de Encanador em Goiânia</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-lg mt-4">Além de soluções em vazamentos, oferecemos uma gama completa de serviços hidráulicos para residências e empresas:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdWaterDrop className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Soluções em Vazamentos</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Seu vazamento já está à vista? Nós quebramos a parede, corrigimos 100% do problema hidráulico e deixamos o ambiente limpo e restaurado, como se nada tivesse acontecido.</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdPlumbing className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Desentupimento</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Soluções para desentupir pias, ralos, vasos sanitários, esgotos e colunas com máxima eficiência.</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdBuild className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Reparos Hidráulicos</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Conserto de torneiras, registros, descargas, sifões e qualquer componente do seu sistema hidráulico.</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdShower className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Instalações</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Instalação de chuveiros, torneiras, caixas d'água, filtros e montagem de novas redes de água e esgoto.</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdCleaningServices className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Limpeza de Caixa d'Água</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Higienização e desinfecção de reservatórios de água, garantindo a qualidade da água consumida.</p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                    <div className="text-[#0d47a1]"><MdLocalFireDepartment className="text-3xl text-[#0d47a1]" size={28} aria-hidden="true" /></div>
                    <h4 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">Hidrantes e Sprinklers</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Manutenção e instalação de sistemas de combate a incêndio para condomínios e empresas.</p>
                  </div>
                </div>
              </section>

              <TestimonialsSection />

              {/* Nosso Processo */}
              <section className="flex flex-col gap-8 items-center">
                <div className="text-center max-w-2xl">
                  <h2 className="text-[#0d47a1] dark:text-secondary text-sm font-bold uppercase tracking-wider font-display">Como Trabalhamos</h2>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display mt-2">Nosso Processo de Atendimento</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-lg mt-4">Simples, rápido e transparente. Veja como é fácil resolver seu problema hidráulico conosco.</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex items-center justify-center size-16 rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 text-[#0d47a1] dark:text-secondary text-2xl font-bold">1</div>
                    <h4 className="font-bold text-xl">Contato Inicial</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark">Você nos liga ou manda uma mensagem descrevendo o problema. Agendamos a visita no melhor horário para você.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex items-center justify-center size-16 rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 text-[#0d47a1] dark:text-secondary text-2xl font-bold">2</div>
                    <h4 className="font-bold text-xl">Visita e Orçamento</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark">Nosso técnico avalia a situação no local e apresenta um orçamento detalhado e sem compromisso.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex items-center justify-center size-16 rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 text-[#0d47a1] dark:text-secondary text-2xl font-bold">3</div>
                    <h4 className="font-bold text-xl">Execução do Serviço</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark">Com sua aprovação, o serviço é realizado com máxima eficiência, limpeza e segurança.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex items-center justify-center size-16 rounded-full bg-[#0d47a1]/10 dark:bg-secondary/10 text-[#0d47a1] dark:text-secondary text-2xl font-bold">4</div>
                    <h4 className="font-bold text-xl">Finalização e Garantia</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark">Após a conclusão, garantimos que tudo está funcionando perfeitamente e emitimos sua garantia.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="w-full max-w-3xl mx-auto flex flex-col gap-8 items-center">
                <div className="text-center">
                  <h2 className="text-[#0d47a1] dark:text-secondary text-sm font-bold uppercase tracking-wider font-display">Dúvidas Comuns</h2>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display mt-2">Perguntas Frequentes</h3>
                </div>
                <div className="w-full flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
                  <details className="group py-4" open>
                    <summary className="flex cursor-pointer items-center justify-between">
                      <h4 className="text-lg font-medium">Vocês oferecem garantia nos serviços?</h4>
                      <MdExpandMore className="transition-transform group-open:rotate-180 text-[#0d47a1]" aria-hidden="true" />
                    </summary>
                    <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Sim, todos os nossos serviços possuem garantia de 90 dias, conforme o código de defesa do consumidor. Queremos que você tenha total tranquilidade.</p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex cursor-pointer items-center justify-between">
                      <h4 className="text-lg font-medium">Quais formas de pagamento vocês aceitam?</h4>
                      <MdExpandMore className="transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamos em até 3x sem juros). Faturamos também para empresas.</p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex cursor-pointer items-center justify-between">
                      <h4 className="text-lg font-medium">Em quanto tempo vocês chegam para uma emergência?</h4>
                      <MdExpandMore className="transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Para chamados de emergência em Goiânia, nosso tempo médio de chegada é de 40 a 60 minutos, dependendo do trânsito e da sua localização.</p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex cursor-pointer items-center justify-between">
                      <h4 className="text-lg font-medium">O orçamento para visita é cobrado?</h4>
                      <MdExpandMore className="transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Não. A visita e o orçamento são totalmente gratuitos e sem compromisso dentro do perímetro urbano de Goiânia.</p>
                  </details>
                </div>
              </section>

              {/* Contato Final removido - formulário movido fora das páginas de serviço */}
            </div>
          </main>

        </div>
        <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Encanador.`} />
      </div>
    </main>
  )
}
