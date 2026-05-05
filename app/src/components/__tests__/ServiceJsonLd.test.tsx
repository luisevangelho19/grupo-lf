import { render } from '@testing-library/react'
import ServiceJsonLd from '~/components/ServiceJsonLd'

describe('ServiceJsonLd', () => {
  it('renders JSON-LD with correct type and fields', () => {
    const { container } = render(
      <ServiceJsonLd name="Teste Service" provider="Empresa Exemplo" />
    )

    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeTruthy()
    const data = JSON.parse(script!.textContent || '{}')
    expect(data['@type']).toBe('Service')
    expect(data.name).toBe('Teste Service')
    expect(data.provider['@type']).toBe('Organization')
  })
})
