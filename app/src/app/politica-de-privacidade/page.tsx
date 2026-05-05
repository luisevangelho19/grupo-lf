import React from 'react'
import TestimonialsSection from '../../components/TestimonialsSection'

export const metadata = {
  title: 'Política de Privacidade — Grupo LF',
  description: 'Política de Privacidade do Grupo LF — veja como coletamos, usamos e protegemos suas informações em Goiânia.',
  openGraph: {
    title: 'Política de Privacidade — Grupo LF',
    description: 'Política de Privacidade do Grupo LF — veja como coletamos, usamos e protegemos suas informações em Goiânia.',
    url: 'https://servicoslf.com.br/politica-de-privacidade',
    images: [
      { url: 'https://servicoslf.com.br/og-politica-1200x630.svg', width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: 'https://servicoslf.com.br/politica-de-privacidade' },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="layout-content-container flex flex-col max-w-4xl w-full flex-1">
          <div className="flex flex-wrap justify-center text-center gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Nossa Política de Privacidade</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Última atualização: 24 de Julho de 2024</p>
            </div>
          </div>

          <div className="p-4 mt-8 @container">
            <div className="flex flex-col items-stretch justify-start gap-4 md:gap-6 rounded-xl bg-white dark:bg-background-dark border border-light p-6 md:p-8">
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1">
                <p className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Resumo da nossa política</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Para facilitar, aqui estão os pontos mais importantes que você precisa saber. Para detalhes completos, continue lendo abaixo.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-1 gap-3 rounded-lg border border-light bg-background-light dark:bg-background-dark p-4 flex-col">
                  <div className="text-accent"><span className="material-symbols-outlined">database</span></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Coleta de Dados</h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Coletamos apenas os dados essenciais para fornecer nossos serviços.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light bg-background-light dark:bg-background-dark p-4 flex-col">
                  <div className="text-accent"><span className="material-symbols-outlined">check_circle</span></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Uso das Informações</h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Usamos seus dados para agendar serviços e melhorar sua experiência.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light bg-background-light dark:bg-background-dark p-4 flex-col">
                  <div className="text-accent"><span className="material-symbols-outlined">manage_accounts</span></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Seus Direitos</h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Você tem total controle sobre seus dados e pode solicitar acesso ou exclusão.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-light bg-background-light dark:bg-background-dark p-4 flex-col">
                  <div className="text-accent"><span className="material-symbols-outlined">lock</span></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Segurança dos Dados</h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Protegemos suas informações com medidas de segurança robustas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 mt-8 space-y-6">
            <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b border-gray-200 dark:border-gray-700">Detalhes da Política</h2>

            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span className="text-text-light-primary dark:text-text-dark-primary font-bold">1. Quais dados coletamos e por quê?</span><span className="transition group-open:rotate-180 text-accent"><span className="material-symbols-outlined">expand_more</span></span></summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e endereço, quando solicita um orçamento ou serviço. Também coletamos dados de navegação, como endereço IP e páginas visitadas, para melhorar a funcionalidade do nosso site e entender as necessidades dos nossos clientes.</div>
            </details>

            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span className="text-text-light-primary dark:text-text-dark-primary font-bold">2. Como usamos suas informações?</span><span className="transition group-open:rotate-180 text-accent"><span className="material-symbols-outlined">expand_more</span></span></summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">Utilizamos seus dados para: (a) agendar e realizar os serviços solicitados; (b) nos comunicar sobre o andamento dos serviços; (c) enviar orçamentos e informações relevantes; (d) melhorar nossos serviços e site; e (e) cumprir obrigações legais.</div>
            </details>

            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span className="text-text-light-primary dark:text-text-dark-primary font-bold">3. Uso de Cookies</span><span className="transition group-open:rotate-180 text-accent"><span className="material-symbols-outlined">expand_more</span></span></summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">Nosso site utiliza cookies para melhorar sua experiência. Cookies são pequenos arquivos de texto que armazenam suas preferências. Usamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você interage com nossas páginas. Você pode gerenciar suas preferências de cookies a qualquer momento.</div>
            </details>

            <details className="group rounded-lg bg-white dark:bg-background-dark p-4 border border-light">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span className="text-text-light-primary dark:text-text-dark-primary font-bold">4. Seus Direitos como Titular dos Dados</span><span className="transition group-open:rotate-180 text-accent"><span className="material-symbols-outlined">expand_more</span></span></summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">De acordo com a LGPD, você tem o direito de: confirmar a existência de tratamento de seus dados, acessar seus dados, corrigir dados incompletos, solicitar a anonimização ou eliminação de dados, e revogar o consentimento. Para exercer seus direitos, entre em contato conosco.</div>
            </details>

          </div>

          <div className="p-4 mt-8">
            <div className="rounded-xl bg-primary/10 dark:bg-primary/20 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="text-primary dark:text-accent text-4xl mt-1"><span className="material-symbols-outlined">contact_mail</span></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary dark:text-white text-xl font-bold">Fale com nosso Encarregado de Proteção de Dados (DPO)</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">Para dúvidas sobre esta política ou para exercer seus direitos, entre em contato com nosso DPO através do e-mail:</p>
                <a className="font-bold text-accent hover:underline" href="mailto:contato@servicoslf.com.br">contato@servicoslf.com.br</a>
              </div>
            </div>
          </div>

          <TestimonialsSection />

        </div>
      </div>
    </main>
  )
}
