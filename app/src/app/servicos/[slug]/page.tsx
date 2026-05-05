import { getAllServiceMetadata, getServiceBySlug } from '~/lib/content'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import ServiceJsonLd from '~/components/ServiceJsonLd'
import FloatingWhatsappButton from '~/components/FloatingWhatsappButton'
import TestimonialsSection from '~/components/TestimonialsSection'

export async function generateStaticParams() {
  const list = await getAllServiceMetadata()
  return list.map((item: any) => ({ slug: item.slug }))
}

// Generate per-service metadata using frontmatter so each service route has its own SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const data = await getServiceBySlug(slug)
  if (!data) return {}

  const { frontmatter } = data
  const url = `https://servicoslf.com.br/servicos/${slug}`

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servicoslf.com.br'
  const imageUrl = frontmatter.image ? `${base}${frontmatter.image}` : `${base}/services/${slug}.jpg`

  return {
    title: `${frontmatter.title} — Grupo LF`,
    description: frontmatter.description || 'Serviços do Grupo LF',
    openGraph: {
      title: `${frontmatter.title} — Grupo LF`,
      description: frontmatter.description || undefined,
      url,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    alternates: { canonical: url },
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const data = await getServiceBySlug(slug)

  if (!data) {
    return <div>Serviço não encontrado</div>
  }

  const { frontmatter, body } = data

  // Evaluate MDX into a renderable component (server-side). We rely on mdx evaluate
  // using react/jsx-runtime as the runtime environment. This evaluates trusted MDX files
  // kept in the repo (content/services).
  const mdxModule = await evaluate(body, { ...runtime, baseUrl: import.meta.url })
  const MDXContent = mdxModule.default

  return (
    <article>
      <ServiceJsonLd
        name={frontmatter.title}
        description={frontmatter.description}
          provider={{ name: 'Grupo LF', telephone: '(62) 99115-7746', url: 'https://servicoslf.com.br', email: 'contato@servicoslf.com.br' }}
        serviceType={frontmatter.slug}
        areaServed={frontmatter.areaServed}
        priceRange={frontmatter.priceRange}
        image={frontmatter.image ?? `/services/${slug}.jpg`}
      />
      <h1 className="text-2xl font-bold">{frontmatter.title}</h1>
      <p className="mt-2 text-slate-600">{frontmatter.description}</p>

      <section className="mt-6 p-4 border rounded prose">
        <MDXContent />
      </section>

      <div className="mt-6">
        <a href="/contato" className="px-4 py-2 bg-blue-600 text-white rounded">Solicitar Orçamento</a>
      </div>
      <TestimonialsSection />
      <FloatingWhatsappButton message={`Olá, gostaria de contratar seus serviços de ${frontmatter.title}.`} />
    </article>
  )
}
