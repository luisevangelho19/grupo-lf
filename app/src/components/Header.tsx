"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MdMenu, MdHandyman } from 'react-icons/md'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Hide header for the standalone vidracaria page
  if (pathname && pathname.startsWith('/vidracaria')) return null
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-light/80 dark:border-neutral-dark/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 sm:px-10 w-full">
      <Link href="/" className="flex items-center gap-4 text-primary-dark dark:text-white" aria-label="Ir para a página inicial">
        <div className="size-6 text-primary" aria-hidden="true">
          {/* Use a repair/handyman icon here so the brand symbol better reflects repair services */}
          <MdHandyman size={28} className="text-primary" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display">Grupo LF</h2>
      </Link>
      <nav className="hidden lg:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/eletricista">
            Eletricista
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/pintor">
            Pintor
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/gesseiro">
            Gesseiro
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/vidraceiro">
            Vidraceiro
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/marcenaria-goiania">
            Marcenaria
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/serralheiro">
            Serralheiro
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/encanador">
            Encanador
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/servicos/marido-de-aluguel">
            Marido de Aluguel
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/sobre-nos">
            Sobre nós
          </Link>
          <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/contato">
            Contato
          </Link>
        </div>
        <Link href="/contato" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-opacity-90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
          <span className="truncate">Solicitar Orçamento</span>
        </Link>
      </nav>
      <button className="lg:hidden p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(!open)} aria-expanded={open ? 'true' : 'false'} aria-label="Abrir menu">
        <MdMenu aria-hidden="true" className="text-2xl text-secondary" />
      </button>

      {/* Mobile menu dropdown */}
      <div className={`lg:hidden absolute right-4 top-full mt-2 z-50 w-56 ${open ? 'block' : 'hidden'}`}>
        <div className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-3">
          <nav className="flex flex-col gap-2">
            <Link href="/servicos/eletricista" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Eletricista</Link>
            <Link href="/servicos/pintor" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Pintor</Link>
            <Link href="/servicos/gesseiro" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Gesseiro</Link>
            <Link href="/servicos/vidraceiro" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Vidraceiro</Link>
            <Link href="/servicos/marcenaria-goiania" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Marcenaria</Link>
            <Link href="/servicos/serralheiro" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Serralheiro</Link>
            <Link href="/servicos/encanador" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Encanador</Link>
            <Link href="/servicos/marido-de-aluguel" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Marido de Aluguel</Link>
            <Link href="/sobre-nos" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Sobre nós</Link>
            <Link href="/contato" className="px-3 py-2 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark" onClick={() => setOpen(false)}>Contato</Link>
            <Link href="/contato" className="mt-2 px-3 py-2 rounded bg-primary text-white text-center" onClick={() => setOpen(false)}>Solicitar Orçamento</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
