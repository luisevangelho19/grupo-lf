import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { 
  MdCall, 
  MdCheckCircle, 
  MdWaterDrop, 
  MdAccessTime, 
  MdLocationOn,
  MdHome,
  MdBuild,
  MdPlumbing,
  MdShower,
  MdCleaningServices,
  MdPerson,
  MdShield,
  MdSpeed,
  MdAttachMoney,
  MdWorkspacePremium,
  MdStar,
  MdInvertColors
} from 'react-icons/md'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'

const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'

export const metadata = {
  title: 'Encanador Profissional em Goiânia — Instalações e Reparos Hidráulicos',
  description: 'Encanador especializado em Goiânia: instalação e troca de torneiras, registros, sifões, tubulação PVC e PEX, limpeza de caixa d\'água e reparos hidráulicos.',
  openGraph: {
    title: 'Encanador Profissional em Goiânia — Instalações e Reparos Hidráulicos',
    description: 'Encanador especializado em Goiânia: instalação e troca de torneiras, registros, sifões, tubulação PVC e PEX, limpeza de caixa d\'água e reparos hidráulicos.',
    url: `${_base}/servicos/encanador`,
    images: [{ url: `${_base}/gallery/encanador-hero.webp`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${_base}/servicos/encanador` },
}

export default function EncanadorPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'
  const whatsappMsg = 'Olá, preciso de atendimento com encanador em Goiânia.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <main className="flex-1 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body">
      <ServiceJsonLd
        name="Encanador Profissional em Goiânia"
        description="Encanador especializado em instalações hidráulicas, troca de torneiras, reparo de tubulações, sifões, caixas d'água e manutenção residencial e comercial em Goiânia."
        provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType="encanador"
        areaServed="Goiânia, GO"
        priceRange="R$120 - R$900"
        image="/gallery/encanador-hero.webp"
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
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0B132B] text-sky-400 font-black text-xs sm:text-sm uppercase tracking-widest border border-sky-500/40 shadow-md mb-5">
                  <MdWaterDrop size={20} className="text-sky-400" />
                  <span>ENCANADOR EM GOIÂNIA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300 font-bold">ATENDIMENTO RÁPIDO</span>
                </div>

                {/* Main H1 Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white leading-[1.1] tracking-tight mb-5">
                  <span className="block text-sky-600 dark:text-sky-400 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-2">
                    Encanador em Goiânia
                  </span>
                  Serviços Hidráulicos <span className="bg-sky-500 text-white px-3 py-1 rounded-xl inline-block mt-1.5 font-extrabold shadow-sm">Residenciais e Comerciais</span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-medium">
                  Instalação e reparo de torneiras, registros, sifões, tubulações em PVC e PEX, limpeza de caixa d&apos;água e louças sanitárias com total segurança e rapidez em Goiânia e região.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Chamar Encanador no WhatsApp"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-[#0B132B] hover:bg-[#1E293B] text-white text-base font-bold transition-all shadow-md hover:shadow-lg gap-2.5"
                  >
                    <FaWhatsapp size={22} className="text-emerald-400" />
                    <span>CHAMAR NO WHATSAPP</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ligar para Encanador Agora"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-base font-bold transition-all gap-2.5"
                  >
                    <MdCall size={22} className="text-sky-500" />
                    <span>LIGAR AGORA</span>
                  </a>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 w-full">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MdCheckCircle size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Serviço Garantido</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                      <MdWaterDrop size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Instalação Precisa</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                      <MdAccessTime size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">Atendimento Rápido</span>
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
                    src="/gallery/encanador-hero.webp"
                    alt="Encanador profissional executando serviço hidráulico em Goiânia"
                    className="w-full h-[400px] sm:h-[480px] object-cover rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
                  />

                  {/* Floating Overlay Badge */}
                  <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-left-6 bg-[#0B132B] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3.5 max-w-[280px]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500 text-white font-black shrink-0">
                      <MdWaterDrop size={26} />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-black uppercase tracking-wider text-sky-400">Garantia LF</span>
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
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-sky-500 mb-2">
              GALERIA DE SERVIÇOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              Confira alguns dos nossos serviços hidráulicos
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
              Fotos reais do nosso atendimento em Goiânia: instalações de torneiras, montagem de tubulações, sifões e caixa d&apos;água.
            </p>

            {/* Grid de 5 Fotos Reais em Ação (1:1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              
              {/* Photo 1: Colagem de tubulação PVC */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-encanador-3.webp"
                  alt="Encanador colando tubulação de PVC com adesivo Tigre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 2: Troca de registros e válvulas */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-encanador-4.webp"
                  alt="Encanador ajustando registros com chave de aperto"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 3: Conexão de engates flexíveis */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-encanador-5.webp"
                  alt="Encanador conectando engates flexíveis sob bancada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 4: Instalação de cuba de cozinha */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-encanador-7.webp"
                  alt="Encanador instalando cuba de cozinha e vedações"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 5: Montagem de tubulação na parede */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img
                  src="/gallery/galeria-encanador-8.webp"
                  alt="Encanador montando ramal de água em parede"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-sky-500 mb-2">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-12">
              Soluções completas em instalações hidráulicas
            </h2>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Card 1 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdBuild size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Troca de Torneiras e Registros</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instalação e conserto de torneiras, registros de gaveta e pressão, misturadores e torneiras monocomando.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdPlumbing size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Sifões, Engates e Válvulas</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Substituição de sifões de pia, engates flexíveis em inox, válvulas de escoamento e vedações sanitárias.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdShower size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Válvula Hydra e Caixas Acopladas</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Manutenção de mecanismo de descarga, substituição de reparos Hydra e vedação de vasos sanitários.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdCleaningServices size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Limpeza de Caixas d&apos;Água</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Higienização técnica e sanificação de reservatórios de água potável, mantendo a água pura para sua família.
                </p>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdHome size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tubulações em PVC, PEX e PPR</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Montagem, ampliação e reforma de tubulações de água fria e água quente residencial e comercial.
                </p>
              </div>

              {/* Card 6 */}
              <div className="flex flex-col text-left p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdInvertColors size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Chuveiros, Filtros e Purificadores</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instalação hidráulica de filtros de água de entrada, purificadores de cozinha, chuveiros e duchas.
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
              SOLICITAR ORÇAMENTO GRATUITO
            </a>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. POR QUE ESCOLHER NOSSOS SERVIÇOS?                 */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-sky-500 mb-2">
              POR QUE ESCOLHER NOSSOS SERVIÇOS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-16">
              Compromisso com agilidade, limpeza e garantia
            </h2>

            {/* 5 Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdPerson size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Técnicos Experientes</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Encanadores capacitados para executar o serviço com perfeição.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdShield size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Limpeza do Ambiente</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Trabalhamos com cuidado e deixamos seu espaço limpo após a conclusão.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdSpeed size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Atendimento Rápido</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Agilidade no agendamento e pontualidade no atendimento.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdAttachMoney size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Preço Justo</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Orçamento sem taxa oculta, explicado de forma clara antes do serviço.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 bg-slate-50 dark:bg-slate-900 shadow-xs">
                  <MdWorkspacePremium size={28} />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Garantia Total</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Garantia comprovada em todos os consertos e instalações realizadas.
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
            
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-sky-500 mb-2">
              DEPOIMENTOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-12">
              O que nossos clientes dizem em Goiânia
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
                    &quot;Excelente atendimento! O encanador trocou as torneiras da minha cozinha e ajustou o sifão com extrema precisão. Recomendo muito!&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                    alt="Marcos A."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Marcos A.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Setor Oeste - Goiânia</span>
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
                    &quot;Serviço impecável na instalação de registros e tubulações da minha empresa. Chegaram no horário combinado e deixaram tudo limpo.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                    alt="Fernando S."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Fernando S.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Setor Bueno - Goiânia</span>
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
                    &quot;Fizeram a limpeza da minha caixa d&apos;água e a troca do reparo da caixa acoplada do banheiro. Deixaram tudo funcionando 100%.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                    alt="Camila R."
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-bold text-sm text-slate-900 dark:text-white">Camila R.</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Jardim Goiás - Goiânia</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sky-500"></span>
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
                  
                  {/* Sky Water Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                    <MdWaterDrop size={28} />
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                    Precisando de encanador em Goiânia?
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl">
                    Fale agora mesmo com nossa equipe e solicite seu orçamento gratuito!
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
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-4 bg-sky-500 hover:bg-sky-400 text-white text-base font-bold transition-all shadow-md gap-2.5"
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
                      src="/gallery/encanador-hero.webp"
                      alt="Encanador em atendimento rápido em Goiânia"
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
