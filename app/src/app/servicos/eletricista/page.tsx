import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { 
  MdCall, 
  MdCheckCircle, 
  MdFlashOn, 
  MdAccessTime, 
  MdLocationOn,
  MdHome,
  MdBuild,
  MdPower,
  MdLightbulb,
  MdElectricalServices,
  MdWarning,
  MdPerson,
  MdShield,
  MdSpeed,
  MdAttachMoney,
  MdWorkspacePremium,
  MdStar
} from 'react-icons/md'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
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

  const whatsappNumber = process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'
  const whatsappMsg = 'Olá, preciso de atendimento elétrico em Goiânia.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <main className="flex-1 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body">
      <ServiceJsonLd
        name={fm.title ?? 'Eletricista Profissional'}
        description={fm.description}
        provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={fm.slug ?? 'eletricista'}
        areaServed={fm.areaServed ?? 'Goiânia, GO'}
        priceRange={fm.priceRange}
        image={fm.image ?? '/services/eletricista.jpg'}
      />

      <div className="w-full">
        {/* ---------------------------------------------------- */}
        {/* 1. HERO SECTION                                      */}
        {/* ---------------------------------------------------- */}
        <section className="relative w-full bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (Text & CTAs) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* High Contrast Badge Tag */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0B132B] text-amber-400 font-black text-xs sm:text-sm uppercase tracking-widest border border-amber-500/40 shadow-md mb-5">
                  <MdFlashOn size={20} className="text-amber-400" />
                  <span>ELETRICISTA EM GOIÂNIA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="text-slate-300 font-bold">24 HORAS</span>
                </div>

                {/* Main H1 Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white leading-[1.1] tracking-tight mb-5">
                  <span className="block text-amber-500 dark:text-amber-400 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-2">
                    Eletricista em Goiânia
                  </span>
                  Serviços Elétricos <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded-xl inline-block mt-1.5 font-extrabold shadow-sm">Residenciais e Comerciais</span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-medium">
                  Soluções elétricas completas para casas, apartamentos, lojas, escritórios e condomínios. Instalação, manutenção, quadro de disjuntores e reparos com total segurança e rapidez em Goiânia e região.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar no WhatsApp"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-[#0B132B] hover:bg-[#1E293B] text-white text-base font-bold transition-all shadow-md hover:shadow-lg gap-2.5"
                  >
                    <FaWhatsapp size={22} className="text-emerald-400" />
                    <span>CHAMAR NO WHATSAPP</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ligar Agora"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-base font-bold transition-all gap-2.5"
                  >
                    <MdCall size={22} className="text-amber-500" />
                    <span>LIGAR AGORA</span>
                  </a>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 w-full">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MdCheckCircle size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Segurança em primeiro lugar</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0">
                      <MdFlashOn size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Serviços com qualidade</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                      <MdAccessTime size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Atendimento 24 horas</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <MdLocationOn size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Goiânia e Região</span>
                  </div>
                </div>

              </div>

              {/* Right Column (Hero Image with Overlay Badge) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  
                  {/* Hero Photo */}
                  <img
                    src="/gallery/eletricista-hero.webp"
                    alt="Eletricista profissional executando serviço elétrico em Goiânia"
                    className="w-full h-[400px] sm:h-[480px] object-cover rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
                  />

                  {/* Floating Overlay Badge */}
                  <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-left-6 bg-[#0B132B] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3.5 max-w-[280px]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black shrink-0">
                      <MdFlashOn size={26} />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-black uppercase tracking-wider text-amber-400">Garantia LF</span>
                      <span className="block text-xs sm:text-sm font-extrabold leading-snug">ATENDIMENTO RÁPIDO E CONFIÁVEL!</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 2. GALERIA DE SERVIÇOS (FOTOS REALISTAS EM AÇÃO 1:1)   */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-2">
              GALERIA DE SERVIÇOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              Confira alguns dos nossos trabalhos
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
              Fotos reais do nosso atendimento em Goiânia: instalações, reparos de disjuntores, fiação e manutenção elétrica.
            </p>

            {/* 3x3 Grid (9 Realistic Brazilian Electrician Action Photos 1:1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              
              {/* Photo 1: Troca de disjuntor no quadro elétrico */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-1.webp"
                  alt="Eletricista trocando disjuntor em quadro elétrico residencial no Brasil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Troca e Manutenção de Disjuntor</span>
                  <span className="text-amber-400 text-xs font-medium">Quadro de Distribuição Residencial</span>
                </div>
              </div>

              {/* Photo 2: Instalação de tomada padrão ABNT 3 pinos */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-2.webp"
                  alt="Eletricista instalando tomada de parede padrão ABNT 3 pinos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Instalação de Tomada NBR 14136</span>
                  <span className="text-amber-400 text-xs font-medium">Padrão Novo ABNT de 3 Pinos</span>
                </div>
              </div>

              {/* Photo 3: Reparo em fiação elétrica e fita isolante */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-3.webp"
                  alt="Eletricista realizando reparo de fiação em caixa de passagem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Reparo de Fiação e Curto-Circuito</span>
                  <span className="text-amber-400 text-xs font-medium">Isolamento e Substituição de Cabos</span>
                </div>
              </div>

              {/* Photo 4: Instalação de iluminação LED em gesso */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-4.webp"
                  alt="Eletricista instalando painel LED embutido em forro de gesso"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Instalação de Iluminação em LED</span>
                  <span className="text-amber-400 text-xs font-medium">Spots e Painéis Embutidos em Gesso</span>
                </div>
              </div>

              {/* Photo 5: Diagnóstico e medição com multímetro */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-5.webp"
                  alt="Eletricista medindo voltagem com multímetro digital em quadro de força"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Diagnóstico com Multímetro</span>
                  <span className="text-amber-400 text-xs font-medium">Medição de Voltagem e Carga</span>
                </div>
              </div>

              {/* Photo 6: Instalação de interruptores de luz */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-6.webp"
                  alt="Eletricista fixando espelho de interruptor de luz em parede"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Troca de Interruptores e Módulos</span>
                  <span className="text-amber-400 text-xs font-medium">Acabamento e Estética Residencial</span>
                </div>
              </div>

              {/* Photo 7: Conexão de painel elétrico comercial */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-7.webp"
                  alt="Eletricista apertando cabos de alta amperagem em quadro elétrico comercial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Entrada de Energia e Painel Comercial</span>
                  <span className="text-amber-400 text-xs font-medium">Manutenção de Alimentação de Alta Carga</span>
                </div>
              </div>

              {/* Photo 8: Instalação de chuveiro elétrico */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-8.webp"
                  alt="Eletricista conectando fios de chuveiro elétrico residencial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Instalação de Chuveiro Elétrico</span>
                  <span className="text-amber-400 text-xs font-medium">Cabeamento de 6mm² e Conector Porcelana</span>
                </div>
              </div>

              {/* Photo 9: Instalação de refletor LED externo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-9.webp"
                  alt="Eletricista instalando refletor de LED em fachada residencial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left">
                  <span className="text-white font-bold text-sm">Iluminação Externa e Refletores</span>
                  <span className="text-amber-400 text-xs font-medium">Instalação de Refletor LED em Fachada</span>
                </div>
              </div>

            </div>

            {/* Gallery Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              SOLICITAR ORÇAMENTO NO WHATSAPP
            </a>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. NOSSOS SERVIÇOS SECTION                           */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60" id="servicos">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Section Tagline & Title */}
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-2">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-12">
              Soluções completas em serviços elétricos
            </h2>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Card 1 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdHome size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Instalações Elétricas</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instalações elétricas residenciais, comerciais e industriais com total segurança, padrão técnico e qualidade.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdBuild size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Manutenção Elétrica</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Manutenção preventiva e corretiva para evitar sobrecargas, panes e garantir o bom funcionamento do seu imóvel.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdPower size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Troca de Tomadas e Interruptores</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Substituição de tomadas antigas, interruptores e espelhos com segurança técnica e acabamento impecável.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdLightbulb size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Iluminação em LED</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Projetos e instalações de iluminação moderna em LED para máxima economia de energia e valorização dos ambientes.
                </p>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdElectricalServices size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Disjuntor e Quadro de Força</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instalação e troca de disjuntores, quadros de distribuição de energia e reorganização de padrões de entrada.
                </p>
              </div>

              {/* Card 6 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdWarning size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Curto-Circuito e Falhas</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Diagnóstico rápido e correção definitiva de curtos-circuitos, quedas de energia e fuga de corrente.
                </p>
              </div>

            </div>

            {/* Bottom Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              VER TODOS OS SERVIÇOS
            </a>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. POR QUE ESCOLHER NOSSOS SERVIÇOS?                 */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-2">
              POR QUE ESCOLHER NOSSOS SERVIÇOS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-16">
              Compromisso com qualidade e segurança
            </h2>

            {/* 5 Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdPerson size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Profissionais Qualificados</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Equipe altamente experiente e em constante treinamento técnico.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdShield size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Segurança Garantida</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Trabalhamos seguindo rigorosamente as normas técnicas para sua proteção.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdSpeed size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Atendimento Rápido</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Chegamos rapidamente até seu local com total agilidade e pontualidade.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdAttachMoney size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Preço Justo</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Orçamento transparente, sem surpresas nem cobranças indevidas.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdWorkspacePremium size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Garantia de Serviço</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Todos os serviços executados possuem garantia total e nota do serviço.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. DEPOIMENTOS                                       */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-500 mb-2">
              DEPOIMENTOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-12">
              O que nossos clientes dizem
            </h2>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              
              {/* Card 1 */}
              <div className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                    &quot;Excelente profissional! Resolveu o problema elétrico da minha casa rapidamente e com muita segurança. Recomendo!&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Juliana P."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Juliana P.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Setor Bueno - Goiânia</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                    &quot;Serviço de alta qualidade e preço justo. Chegou no horário combinado e deixou tudo funcionando perfeitamente.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Ricardo M."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Ricardo M.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Jardim América - Goiânia</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                    <MdStar size={20} />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                    &quot;Atendimento rápido e eficiente! Já salvei o contato e recomendo para todos que precisarem de eletricista.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                    alt="Carlos T."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Carlos T.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Setor Marista - Goiânia</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            </div>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 6. FINAL CTA BANNER (DARK CARD)                      */}
        {/* ---------------------------------------------------- */}
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950" id="contato">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="bg-[#0B132B] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left CTA Text & Actions */}
                <div className="lg:col-span-7 text-left">
                  
                  {/* Yellow Bolt Icon */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                    <MdFlashOn size={28} />
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                    Precisando de um eletricista em Goiânia?
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl">
                    Fale agora mesmo e solicite seu orçamento!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Chamar no WhatsApp"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-white hover:bg-slate-100 text-[#0B132B] text-base font-bold transition-all shadow-md gap-2.5"
                    >
                      <FaWhatsapp size={22} className="text-emerald-600" />
                      <span>CHAMAR NO WHATSAPP</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Ligar Agora"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-base font-bold transition-all shadow-md gap-2.5"
                    >
                      <MdCall size={22} />
                      <span>LIGAR AGORA</span>
                    </a>
                  </div>

                </div>

                {/* Right CTA Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60">
                    <img
                      src="/gallery/eletricista-hero.webp"
                      alt="Eletricista em atendimento rápido em Goiânia"
                      className="w-full h-[260px] sm:h-[320px] object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </div>

      <FloatingWhatsappButton message={whatsappMsg} />
    </main>
  )
}
