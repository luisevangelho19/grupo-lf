import TestimonialsSection from '~/components/TestimonialsSection'

export const metadata = {
  title: 'Serviços — Grupo LF',
  description: 'Conheça nossos serviços: eletricista, encanador, pintor, gesseiro, serralheiro e vidraceiro em Goiânia.',
  alternates: { canonical: 'https://servicoslf.com.br/servicos' },
}

export default function ServicesIndex() {
  const items = [
    { title: 'Eletricista', slug: 'eletricista' },
    { title: 'Encanador', slug: 'encanador' },
    { title: 'Marcenaria de Alto Padrão', slug: 'marcenaria-goiania' },
    { title: 'Marido de Aluguel', slug: 'marido-de-aluguel' },
    { title: 'Gesseiro', slug: 'gesseiro' },
    { title: 'Pintor', slug: 'pintor' },
    { title: 'Serralheiro', slug: 'serralheiro' },
    { title: 'Vidraceiro', slug: 'vidraceiro' },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold">Lista de Serviços</h2>
      <p className="text-slate-600 mt-2">Escolha um serviço para ver mais detalhes e solicitar orçamento.</p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.slug} className="p-4 border rounded">
            <h3 className="font-semibold">{it.title}</h3>
            <a href={`/servicos/${it.slug}`} className="text-blue-600 text-sm mt-2 inline-block">Abrir página do serviço →</a>
          </li>
        ))}
      </ul>

      <TestimonialsSection />
    </section>
  )
}
