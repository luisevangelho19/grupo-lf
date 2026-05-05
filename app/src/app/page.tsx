export const metadata = {
  title: 'Grupo LF - Serviços Profissionais de Manutenção em Goiânia',
  description: 'Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais.',
  openGraph: {
    title: 'Grupo LF - Serviços Profissionais de Manutenção em Goiânia',
    description: 'Soluções rápidas e com garantia para sua casa ou empresa.',
    url: 'https://servicoslf.com.br',
    images: [{ url: 'https://servicoslf.com.br/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://servicoslf.com.br' },
}

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import {
  MdElectricalServices,
  MdFormatPaint,
  MdHomeRepairService,
  MdPlumbing,
  MdWindow,
  MdConstruction,
  MdCall,
  MdEngineering,
  MdTaskAlt,
} from 'react-icons/md'
import TestimonialsSection from '../components/TestimonialsSection'

const services = [
  { id: 'eletricista', icon: MdElectricalServices, title: 'Eletricista', description: 'Instalações e reparos elétricos com segurança.' },
  { id: 'pintor', icon: MdFormatPaint, title: 'Pintor', description: 'Pintura residencial e comercial de alta qualidade.' },
  { id: 'gesseiro', icon: MdHomeRepairService, title: 'Gesseiro', description: 'Forros, sancas e acabamentos em gesso.' },
  { id: 'encanador', icon: MdPlumbing, title: 'Encanador', description: 'Reparos de vazamentos e instalações hidráulicas.' },
  { id: 'vidraceiro', icon: MdWindow, title: 'Vidraceiro', description: 'Instalação e manutenção de vidros e espelhos.' },
  { id: 'serralheiro', icon: MdConstruction, title: 'Serralheiro', description: 'Estruturas metálicas, portões e grades.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl @container">
          <div className="flex flex-col gap-10 @[864px]:flex-row-reverse">
            <div
              className="flex-1 w-full bg-center bg-no-repeat aspect-square @[864px]:aspect-video bg-cover rounded-xl"
              aria-label="Profissional realizando um serviço de manutenção em uma casa moderna e limpa."
              role="img"
              style={{
                backgroundImage: 'url("/sobre-nos.avif")',
              }}
            />

            <div className="flex flex-1 flex-col gap-6 @[864px]:justify-center">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Serviços Profissionais de Manutenção em Goiânia</h1>
                <p className="text-base font-normal leading-normal @[480px]:text-lg">Soluções rápidas e com garantia para sua casa ou empresa. Eletricistas, pintores, encanadores e mais, tudo em um só lugar.</p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="/contato" className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-opacity-90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                  <span className="truncate">Solicitar Orçamento</span>
                </Link>
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
        </div>
      </section>

      {/* Top Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-neutral-light dark:bg-neutral-dark">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">Nossos Principais Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((s) => (
              <div key={s.id} className="flex flex-col items-center text-center gap-3 p-4 bg-background-light dark:bg-background-dark rounded-xl shadow-sm">
                  {(() => {
                  const Icon = s.icon
                  // Icons here are decorative — visual label follows, hide from AT
                  return <Icon aria-hidden="true" className="text-4xl text-primary" size={36} />
                })()}
                <p className="text-base font-bold leading-normal">{s.title}</p>
                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">Como Funciona Nosso Atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-neutral-light dark:bg-neutral-dark rounded-xl">
                <div className="flex items-center justify-center size-16 bg-primary/20 text-primary rounded-full mb-4">
                <MdCall aria-hidden="true" className="text-4xl" size={36} />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Solicitação</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Você entra em contato, descreve sua necessidade e agendamos uma visita técnica.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-neutral-light dark:bg-neutral-dark rounded-xl">
                <div className="flex items-center justify-center size-16 bg-primary/20 text-primary rounded-full mb-4">
                <MdEngineering aria-hidden="true" className="text-4xl" size={36} />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Execução</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nossos profissionais executam o serviço com materiais de qualidade e total segurança.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-neutral-light dark:bg-neutral-dark rounded-xl">
                <div className="flex items-center justify-center size-16 bg-primary/20 text-primary rounded-full mb-4">
                <MdTaskAlt aria-hidden="true" className="text-4xl" size={36} />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Entrega e Garantia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Entregamos o serviço finalizado e oferecemos garantia de qualidade para sua tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Block */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl bg-primary text-white p-8 sm:p-12 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Pronto para resolver seu problema?</h2>
              <p className="text-lg opacity-90">Fale conosco agora mesmo. Oferecemos orçamentos rápidos, sem compromisso e com a garantia do melhor serviço de Goiânia.</p>
            </div>
              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto">
              <Link href="/contato" className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary hover:bg-opacity-90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                <span className="truncate">Solicitar Orçamento</span>
              </Link>
              <button className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white hover:bg-opacity-90 text-black text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                <span className="truncate">Ligar Agora</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
