"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdLocationOn, MdCall, MdEmail, MdHandyman, MdVerified } from 'react-icons/md'

export default function Footer() {
  const pathname = usePathname()
  // Hide footer on the standalone vidracaria page
  if (pathname && pathname.startsWith('/vidracaria')) return null
  return (
    <footer className="bg-neutral-light dark:bg-neutral-dark text-gray-600 dark:text-gray-400 py-12 px-4 sm:px-8">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Ir para a página inicial">
            <div className="size-6 text-primary" aria-hidden="true">
              <MdHandyman size={28} className="text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">Grupo LF</h3>
          </Link>
          <p className="text-sm">Sua solução completa em manutenção e reparos em Goiânia.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-text-light dark:text-text-dark">Serviços</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/eletricista">
                Eletricista
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/pintor">
                Pintor
              </Link>
            </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/servicos/gesseiro">
                  Gesseiro
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/servicos/vidraceiro">
                  Vidraceiro
                </Link>
              </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/serralheiro">
                Serralheiro
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/encanador">
                Encanador
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/marcenaria-goiania">
                Marcenaria
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/servicos/marido-de-aluguel">
                Marido de Aluguel
              </Link>
            </li>

          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-text-light dark:text-text-dark">Institucional</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-primary transition-colors" href="/sobre-nos">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/contato">
                Contato
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/politica-de-privacidade">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-text-light dark:text-text-dark">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MdLocationOn aria-hidden="true" size={20} className="text-primary mt-0.5 shrink-0" />
              <span className="leading-tight">R. Ri 12, 2 - Qd 31 Lt 24 - Residencial Itaipú, Goiânia - GO</span>
            </li>
            <li className="flex items-start gap-2">
              <MdCall aria-hidden="true" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>(62) 99115-7746</span>
            </li>
            <li className="flex items-start gap-2">
              <MdEmail aria-hidden="true" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>contato@servicoslf.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
        <p>© 2025 Grupo LF. Todos os direitos reservados.</p>
        <p className="mt-1">
          <a
            href="https://assinaturapro.alekgg.com.br/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 text-sm hover:underline"
          >
            <MdVerified aria-hidden="true" size={16} className="text-[#3897F0]" />
            <span>Site Criado por Alex Fernandes</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
