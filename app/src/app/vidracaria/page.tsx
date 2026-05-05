import React from 'react'
import TestimonialsSection from '~/components/TestimonialsSection'

const SITE_TITLE = 'Vidraçaria — Grupo LF'
const SITE_DESCRIPTION = 'Soluções completas em vidraçaria em Goiânia. Projetos, instalação de boxes, portas, janelas, espelhos e envidraçamento com garantia e segurança.'

export async function generateMetadata() {
  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  const title = SITE_TITLE
  const description = SITE_DESCRIPTION
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${_base}/vidracaria`,
      images: [
        { url: `${_base}/sobre-nos.avif`, width: 1200, height: 630 },
        { url: `${_base}/services/vidraceiro.jpg`, width: 1200, height: 1200 },
      ],
    },
    alternates: { canonical: `${_base}/vidracaria` },
  }
}

export default function VidracariaStandalonePage() {
  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grupo LF',
    url: _base,
    logo: _base + '/logo lf.avif',
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+55 62 99115-7746', contactType: 'customer service', areaServed: 'BR' },
    ],
  }

  const webpageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: _base + '/vidracaria',
    inLanguage: 'pt-BR',
    isPartOf: { '@type': 'WebSite', 'url': _base, 'name': 'Grupo LF' },
  }

  const pageStyle: React.CSSProperties = {
    // scoped CSS variables to make this page match the original HTML reference
    ['--primary' as any]: '#137fec',
    ['--background-light' as any]: '#f6f7f8',
    ['--background-dark' as any]: '#101922',
    fontFamily: "'Manrope', 'sans-serif'",
  }

  return (
    <div style={pageStyle} className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* local font + helper style (keeps visual parity with original HTML) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }} />

      {/* Conteúdo convertido do HTML fornecido pelo usuário (fiel ao layout). */}
      <div className="layout-container flex h-full grow flex-col">
            {/* TopNavBar (local a esta página, não o Header global) */}
            <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
              <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 w-full max-w-6xl">
                <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
                  <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                  </div>
                  <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">Vidraçaria Logo</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <nav className="flex items-center gap-9">
                    <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#servicos">Serviços</a>
                    <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#portfolio">Portfólio</a>
                    <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#depoimentos">Depoimentos</a>
                    <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#contato">Contato</a>
                  </nav>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Solicitar Orçamento via WhatsApp</span>
                  </button>
                </div>
                <div className="md:hidden">
                  <button className="text-slate-900 dark:text-slate-50">
                    <span className="material-symbols-outlined">menu</span>
                  </button>
                </div>
              </div>
            </header>

            <main className="flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-0">
                {/* HeroSection */}
                <section className="w-full @container">
                  <div className="@[480px]:p-4">
                    <div className="flex min-h-[60vh] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" data-alt="Close-up of a modern glass facade on a commercial building reflecting the sky" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(16,25,34,0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMHtgH1kKT-YCH-CIdLAaNsIxoWqaNH4SyP2Xvtqgc7YVDPvzqDUVuq32TMxhBa4mBla5yvon6jXkAyP6rVu3GweD8zVs1_50ZREURGIhMeb-nV17FeuGW3xtbl6VWHq0NIX_MLNUpoc8IIKCgH6iRVd_WsLdw_FrJlPWGny1oU9YQkTDb0nOHGRjpNV7lWLTE7-feny4f_xzmD94EnfahcxzeRWLP3OIHKlyHpO34hInbd5R_dr4l2NKR6XjuAh5uVfmQCL010Npp')` }}>
                      <div className="flex flex-col gap-2 text-left max-w-2xl">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Soluções Inovadoras em Vidro para seu Espaço</h1>
                        <h2 className="text-gray-200 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Instalação e reparo de vidros com máxima qualidade e segurança para projetos residenciais e comerciais. Atendimento especializado para transformar seu ambiente.</h2>
                      </div>
                      <div className="flex-wrap gap-3 flex">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
                          <span className="truncate">Nossos Serviços</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-slate-50 dark:bg-slate-200 text-slate-900 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-300 transition-colors">
                          <span className="truncate">Fale Conosco</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                <section className="w-full" id="servicos">
                  <h2 className="text-slate-900 dark:text-slate-50 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Serviços Especializados</h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
                    <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                      <span className="material-symbols-outlined text-primary">shield</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Vidros Temperados</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Máxima segurança e resistência para portas, janelas e divisórias.</p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                      <span className="material-symbols-outlined text-primary">shower</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Box para Banheiro</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Designs modernos e funcionais que valorizam seu banheiro.</p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                      <span className="material-symbols-outlined text-primary">table_rows</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Esquadrias de Alumínio</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Estruturas duráveis e com acabamento perfeito para portas e janelas.</p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                      <span className="material-symbols-outlined text-primary">balcony</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Envidraçamento de Sacadas</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Amplie e proteja seus ambientes com sistemas de envidraçamento sofisticados.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Us Section */}
                <section className="w-full">
                  <div className="flex flex-col gap-10 px-4 py-10 @container">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-slate-900 dark:text-slate-50 tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Por que nos Escolher?</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">Combinamos tradição e inovação para oferecer os melhores resultados, garantindo sua total satisfação em cada etapa do projeto.</p>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-0">
                      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                        <span className="material-symbols-outlined text-primary">military_tech</span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Experiência Comprovada</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Mais de 15 anos de atuação no mercado, entregando projetos com excelência.</p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Qualidade e Segurança</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Utilizamos materiais de ponta e seguimos as mais rigorosas normas técnicas.</p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                        <span className="material-symbols-outlined text-primary">groups</span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Atendimento Personalizado</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Nossa equipe está pronta para entender suas necessidades e propor as melhores soluções.</p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-4 flex-col">
                        <span className="material-symbols-outlined text-primary">thumb_up</span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-50 text-base font-bold leading-tight">Garantia de Serviço</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Oferecemos garantia completa em todos os nossos serviços e instalações.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Gallery Section */}
                <section className="w-full px-4 py-10" id="portfolio">
                  <div className="flex flex-col gap-4 mb-8">
                    <h2 className="text-slate-900 dark:text-slate-50 text-center text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Nossos Projetos Recentes</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto text-center">Veja alguns dos trabalhos que realizamos e inspire-se para o seu próximo projeto.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                      <img alt="Modern office interior with glass partitions and doors." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ySqvfPqZlT47hwlaiL7Bz_qKzfblTDCrewlzl3X5VzsMZDLoaYBrAlnLvKDYVmgZVCYjPpozr-DShFZEe9mbi0kbkH2GuR6XcUKAj3y1rWt0eC5CKIW9a7jv9gDtdVrXdEacLSh0eUmVi_dVEX7n2ViuHy5D4Tmr_9pGn1d2NiUSd6x-X0Rj70DjWDUg3pg00dRbB-OVU9S2oBDUkQa4exY4pj0ohPdYpAJ3mfknr6k8TzoURM83WhwVCNK_TZSoJn5Fi-neuuzM" />
                      <img alt="Residential bathroom with a sleek glass shower enclosure." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwnAYSHVQr0Wo_57hQ4sqvI-sbGY8h5kz8NSEQkmSzzeJBwyFe0QuqgC4wjAw87lVdbSFiFoZgwFWP6nKtIo_NYp9FknyhdFReR3CyBpieAFskcgASXw37BaLvDr7EmetH1BQNBXbi-_FSQ5Fwy25iqgD519-DgbHQHLfa9msgMX-F6EtK7U2uYCFHDfQxulhQC76leiTabKxyVRZoHywMLdZCWOeCpL4LSVkVxnqaZyOlr50j4fPCEoP3eKw-J8yh6Smu5hNiWJtC" />
                    </div>
                    <div className="grid gap-4">
                      <img alt="A beautiful balcony enclosed with a frameless glass system." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0PLS7TSYo7e9CX33D6ddtFAMlANQnow8EbXPbZ5t_d4gDmPIVcbagShMaWMCrjr3Mnr2WrEnfEqrG7_Ss5aTUkZ6AZmpd0BOb_HSBGAR4Jug1lAm1objZyQTroICeulQzQiZUOWlNhLJD97t5u1JUBnliPB0FeEGhmnsw_d206FLTj-7Y1l2Fg5yXl0Dn21DWKWvu5-dmoIpVGYhCLzdWbtBmcPsDr7xYsSaxF-QMrsCx8dOoYsOEDMuS74FzWAXabozCxb6FDUh" />
                      <img alt="Custom-made mirror installed in a modern living room." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIaYaKH2H7nMlWh61xa3Wc4wxKKKVzok67BjyqoIPjshxkBwSMXG4JZXW533ilMocq82hwcJQEA2I3Exx6CLt2SiLlzh9mzBsZ9TCCfjL_aHA8h2rUFZFa5Sr0nF8nB93xkIJ9nVfwvBZ6hEI2rBkiY2nE9KEIPW5ZT4QbcFUg98hzYnDJ4hNYz2--oJDb0WxYw2scY8-V1_5fXdWOPvSX_AyX_9QGBET_E_k4VQFdZEEyEBnglQK_9C9wndlJIgv9jr6Ys1ro-lIw" />
                    </div>
                    <div className="grid gap-4">
                      <img alt="Aluminum and glass window frame installation." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrEi2BBnLKv1CFLpntm2Z536GbRT-5D3-wCqD6jyDQ2DlFBvlRN5Dq6rQ9zmIUw9JiQpu7FsW7shagJNt2jdZwey6uyWz8eDTDUe-wM8wFV_hxVaKLnEiVZx9ZEvVtDa3Cd1nxExzMAvttRWELzTrk-o4ghaPEsXvh2DbjJS-eNj0D9u7hQ2DAgYv_FIaLaN73WQj2gXF_UBetH1pMLzQpyvVZGGJI3Me5DgJP1ZZt1g4uLlD04SPXz5S1Ee9mbRHl8N5M6SvZDlJ" />
                      <img alt="Clean and minimalist bathroom featuring a glass shower door." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6WZvYpRAZorNZ_uCPHZ5Tc_zYojg2HPnCVVGOs_maKo-b5wPb-pTfZSyHNtiFAIQZ3Db66UKwp6OvBlz0eU0tVww3YCOf4NZWUeQFXg68f6V8ARedkFIydZ8rdPgpJC-eH70ttG5Bzqtb8uDEF2q96g4KPU4udytucfKEL_Cb7mhp6r9s3ltJBCOm2i_qlgPZCZ91T3TA9T3QOmvMIWMdGrqiSi6Z63mmQyjdz6QD57eJSWk8rEYD92B5klW80NdavlstG0era_M" />
                    </div>
                    <div className="grid gap-4">
                      <img alt="Elegant glass railing on a staircase in a contemporary home." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXIPfn3VCUsuBzNJ5C9jqibLyZRFMyQGGyk8SQJ2p4J35zeNPyVr4lbrVdEVviezeozJ_cV8iRJEYDp19PvLydyKZDH70KDOquJiG0pF7uQL0ZwsTx2P44s_rCaH7cf9ckcqrqHCmgRbCLG4k01uPPt_FwN4kHw4b1as28JJf5EqnaSLpYsYlJRQRaPXdNDBOALs_OJmRSIQn9QU9v7qPgnbgVEswQIT4LMWVjJxebS8dYEgqiiElQBgTXqiBAAyA1GmydzOjGsuN" />
                      <img alt="Exterior view of a house with large, modern glass windows." className="h-auto max-w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEBJBZUaemqrZQ-NQLmMjeazioS0WM4d0eLl979TibzdwivC1itzaopKO4qBNkV520F-Hg7J0xCdf94Fgf2QSC5AkRGORfTCtn1QxQ1s-P7lSIksAliEoVHv8nVkzv0WazCB5fnhnaxRi5VM0PhGxpB0xT30fOzeijuccR-Fyj6ZfrKAGwfVJYhDgFhFLh3YBTF8fIxa0LDzaIjwdmV_llcXrQbXoy8BvbZxKOWZ2WxZhwNcIHxM4nTyMSwtUEq2X-_olFr1Zz6WtV" />
                    </div>
                  </div>
                </section>

                <div id="depoimentos">
                  <TestimonialsSection />
                </div>
              </div>
            </main>

            {/* Footer (local a esta página) */}
            <footer className="w-full bg-white dark:bg-background-dark/50 border-t border-gray-200 dark:border-gray-800" id="contato">
              <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Fale com um especialista</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Pronto para transformar seu ambiente? Envie-nos uma mensagem ou ligue para nós.</p>
                    <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Enviar Mensagem no WhatsApp</span>
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Informações de Contato</h3>
                    <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2">location_on</span>Rua Fictícia, 123 - Cidade, Estado</li>
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2">call</span>(11) 98765-4321</li>
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2">mail</span>contato@vidracaria.com</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Horário de Funcionamento</h3>
                    <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Segunda a Sexta: 8:00 - 18:00</li>
                      <li>Sábado: 8:00 - 12:00</li>
                      <li>Domingo: Fechado</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400">
                  <p>© 2024 Vidraçaria Logo. Todos os direitos reservados.</p>
                </div>
              </div>
            </footer>
          </div>
    </div>
  )
}
