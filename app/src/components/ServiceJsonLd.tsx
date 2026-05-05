// JSON-LD produced inline — no external JsonLd helper required here

type Props = {
  name: string
  description?: string
  provider?: string | { name: string; telephone?: string; url?: string; email?: string }
  serviceType?: string
  areaServed?: string | string[]
  priceRange?: string
  image?: string | { url: string; width?: number; height?: number }
  scriptKey?: string
}

export default function ServiceJsonLd({
  name,
  description,
  provider,
  serviceType,
  areaServed,
  priceRange,
  image,
  scriptKey = 'service'
}: Props) {
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name
  }

  if (description) data.description = description
  if (provider) {
    // Basic provider processing to avoid depending on next-seo processors in tests
    data.provider =
      typeof provider === 'string'
        ? { '@type': 'Organization', name: provider }
        : { '@type': 'Organization', ...provider }
  }
  // support optional image (string URL or ImageObject)
  if (image) {
    if (typeof image === 'string') {
      data.image = image
    } else if (image && typeof image === 'object') {
      const imgObj: any = { '@type': 'ImageObject', url: image.url }
      if (image.width) imgObj.width = image.width
      if (image.height) imgObj.height = image.height
      data.image = imgObj
    }
  }
  if (serviceType) data.serviceType = serviceType
  if (areaServed) data.areaServed = Array.isArray(areaServed) ? areaServed : [areaServed]
  if (priceRange) data.offers = { '@type': 'Offer', priceRange }

  // Render JSON-LD inline to avoid depending on next-seo runtime in tests
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
