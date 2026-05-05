import React from 'react'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'
import { FaWhatsapp } from 'react-icons/fa'
import { getServiceBySlug } from '~/lib/content'
import { MdVerifiedUser, MdArchitecture, MdWorkspacePremium, MdCheckCircle, MdCall, MdEmail, MdLocationOn } from 'react-icons/md'

export async function generateMetadata() {
  const data = await getServiceBySlug('serralheiro')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Serralheiro Profissional — Grupo LF'
  const description = fm.description ?? 'Serralheiro em Goiânia — portões, grades e estruturas metálicas sob medida com qualidade e garantia.'
  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${_base}/servicos/serralheiro`,
      images: [{ url: `${_base}/services/serralheiro.jpg`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `${_base}/servicos/serralheiro` },
  }
}

export default async function SerralheiroPage() {
  const data = await getServiceBySlug('serralheiro')
  const fm = data?.frontmatter ?? {}
  return (
    <main className="flex-1">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <ServiceJsonLd
            name={fm.title ?? 'Serralheiro Profissional'}
            description={fm.description}
            provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
            serviceType={fm.slug ?? 'serralheiro'}
            areaServed={fm.areaServed}
            priceRange={fm.priceRange}
            image={fm.image ?? '/services/serralheiro.jpg'}
          />
          <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Serralheiro.`} />
          {/* Hero Section - match Encanador page layout */}
          <div className="relative">
            <div className="absolute inset-0 bg-black z-0" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl font-display">
                    Serralheiro Profissional em Goiânia
                  </h1>
                  <h2 className="text-white/90 text-lg font-normal leading-normal max-w-2xl mx-auto sm:text-xl">
                    Portões, grades e estruturas metálicas sob medida — segurança, acabamento e garantia.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços de serralheria (portões, grades, estruturas metálicas).')}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                    className="btn-whatsapp"
                  >
                      <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                    <span className="truncate">Chamar no WhatsApp</span>
                  </a>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para serralheria em Goiânia.')}`}
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

          {/* content container (match Encanador layout structure) */}
          <main className="flex flex-col items-center">
            <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-16 sm:gap-20">
              {/* Resumo de Destaques */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-3xl text-primary"><MdVerifiedUser aria-hidden="true" style={{ fontSize: '32px' }} /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Técnicos Certificados</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Nossa equipe é formada por profissionais qualificados e experientes.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-3xl text-primary"><MdArchitecture aria-hidden="true" style={{ fontSize: '32px' }} /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Materiais de Alta Qualidade</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Utilizamos apenas metais e acabamentos de primeira linha para máxima durabilidade.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <div className="text-3xl text-primary"><MdWorkspacePremium aria-hidden="true" style={{ fontSize: '32px' }} /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-strong text-xl font-bold leading-tight font-display">Garantia Total</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Oferecemos garantia completa em todos os nossos serviços e instalações.</p>
                  </div>
                </div>
              </section>

              {/* Nossos Serviços */}
              <section className="flex flex-col gap-8 items-center">
            <h2 className="text-strong text-3xl font-bold leading-tight tracking-[-0.015em] pb-5 text-center">Nossos Serviços de Serralheria</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full">
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" aria-label="Portão automático" role="img" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTUSheXYU655n67UzgvVNYs0Ejt84TDdFOlwy5XSXRMmF7oVDqMJGNfWYlogzxyPa62uXMqbUAogYdh-wbjlgEfzE86bn_ngUQWpAIqAwVncx5Tj3Zgv7c31zGYDxLI0zMPg74nNPSbZag9lzQq6TPl7o_tlhPeh2muj_hmpFSJ0kDEnuRGmocgy4k0cBwVU6dUKCxD50xvRc7dQf101_9FAhwfHz-RLZ2gtiYSkeB1-MmuwQW5fD__anpqSsPEsI_biaCYRJ_XA")' }}></div>
                <div>
                  <h3 className="text-strong text-base font-medium leading-normal">Portões Automáticos</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Design e instalação de portões basculantes, deslizantes e pivotantes.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" aria-label="Grade de segurança" role="img" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-xEvrIbe8fikIMFmbJLdx_5dLjpvyBXom7wuAhzUal2IP7v_21-71DeAe8MDLM4oEbb6T2Tq4G7DJ27LRFzr9aRo25AE2C0ip_sTUbceambQ0l85iidgjZZBcGIyfnqkm_Qi9HmA21l8G_HuYD5_Cgg_MFMhXMmdZgl0lq1bzMJHsWMjZXXuluwnH2ScKRFCO49evs1nCzoHb65jtvH1hwIap0efovkInOGnfZ2HbHOpOTlN9IoboDLgg5GXLh0uL_pFCkE0N8g")' }}></div>
                <div>
                  <h3 className="text-strong text-base font-medium leading-normal">Grades de Segurança</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Proteção para janelas e muros com design que complementa sua fachada.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" aria-label="Porta robusta" role="img" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-WW6AuZ5EoeyeK4gDJ5-QELSmYzzL0jE_ajHhTmRMcIDGquKUXNoOQeIlxg4PaL509IghqzF26gaw1-E1YSIkB9UnXICDitZs5amXiGdVZxFHsrG1n0RV5bR_kTQUSNnKfXjQfLkWhOfAlSAA1CndsFZbw89_YMotplgj5RDhqdN3G4KyNOOqfH5cQLLZbHTZF3B34Ya6trvtv5eVu0triBj0g2EJ9E6ncumR-jmbCIPTWqE6V7eUa9_hwOKNbYcgPhkHWAwG2Q")' }}></div>
                <div>
                  <h3 className="text-strong text-base font-medium leading-normal">Portas de Metal</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Portas robustas e seguras para residências e comércios.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" aria-label="Estrutura metálica" role="img" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj7IM6BPdGuQqar5sC8SKlo_tl0560cmMZAlCne5EyGTmJAA3Q14hvXJdSjllu9P9aLve8e796qutLA-AJ_XrfZIOvShuVUxj-adszg_lEtPsTELd48yEjbiDlAtdLXJ5y00fDl56l_V8ipyRRDyAcR67Q13qdOHWjAjX1cxenzeVasUzttKGKVVKoGB7ujE3URW_2uSaCWp2qCSc2wykrdkJ2MsfYy4lBPVXJ6zY0kh1UHGqfervqtdMMXbuI5r4bhmimZojmMA")' }}></div>
                <div>
                  <h3 className="text-strong text-base font-medium leading-normal">Estruturas Metálicas</h3>
                  <p className="text-muted dark:text-gray-400 text-sm">Desenvolvimento de mezaninos, coberturas e projetos personalizados.</p>
                </div>
              </div>
            </div>
              </section>

              {/* Safety & Standards */}
              <section className="w-full bg-background-light dark:bg-background-dark/50 rounded-xl p-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-3 py-1 rounded-full mb-4">Segurança em Primeiro Lugar</span>
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] mb-4 text-strong dark:text-white">Qualidade e Conformidade Garantidas</h2>
                <p className="text-muted dark:text-gray-400 mb-6">Todos os nossos projetos seguem rigorosamente as normas técnicas da ABNT, garantindo não apenas um acabamento impecável, mas a máxima segurança e durabilidade para sua família ou negócio.</p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                    <MdCheckCircle aria-hidden="true" className="text-primary" />
                    <span className="text-strong dark:text-white">Conformidade com normas ABNT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdCheckCircle aria-hidden="true" className="text-primary" />
                    <span className="text-strong dark:text-white">Certificações de segurança</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdCheckCircle aria-hidden="true" className="text-primary" />
                    <span className="text-strong dark:text-white">Materiais com laudo de qualidade</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" aria-label="Serralheiro soldando" role="img" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvJiXfIBzDV5GNQ_NNbFeGG85YrJsjg6ZwYNIqEYUoCaHLio8sRFHP3euMLXQciSSUQenag_MlgYFdqLSjSeqv6oeOPqvOIMgh6W-ItP9lXVbnMfqGla2_hhVP7qPNhBl2Moof4-OWe0WZQA36sLYaj0QAxV__82Y3cEf0y4eF4Ac-eDQDNYX1V03O9Qvvd59G2GIClomENpI12jvcZFH__fEj4i0StRjauDGcTilpsHoqk8DyZQi0Bgw1N09MYZfNbJ-1FALLkA")' }}></div>
            </div>
              </section>

              {/* Gallery & CTA */}
              <section className="w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-strong">Galeria de Projetos Recentes</h2>
              <p className="text-muted dark:text-gray-400 mt-2 max-w-2xl mx-auto">Inspire-se com alguns dos nossos trabalhos realizados em Goiânia.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                  <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Serralheiro profissional em Goiânia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSwa5rLFoiTeofNYskl1R-oBQjn4AvMtIbOF4uNPIkcgYjI4KlMosVv-EfuMESXJ8D1gQenp_dwGhuYIF-R4HNj76luxJHRiGT5KnpDRxgnsTnCMnEeVFR9T95xW2Fm3ibSODC7qgQCBk-300kYTmz_0CAAsEaXrkU3kUgymeVoi_Ll1xy38mX0-d-eULecCyWj3kaQTBE6fqtuB1tMHmdZQYjtxPYQETYFihA84LhyvxF0gR50utxOxsaqekBGtjJQYu3okwLQ" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Fachada residencial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj-n2y0KUvjmTzBg6uWpxlXkSXf-83LDHauE1A4fSGgPXvJdSy9PIiJtYr7K8nryAs-eDu3iwLRPTM_nQDeQ92Co4JCjcs14QQr9QoWFGRB1moOGGp7Z3Hxz3ZlzQs6RJ3XpbZSxtv3Ne-1O-jj5j1_Aryck1MUUsdLcosVVlJ0fyJJinHwpjWh_6hYw6eBVJLV4lIa8YjE_jxVC8uZ6rs31eI0lEWGlF4PZG7LqzCNzKumoy31ZxdE8auLkDB8GIxMdQ8xbBipg" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Construção de estrutura metálica" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD1zqFzro6rVx_oOXE8DMkKjnDF5XtkIFq6yPHUAJESdPwFewM9bXWqxVAGAxml2wFHrRXj5lm3VTbWMJFww0f5KR8Nz79QGX45ZFJtXbHMbcuc9l6798bUyF09DsqecgPXUDSsRQXc0-auWbp-xG5cDUVYPb3YdhBbda_nBBVg4tBGmgYUT7oemq9Up7pZHMI-Kkm922wlorRvZ2iuxjKoGBKfB-z3XArDcLeN1y88dA0zOr3d3KySi75vrzCqjkiHN-cgf8ZFA" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Corrimão de metal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxSnBJBmhVsvnenkDRxg5-CwWfH5kOH8Cm9752OY7bhZOFRcOWDpRz5ypzZ11ipL8GxY8C66jY4qYR4VWevdx0S6O1C1ZbWM1Va2w6tkezYjuoP4At28xR_q7KXR-ELyL0yXFELgpaPwokU1__17nOoADOZ48Bh456cwcafr_44az5GTzaocG33stJ9xbqgXi24nlZk6_08pOcs6hLBBh0BVpf52YzsIlgsXYc8s6YXe-9sl0HOOC8PAG6vXn-9IDBDw5yq5sehA" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Detalhe de uma solda" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4YJ-m2bg79Ml5_GtiQGYUQqgFEwcWq0m9VxLW5sMNO1-Onf7TtUl9P6MZfj25Iv06OsdS__KacREA_o6zKe2scRFid_ibzutU0t062gkqyBj8c9sNfH5PygZVS8LsyzKVwH9u9Oncv87yu4KDte5ahO9-UIIYnvsuQisSszIP7X775kYzjqTHeXg6NK799Fv_Z7aYPEpv0owOXUF3ZywbNLByinQyvFNKhTrqeJo9nDoCDMins2BthWZFsPACjOvdKC3W17L8mA" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Portão de garagem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSSVnG4cncip7ui891HEnBsX9H7piSn6DTH9GQmALLR5LogFfVSIMlx2PQ_bIqByk17xa1jDUtiQBxyZQMftvIcr8RfdeGffytrQs1p8N5cO3Dcr_AwjDROKqBlQh_753UYRWB-tKjV76iXOB90_e60jocboIy0uPxZAEgTJEsCycuwGTzB7bdPGRNOqq_7nsdz8vMfZBvj0gaMubSw39MUD7IxFEpYSwrDKBqXUGtgWnB2g9Quf5XeFinLaXUWbJ4KhKFRtK2g" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Cobertura de metal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP39VUBq4M9_ZPh-yULpmJbAKe1cjgL9_SXDmKSC1NI83tG48xqgGGlR4ppCPYrApumW4Aw2SSDEhvifkMAvdRmmIUsuEjreDLmH_xAcFoRIIzYAjupB81xQLVrCBfq5gAV8xNEsVH-S6HxPzR5yeByJ1Ysg4oc-xYNGcFeGYsVdLXe7Zd9TqmRNhOSWOE15QIdzCaKnkgkrM_m-YtG7rjmcX4VWrOAdSeYPUMqyVYllcKlna2pSdz0FanxF5B_w0Y0YGBO9cBDw" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" alt="Pérgola de jardim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5f4BeQcFx8mbTG25wX0BJgB_rOk2N9ST1_FjK_trWWZ9Gc_diL5FbVYFqjSDryQlqsx8w8uLSJ-4cby04l8VmK3wUzr79lB9uvONCab9m23kRoAZROHHluLCY9GqKywZZ3HhreRi-FdOE_svtKJFk7m_zt3A92UA7HOdK2HFNRFjZNDRCKKkfhfOYrwYk1Z_OxNY9q5pzZIFjLotzYQ73aEN2cAwYMCXMZkG5bUAmtSXy8RBJOYpSVD8z5KZ_tQKuhi3Q80E4bg" />
                </div>
              </div>
            </div>
              </section>

            </div>
          </main>

          <TestimonialsSection />

          {/* Contact / Form removido - formulário de contato retirado conforme solicitado */}
        </div>
      </div>
    </main>
  )
}
