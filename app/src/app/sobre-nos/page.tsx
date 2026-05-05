import React from 'react'
import ReviewsStructuredData from '../../components/ReviewsStructuredData'
import TestimonialsSection from '../../components/TestimonialsSection'

export const metadata = {
  title: 'Sobre Nós — Grupo LF',
  description: 'Conheça o Grupo LF — nossa história, missão, valores e equipe dedicada a entregar serviços de qualidade em Goiânia.',
  openGraph: {
    title: 'Sobre Nós — Grupo LF',
    description: 'Conheça o Grupo LF — nossa história, missão, valores e equipe dedicada a entregar serviços de qualidade em Goiânia.',
    url: 'https://servicoslf.com.br/sobre-nos',
    images: [
      { url: 'https://servicoslf.com.br/og-sobre-nos-1200x630.svg', width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: 'https://servicoslf.com.br/sobre-nos' },
}

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
        {/* Inline Organization JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Grupo LF',
              url: 'https://servicoslf.com.br',
              logo: 'https://servicoslf.com.br/logo-lf.png',
              contactPoint: [{ '@type': 'ContactPoint', telephone: '(62) 99115-7746', contactType: 'customer service', areaServed: 'BR' }],
              sameAs: [],
            }),
          }}
        />
        <ReviewsStructuredData />

        <div className="layout-container flex h-full grow flex-col">
          {/* Hero */}
          <section className="relative">
            <div className="flex min-h-[60vh] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center" data-alt="Equipe de manutenção trabalhando em conjunto em um ambiente profissional." style={{ backgroundImage: 'linear-gradient(rgba(26, 58, 90, 0.7) 0%, rgba(26, 58, 90, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkIwDtfQ7yZNZgeSW4qWELDpSBQ02ydNWT9gW_nqBq1xkXLmRbr7QECaz_ZumMLBPN9ctXjOx1OhnvdE0491mv9uyhcO_dO8YnFKZjtHIIw1QYXQiuk1uXsfif-LrnN4KQ4oRLAUBooTF-EPXXfo9P1vfTB7o2dkeXS-4jzuCAvE9xn_gOyzR1d2C2tT4AvYvwyoddGix_jGAY8a3hEl9x7iJAqBXGVLTzZUMzNJFP_lacDJ6uVgyeG8ewbzMdImFZTAMUXCYDoQ")' }}>
              <div className="flex flex-col gap-2 max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Construindo Confiança em Cada Serviço em Goiânia</h1>
                <p className="text-slate-200 text-base font-normal leading-normal md:text-lg">Nascemos da paixão por servir nossa cidade com excelência, combinando técnica e atendimento humano.</p>
              </div>
            </div>
          </section>

          {/* Main content container (mirror HTML layout) */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-32">
            {/* Missão & Valores */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">Nossa Missão &amp; Valores</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Os pilares que guiam nosso trabalho todos os dias.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center items-center">
                  <span className="material-symbols-outlined text-4xl text-secondary">workspace_premium</span>
                  <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Qualidade</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Utilizamos os melhores materiais e técnicas para garantir um serviço impecável e duradouro.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center items-center">
                  <span className="material-symbols-outlined text-4xl text-secondary">health_and_safety</span>
                  <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Segurança</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Nossos profissionais seguem rigorosos protocolos de segurança para sua tranquilidade.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center items-center">
                  <span className="material-symbols-outlined text-4xl text-secondary">schedule</span>
                  <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Pontualidade</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Respeitamos seu tempo e cumprimos os prazos combinados com eficiência e organização.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center items-center">
                  <span className="material-symbols-outlined text-4xl text-secondary">support_agent</span>
                  <h3 className="text-primary dark:text-white text-lg font-bold leading-tight">Atendimento</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Ouvimos suas necessidades para oferecer soluções que realmente atendam suas expectativas.</p>
                </div>
              </div>
            </section>

            {/* Nossa História */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">Nossa História</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Uma jornada de dedicação e crescimento.</p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2 hidden sm:block" />
                <div className="space-y-12 sm:space-y-0">
                  <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-12">
                    <div className="sm:text-right sm:pr-12">
                      <span className="block text-secondary font-bold text-lg">2015</span>
                      <h3 className="mt-1 text-xl font-bold text-primary dark:text-white">A Fundação</h3>
                      <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Começamos com uma pequena equipe e um grande sonho: oferecer os melhores serviços de manutenção de Goiânia.</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-secondary ring-8 ring-background-light dark:ring-background-dark" />
                    </div>
                  </div>

                  <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-12">
                    <div className="sm:col-start-2 sm:pl-12">
                      <span className="block text-secondary font-bold text-lg">2018</span>
                      <h3 className="mt-1 text-xl font-bold text-primary dark:text-white">Expansão de Serviços</h3>
                      <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Expandimos nossa atuação, incluindo serralheria e vidraçaria para atender a uma gama completa de necessidades.</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center sm:col-start-1 sm:row-start-1">
                      <div className="h-4 w-4 rounded-full bg-secondary ring-8 ring-background-light dark:ring-background-dark" />
                    </div>
                  </div>

                  <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-12">
                    <div className="sm:text-right sm:pr-12">
                      <span className="block text-secondary font-bold text-lg">2022</span>
                      <h3 className="mt-1 text-xl font-bold text-primary dark:text-white">Reconhecimento</h3>
                      <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Alcançamos a marca de 1.000 clientes satisfeitos e fomos reconhecidos pela qualidade do nosso atendimento local.</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-secondary ring-8 ring-background-light dark:ring-background-dark" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* O Que Nos Diferencia */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">O Que Nos Diferencia</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Compromissos que fazem a diferença no seu projeto.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-3">request_quote</span>
                  <h3 className="font-bold text-lg text-primary dark:text-white">Orçamento Transparente</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Sem surpresas. Nossos orçamentos são detalhados e claros desde o início.</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-3">verified_user</span>
                  <h3 className="font-bold text-lg text-primary dark:text-white">Garantia de Serviço</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Confiamos em nosso trabalho. Por isso, oferecemos garantia em todos os serviços prestados.</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-3">badge</span>
                  <h3 className="font-bold text-lg text-primary dark:text-white">Profissionais Certificados</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Nossa equipe é formada por especialistas qualificados e em constante treinamento.</p>
                </div>
              </div>
            </section>

            {/* Nossa Equipe em Ação */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">Nossa Equipe em Ação</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">O rosto por trás da qualidade que entregamos.</p>
              </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-4/5" data-alt="Membros da equipe de manutenção discutindo um projeto." src="/services/montador-de-moveis.jpg" /></div>
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-square" data-alt="Eletricista trabalhando em um painel elétrico." src="/services/eletricista.jpg" /></div>
                </div>
                <div className="grid gap-4">
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-square" data-alt="Pintor aplicando tinta em uma parede com cuidado." src="/services/pintor.jpg" /></div>
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-4/5" data-alt="Dois profissionais da equipe sorrindo para a câmera." src="/services/marido-de-aluguel.jpg" /></div>
                </div>
                <div className="grid gap-4">
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-4/5" data-alt="Encanador consertando um vazamento sob uma pia." src="/services/encanador.jpg" /></div>
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-square" data-alt="Membro da equipe apresentando um plano para um cliente." src="/services/serralheiro.jpg" /></div>
                </div>
                <div className="grid gap-4">
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-square" data-alt="Gesseiro finalizando a instalação de um teto de gesso." src="/services/gesseiro.jpg" /></div>
                  <div><img className="h-auto max-w-full rounded-lg object-cover aspect-4/5" data-alt="Reunião de equipe para planejar a semana." src="/services/vidraceiro.jpg" /></div>
                </div>
              </div>
            </section>

            <TestimonialsSection />

            {/* CTA */}
            <section className="text-center bg-primary dark:bg-secondary rounded-xl py-12 px-6">
              <h2 className="text-white dark:text-primary text-3xl font-bold tracking-tight">Pronto para Realizar seu Projeto?</h2>
              <p className="mt-2 text-slate-200 dark:text-slate-800 max-w-2xl mx-auto">Fale com nossos especialistas e receba um orçamento gratuito e sem compromisso. Estamos aqui para ajudar a transformar seu ambiente.</p>
              <button className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white dark:bg-primary text-primary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-100 dark:hover:bg-primary-hover transition-colors">
                <span className="truncate">Fale Conosco Agora</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
