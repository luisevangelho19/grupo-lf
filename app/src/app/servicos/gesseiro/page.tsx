import React from 'react'
import ServiceJsonLd from '../../../components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'
import { getServiceBySlug } from '~/lib/content'
import {
  MdVerifiedUser,
  MdTrendingUp,
  MdSchedule,
  MdWorkspacePremium,
  MdThumbUp,
  MdReceiptLong,
  MdArchitecture,
  MdGridView,
  MdVerticalSplit,
  MdFormatShapes,
  MdShelves,
  MdTexture,
  MdCall,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export async function generateMetadata() {
  const data = await getServiceBySlug('gesseiro')
  const fm = data?.frontmatter ?? {}
  const title = fm.title ?? 'Gesseiro Profissional — Grupo LF'
  const description = fm.description ?? 'Gesseiro em Goiânia — forros, sancas e acabamentos em gesso com qualidade e precisão.'
  const _base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${_base}/servicos/gesseiro`,
      images: [{ url: `${_base}/services/gesseiro.jpg`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `${_base}/servicos/gesseiro` },
  }
}

export default async function Gesseiro() {
  const data = await getServiceBySlug('gesseiro')
  const fm = data?.frontmatter ?? {}
  return (
    <main className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <ServiceJsonLd
        name={fm.title ?? 'Gesseiro Profissional'}
        description={fm.description}
        provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={fm.slug ?? 'gesseiro'}
        areaServed={fm.areaServed}
        priceRange={fm.priceRange}
        image={fm.image ?? '/services/gesseiro.jpg'}
      />
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de Gesseiro.`} />
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section (moved to match Vidraceiro layout) */}
        <div className="relative">
          {/* dark terracotta background keeps harmony with accents while keeping good contrast for white text */}
          <div className="absolute inset-0 bg-linear-to-br from-[#5B3324] via-[#4a271d] to-[#371712] z-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 items-center justify-center text-center py-20">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-display">Serviço de Gesseiro Profissional em Goiânia</h1>
                <h2 className="text-white/90 text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">Transforme seus ambientes com acabamentos de gesso impecáveis. Qualidade e precisão em cada detalhe.</h2>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento para serviços de gesso/gesseiro em Goiânia.')}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp size={20} className="text-white" aria-hidden="true" />
                  <span className="truncate">Chamar no WhatsApp</span>
                </a>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento gratuito para serviços de gesso em Goiânia.')}`}
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

        {/* Main Content Area (content moved here to follow hero) */}
        <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-10 lg:py-16">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1 gap-12 lg:gap-16">
            {/* Benefits Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center md:text-3xl">Acabamento Perfeito que Valoriza seu Imóvel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
                  <MdVerifiedUser aria-hidden="true" className="text-[#B76E3B] text-4xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold leading-tight">Acabamento Perfeito</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Superfícies lisas e detalhes precisos que elevam o padrão do seu ambiente.</p>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
                  <MdTrendingUp aria-hidden="true" className="text-[#B76E3B] text-4xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold leading-tight">Valorização do Imóvel</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Um bom trabalho de gesso moderniza e aumenta o valor de mercado da sua propriedade.</p>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-6 text-center items-center">
                  <MdSchedule aria-hidden="true" className="text-[#B76E3B] text-4xl" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold leading-tight">Rapidez na Execução</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Processos otimizados para entregar seu projeto com agilidade e limpeza.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us & Services Section */}
            {/*
              Melhorias de contraste:
              - O container usa `bg-secondary` (preto). Garantimos texto claro em todo o container
              - Os cards internos têm `bg-background-light` (branco) então forçamos texto escuro neles
            */}
            <div className="bg-secondary dark:bg-slate-800/50 py-10 md:py-16 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div>
                  <h2 className="text-[#B76E3B] text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 md:text-3xl">Por que nos escolher?</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <MdWorkspacePremium aria-hidden="true" className="text-[#B76E3B] mt-1" />
                      <div>
                        <h3 className="font-bold">Experiência Comprovada</h3>
                        <p className="text-white/85 text-sm">Anos de atuação no mercado de Goiânia, com centenas de projetos concluídos com sucesso.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MdThumbUp aria-hidden="true" className="text-[#B76E3B] mt-1" />
                      <div>
                        <h3 className="font-bold">Garantia de Qualidade</h3>
                        <p className="text-white/85 text-sm">Utilizamos apenas materiais de primeira linha e seguimos rigorosos padrões de qualidade.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MdReceiptLong aria-hidden="true" className="text-[#B76E3B] mt-1" />
                      <div>
                        <h3 className="font-bold">Orçamento Transparente</h3>
                        <p className="text-white/85 text-sm">Fornecemos orçamentos detalhados e sem surpresas, garantindo o melhor custo-benefício.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[#B76E3B] text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 md:text-3xl">Nossos Serviços</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* cards são brancos em light mode: garantir texto escuro para contraste */}
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdArchitecture aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Sancas e Iluminação</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdGridView aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Forros de Gesso</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdVerticalSplit aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Divisórias Drywall</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdFormatShapes aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Molduras e Roda Teto</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdShelves aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Nichos e Prateleiras</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-dark/50 rounded-lg text-text-light dark:text-text-dark">
                      <MdTexture aria-hidden="true" className="text-[#B76E3B]" />
                      <p className="font-medium">Revestimento 3D</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Process */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
              <h2 className="text-[#B76E3B] text-2xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center md:text-3xl">Nosso Processo de Trabalho</h2>
              <div className="relative">
                <div aria-hidden="true" className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-slate-700"></div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#B76E3B] text-white flex items-center justify-center text-xl font-bold z-10">1</div>
                    <h3 className="font-bold mt-2">Consulta e Orçamento</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Entendemos suas necessidades e fornecemos um orçamento detalhado e sem compromisso.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#B76E3B] text-white flex items-center justify-center text-xl font-bold z-10">2</div>
                    <h3 className="font-bold mt-2">Planejamento</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Definimos todos os detalhes do projeto, cronograma e materiais a serem utilizados.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#B76E3B] text-white flex items-center justify-center text-xl font-bold z-10">3</div>
                    <h3 className="font-bold mt-2">Execução</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Nossa equipe executa o serviço com precisão, qualidade e o mínimo de transtorno.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#B76E3B] text-white flex items-center justify-center text-xl font-bold z-10">4</div>
                    <h3 className="font-bold mt-2">Entrega e Limpeza</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Finalizamos o projeto, realizamos a limpeza completa da área e entregamos o ambiente renovado.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Gallery */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center md:text-3xl">Projetos Realizados</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Forro de gesso em sala de jantar moderna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClfBz4SjQlgaKc42BLOb3XjqldINpJVjWgJvuK8PU7Kuq15bweWEkwfZKlxnHqylnJLxz-kwMEPB2W2GhLIJAfPdyEzhQp7iz6kvZoh2TeyRRSYswozBjOYGCpylTxGOp7sSg7eHzisXkgzPLS_Y2-qqnhQkBLt5A-bAkzkL5JtUpZa1KPUpciKRjBfyTc3nasBt48rQqkPmf07sWRsOceFzW5MG6zarfgqIJ8dr4VlUbpdFfMKgTJB-HjlSkRP2DuSQNIEm6NTg" />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Parede de gesso 3D em sala de estar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIMJwlVNtFQtkWYNg7Vtf7rHSJ28rTUKP8ZOrKJDMbPOShYK0vMeDoZKv3eJ-cgjqhIXA3p_kaa4KKHlhk6s2otf0Bd8l5Tb6_05CzOlFQzwUc9EYQ1b776beEwTtS1ZvHKM63xlWdDQbHjRvbD6VhYk4UlGEYWNK7McKR10DJj7JG36DnnjiDgUMRTJ0qzNbV6YT6CniPDNOYI1xWeZD5k_ytNUyyxDQAhwHMz6ZhzvWBBZdPH5rrYtTcB_Op33E0incaNO0SQw" />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Sanca iluminada em quarto de casal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaldX-Fva6xcBv9zUPo7Hd_TiRxtVmh0npRbAXVNM0Yx35q44kUlOgw6E1zJkoVdSmSGPPewOlBQOAoZehm18Bxy0Az6lYnbyTuF_x59evX4_rYvLqJD9r6e9KaL_ZPEF--sz-r7YOCjwb3iwTflyTKauSGB1FxrkYZYcCi-hQvS5pvu6P3lfEUbC8eCHuNYKA3aEkjQT_Ewz-AsJZGqC_G0yTLDq8s8i56XN2putIrklSQBOtke04vEY8dUSMuGC_hWEz5_sS0g" />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Divisória de drywall criando novo ambiente" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtOAGbm2Ev6HsWLbs_7wljKwgn_TxU4UHhGl4GeNF87LCljbTHYWbKs_jPBwAQXB9MHeX_Fkm-CvH4X6eQREyWeKxxVmLUL85lW_SPGm5xucs6to3HI7YbuvCUaZs_SwE_RGHqQpOGOweDEMZQKJR8bMKEhzUx9B9qBeTUtnjcTvaxNz379TxHzwSANoxkdQJB2Kp9xLuu2VFulzS5XaxIrrH_X57QBkBJTV5FRz4WNEB1_dHFZ2PMzesOIYT7R59-Lx6bBu4Zw" />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Detalhe de moldura de gesso no teto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS1wvcEv_g4-O1lsWQ6rdpRobwkjaEIyaWgsl7qZh-2kZwp_yUJjHqKMDF_A7nUFKxA8blOSqAhHcnJlXoeUPXnJE0wL4yve5lthU-YS9MEhEd0C3SiTDOotY3snQpj_oLd5o3j07TcJ2mPSkda81pnv0JG_1YiYl5xreydvkZ9GA1M-IG4yDKfsBp26AOxLtbw5gplWtwcLZv0jlvX0v9RyWjyChsuedG7f-day-OynEgne6beDfzW1V3FQHRyPO5G5Jseu_rlA" />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Nicho de gesso iluminado na parede da sala" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsi6CdLjavABFlt1iyzEx0ZdRjMuLpc2xdnwqC2WcHnfxL7PNULqmy9MmbHHYgoFHYyeFwH9UNJEwr1GNAoJTmVQGrN_PHNN9AFcKEQFF4xnmexGml-krDPCjIUeQ7nm-cYOMdlO_bGNjY_Szb2lkl_B1yRPaV1oehBFtnqgrCUSnrRgiXk1r9aL7-9kd3_k9FlQMgVGNnxf6A6p5q2YLHqnjsFq1Ulr38xr3ela1G-2PC1FJYrV1k6mUil9LZZITwBKRHBdtkyg" />
                </div>
              </div>
            </section>

            <TestimonialsSection />

            {/* Final CTA & Form removido - formulário de contato retirado conforme solicitado */}
          </div>
        </div>
      </div>
    </main>
  )
}
