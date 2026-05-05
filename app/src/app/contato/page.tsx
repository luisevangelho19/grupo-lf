import ContatoForm from './ContatoForm'
import TestimonialsSection from '../../components/TestimonialsSection'

export const metadata = {
  title: 'Contato — Grupo LF',
  description: 'Fale conosco para orçamento e atendimento em Goiânia — (62) 99115-7746.',
  alternates: { canonical: 'https://servicoslf.com.br/contato' },
}

export default function ContatoPage() {
  return (
    <main>
      <ContatoForm />
      <TestimonialsSection />
    </main>
  )
}
