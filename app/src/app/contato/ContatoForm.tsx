"use client"

import { useState, useRef, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdPhone, MdEmail, MdSchedule, MdMap, MdLocationOn, MdLink, MdElectricalServices, MdFormatPaint, MdHomeRepairService, MdPlumbing, MdWindow, MdConstruction, MdHandyman } from 'react-icons/md'

export default function ContatoForm() {
  const [name, setName] = useState('')
  // phone/email/address states removed — this form sends name, service and message to WhatsApp
  const [service, setService] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)
  useEffect(()=>{
    if (!selectOpen) {
      setHighlightedIndex(-1)
      return
    }
    // when opening, try to highlight current service or first option
    const idx = service ? serviceOptions.findIndex(s=>s.value===service) : -1
    setHighlightedIndex(idx >= 0 ? idx : -1)
  }, [selectOpen, service])
  // options for the custom select (label + value + icon)
  const serviceOptions = [
    { value: 'eletricista', label: 'Eletricista', icon: MdElectricalServices },
    { value: 'pintor', label: 'Pintor', icon: MdFormatPaint },
    { value: 'gesseiro', label: 'Gesseiro', icon: MdHomeRepairService },
    { value: 'encanador', label: 'Encanador', icon: MdPlumbing },
    { value: 'vidraceiro', label: 'Vidraceiro', icon: MdWindow },
    { value: 'serralheiro', label: 'Serralheiro', icon: MdConstruction },
    { value: 'marido-de-aluguel', label: 'Marido de Aluguel', icon: MdHandyman },
    { value: 'outro', label: 'Outro', icon: MdLink },
  ]
  // Example suggestions for the description field based on selected service
  const serviceExamples: Record<string, string> = {
    eletricista: 'Ex.: Troca de tomadas e revisão do quadro elétrico no quarto.',
    pintor: 'Ex.: Pintura interna de sala (12m²), preparação de superfície e pintura com tinta acrílica.',
    gesseiro: 'Ex.: Instalação de forro de gesso em sala com 15m².',
    encanador: 'Ex.: conserto de vazamento na pia da cozinha e substituição de registros.',
    vidraceiro: 'Ex.: Troca de vidro temperado na janela da sala (1,2m x 1,0m).',
    serralheiro: 'Ex.: Fabricação de grades para janelas e instalação.',
    'marido-de-aluguel': 'Ex.: Montagem de móveis e pequenos reparos domésticos.',
    outro: 'Descreva brevemente o serviço que você precisa.'
  }
  const [description, setDescription] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [examplePlaceholder, setExamplePlaceholder] = useState('Descreva sua necessidade')

  // Prefill from URL query params if present (e.g. /contato?service=pintor&name=Alex&message=Oi)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const qName = params.get('name')
    const qService = params.get('service')
    const qMessage = params.get('message') || params.get('msg') || params.get('description')
    if (qName) setName(decodeURIComponent(qName))
    if (qMessage) setDescription(decodeURIComponent(qMessage))
    if (qService) {
      const normalized = qService.toLowerCase()
      const opt = serviceOptions.find(s => s.value === normalized || s.label.toLowerCase() === normalized)
      if (opt) setService(opt.value)
      else setService(normalized)
    }
  }, [])

  // update example placeholder when service changes; do not overwrite user message
  useEffect(() => {
    if (!service) {
      setExamplePlaceholder('Descreva sua necessidade')
      return
    }
    const example = serviceExamples[service] ?? 'Descreva sua necessidade'
    setExamplePlaceholder(example)
  }, [service])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // validate required fields: name, service, message and privacy
    if (!name || !service || !description) {
      setStatus('missing')
      return
    }
    if (!privacy) {
      setStatus('policy')
      return
    }
    setStatus('loading')

    try {
      const targetPhone = process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'
      const foundLabel = serviceOptions.find(s => s.value === service)?.label
      const serviceLabel = foundLabel ?? (service || '—')
      const displayName = name || '—'
      const displayDesc = description || '-'
      // WhatsApp supports bold text using *asterisks*
      const text = `Olá, meu nome é *${displayName}*. Serviço: *${serviceLabel}*. Mensagem: ${displayDesc} (enviado do site)`
      const webUri = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`

      // Push event to dataLayer before opening so GTM captures clicks/submits
      // even when the native WhatsApp app intercepts navigation.
      try {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({ event: 'whatsapp_click', phone: targetPhone, message: text, method: 'web-submit', page_path: typeof window !== 'undefined' ? window.location.pathname : undefined })
      } catch (_){ /* ignore */ }

      // Try to open the native app first (mobile). If it doesn't open, fall back
      // to the web url shortly after.
      try {
        // Open the web-only wa.me link — this keeps behaviour consistent across devices
        window.open(webUri, '_blank')
      } catch (err) {
        window.location.href = webUri
      }

      setStatus('ok')
      setName('')
      setService('')
      setDescription('')
      setPrivacy(false)
    } catch (err) {
      console.error('Falha ao abrir WhatsApp', err)
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-1 justify-center py-5 bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="w-full max-w-6xl rounded-lg bg-white shadow-xl px-4 sm:px-6 md:px-8 py-8">
        <div className="@container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left: info panel */}
            <div className="flex flex-col gap-8 bg-black p-8 text-white md:p-12 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-black tracking-tight">Solicite um Orçamento</h1>
                <p className="text-base font-normal leading-relaxed text-white/80">Preencha o formulário ao lado ou entre em contato conosco por um de nossos canais. Estamos prontos para resolver seu problema!</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-base font-medium leading-normal">Se preferir, fale conosco diretamente:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                      <div className="flex w-10 h-10 items-center justify-center rounded-full bg-white/12 p-2"><MdPhone aria-hidden="true" className="text-white text-lg" /></div>
                      <p className="flex-1 truncate text-base font-normal leading-normal">(62) 99115-7746</p>
                    </div>
                  <div className="flex items-center gap-4">
                    <div className="flex w-10 h-10 items-center justify-center rounded-full bg-white/12 p-2"><FaWhatsapp aria-hidden="true" className="text-white text-lg" /></div>
                    <p className="flex-1 truncate text-base font-normal leading-normal">(62) 99115-7746</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex w-10 h-10 items-center justify-center rounded-full bg-white/12 p-2"><MdEmail aria-hidden="true" className="text-white text-lg" /></div>
                    <p className="flex-1 truncate text-base font-normal leading-normal">contato@servicoslf.com.br</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-base font-medium leading-normal">Nossos serviços:</p>
                <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 lg:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdElectricalServices className="text-white/90 mr-2 text-base" /><span>Eletricista</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdFormatPaint className="text-white/90 mr-2 text-base" /><span>Pintor</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdHomeRepairService className="text-white/90 mr-2 text-base" /><span>Gesseiro</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdPlumbing className="text-white/90 mr-2 text-base" /><span>Encanador</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdWindow className="text-white/90 mr-2 text-base" /><span>Vidraceiro</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdConstruction className="text-white/90 mr-2 text-base" /><span>Serralheiro</span></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><MdHandyman className="text-white/90 mr-2 text-base" /><span>Marido de Aluguel</span></div>
                </div>
              </div>
            </div>

            {/* Right: new form layout (keeps visual layout from provided HTML) */}
            <div className="p-8 md:p-12">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input id="fullName" value={name} onChange={e=>setName(e.target.value)} required className="peer h-14 w-full rounded border border-slate-300 bg-transparent p-4 text-strong placeholder-transparent focus:border-primary focus:outline-none focus:ring-0" placeholder="Nome Completo" type="text" />
                  <label className="absolute -top-3 left-2 bg-white px-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary" htmlFor="fullName">Nome Completo</label>
                </div>

                {/* Custom select (button + list) with icons */}
                <div className="relative">
                  <label className="sr-only" htmlFor="service">Qual serviço você precisa?</label>
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={selectOpen}
                    ref={buttonRef}
                    aria-controls="service-listbox"
                    aria-activedescendant={selectOpen && highlightedIndex >= 0 ? `service-opt-${serviceOptions[highlightedIndex].value}` : undefined}
                    onClick={()=>{
                      setSelectOpen(prev=>!prev)
                      if (!selectOpen) setHighlightedIndex( service ? serviceOptions.findIndex(s=>s.value===service) : -1 )
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        if (!selectOpen) {
                          setSelectOpen(true)
                          setHighlightedIndex(service ? serviceOptions.findIndex(s=>s.value===service) : 0)
                          setTimeout(()=>{ const el = listRef.current?.children[0] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                        } else {
                          setHighlightedIndex(prev => {
                            const next = Math.min(prev + 1, serviceOptions.length - 1)
                            setTimeout(()=>{ const el = listRef.current?.children[next] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                            return next
                          })
                        }
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        if (!selectOpen) {
                          setSelectOpen(true)
                          setHighlightedIndex(service ? serviceOptions.findIndex(s=>s.value===service) : serviceOptions.length - 1)
                          setTimeout(()=>{ const el = listRef.current?.children[serviceOptions.length - 1] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                        } else {
                          setHighlightedIndex(prev => {
                            const next = Math.max(prev - 1, 0)
                            setTimeout(()=>{ const el = listRef.current?.children[next] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                            return next
                          })
                        }
                      } else if (e.key === 'Enter') {
                        e.preventDefault()
                        if (selectOpen && highlightedIndex >= 0) {
                          const opt = serviceOptions[highlightedIndex]
                          setService(opt.value)
                          setSelectOpen(false)
                          setHighlightedIndex(-1)
                          setTimeout(()=>buttonRef.current?.focus(), 0)
                        } else {
                          setSelectOpen(true)
                          setHighlightedIndex(service ? serviceOptions.findIndex(s=>s.value===service) : 0)
                        }
                      } else if (e.key === 'Escape') {
                        setSelectOpen(false)
                        setHighlightedIndex(-1)
                        setTimeout(()=>buttonRef.current?.focus(), 0)
                      }
                    }}
                    onBlur={(e)=>{
                      // close when focus leaves (give short timeout for clicks)
                      setTimeout(()=>setSelectOpen(false), 150)
                    }}
                    className={`peer h-14 w-full appearance-none rounded border border-slate-300 bg-transparent p-4 text-left text-strong flex items-center justify-between focus:border-primary focus:outline-none focus:ring-0`}
                  >
                    <div className="flex items-center gap-3">
                      {service ? (
                        (() => {
                          const opt = serviceOptions.find(s=>s.value===service)
                          if (!opt) return null
                          const Icon = opt.icon
                          return (
                            <>
                              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary"><Icon className="text-primary" /></span>
                              <span>{opt.label}</span>
                            </>
                          )
                        })()
                      ) : (
                        <span className="text-gray-500">Serviço</span>
                      )}
                    </div>
                    <span className="text-gray-500">▾</span>
                  </button>

                  {selectOpen && (
                    <ul id="service-listbox" role="listbox" tabIndex={-1} ref={listRef} onKeyDown={(e)=>{
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        if (highlightedIndex >= 0) {
                          const opt = serviceOptions[highlightedIndex]
                          setService(opt.value)
                          setSelectOpen(false)
                          setHighlightedIndex(-1)
                          setTimeout(()=>buttonRef.current?.focus(), 0)
                        }
                      } else if (e.key === 'Escape') {
                        setSelectOpen(false)
                        setHighlightedIndex(-1)
                        setTimeout(()=>buttonRef.current?.focus(), 0)
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setHighlightedIndex(prev => Math.min(prev + 1, serviceOptions.length - 1))
                        setTimeout(()=>{ const elIndex = Math.min(highlightedIndex + 1, serviceOptions.length - 1); const el = listRef.current?.children[elIndex] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setHighlightedIndex(prev => Math.max(prev - 1, 0))
                        setTimeout(()=>{ const elIndex = Math.max(highlightedIndex - 1, 0); const el = listRef.current?.children[elIndex] as HTMLElement | undefined; el?.scrollIntoView({ block: 'nearest' }) }, 0)
                      }
                    }} className="absolute z-20 mt-2 w-full max-h-56 overflow-auto rounded-md border border-slate-200 bg-white shadow-lg">
                      {serviceOptions.map((opt, idx)=>{
                        const Icon = opt.icon
                        const highlighted = highlightedIndex === idx
                        return (
                          <li id={`service-opt-${opt.value}`} key={opt.value} role="option" aria-selected={service===opt.value} onMouseDown={(e)=>{e.preventDefault(); setService(opt.value); setSelectOpen(false);}} onMouseEnter={()=>setHighlightedIndex(idx)} className={`cursor-pointer px-4 py-3 ${highlighted ? 'bg-slate-100' : 'hover:bg-slate-100'} flex items-center gap-3 text-sm`}>
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary"><Icon /></span>
                            <span>{opt.label}</span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    required
                    className={`peer h-32 w-full resize-none rounded border border-slate-300 bg-transparent p-4 text-strong focus:border-primary focus:outline-none focus:ring-0 ${description.length === 0 ? '' : 'placeholder-transparent'}`}
                    placeholder={examplePlaceholder}
                    rows={4}
                  />
                  <label className="sr-only" htmlFor="message">Mensagem</label>
                </div>

                <div className="flex items-center gap-3">
                  <input id="privacy" type="checkbox" checked={privacy} onChange={e=>setPrivacy(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="privacy" className="text-sm text-gray-700 dark:text-gray-300">Eu li e concordo com a <a className="text-primary hover:underline" href="/politica-de-privacidade">Política de Privacidade</a>.</label>
                </div>

                <button className="w-full rounded bg-primary py-4 text-base font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">Solicitar Orçamento</button>

                {status === 'loading' && <div className="text-sm text-gray-600">Abrindo WhatsApp…</div>}
                {status === 'ok' && <div className="text-sm text-green-700">Mensagem enviada — obrigado! Entraremos em contato.</div>}
                {status === 'error' && <div className="text-sm text-red-700">Ocorreu um erro ao enviar. Tente novamente.</div>}
                {status === 'policy' && <div className="text-sm text-red-700">É necessário concordar com a Política de Privacidade.</div>}
                {status === 'missing' && <div className="text-sm text-red-700">Preencha todos os campos obrigatórios.</div>}
              </form>
            </div>
          </div>
        </div>

        <h2 className="text-strong dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contato Rápido</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <a href="tel:+5562991157746" className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary transition-colors">
            <div className="text-primary"><MdPhone aria-hidden="true" size={20} /></div>
            <div>
              <h3 className="text-strong dark:text-white font-bold">(62) 99115-7746</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Telefone</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'}`}
            onClick={(e) => {
              e.preventDefault()
              const targetPhone = process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'
              const webUri = `https://wa.me/${targetPhone}`
              try {
                try { ;(window as any).dataLayer = (window as any).dataLayer || []; ;(window as any).dataLayer.push({ event: 'whatsapp_click', phone: targetPhone, method: 'web-click', page_path: typeof window !== 'undefined' ? window.location.pathname : undefined }) } catch (_){ /* ignore */ }
                window.open(webUri, '_blank')
              } catch (_){ window.location.href = webUri }
            }}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chamar Grupo LF no WhatsApp (abrir em nova aba)"
            className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary transition-colors"
          >
            <div className="text-primary"><FaWhatsapp aria-hidden="true" size={20} className="text-whatsapp" /></div>
            <div>
              <h3 className="text-strong dark:text-white font-bold">(62) 99115-7746</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">WhatsApp</p>
            </div>
          </a>

          <a href="mailto:contato@servicoslf.com.br" className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary transition-colors">
            <div className="text-primary"><MdEmail aria-hidden="true" size={20} /></div>
            <div>
              <h3 className="text-strong dark:text-white font-bold truncate">contato@servicoslf.com.br</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">E-mail</p>
            </div>
          </a>
        </div>

        {/* Old larger contact + form removed — replaced by the simplified layout above */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-strong dark:text-white mb-3 flex items-center gap-2"><MdSchedule aria-hidden="true" className="text-primary" size={18} /> Nosso Horário de Atendimento</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>Segunda a Sábado <strong>07:00 - 18:00</strong> — Domingo: Fechado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-strong dark:text-white mb-3 flex items-center gap-2"><MdMap aria-hidden="true" className="text-primary" size={18} /> Área de Cobertura</h3>
              <p className="text-gray-600 dark:text-gray-300">Toda Goiânia e Aparecida de Goiânia</p>
            </div>
            {/* 'Acesse Também' removed as requested */}
          </div>
          <div>
            <h3 className="text-lg font-bold text-strong dark:text-white mb-3 flex items-center gap-2"><MdLocationOn aria-hidden="true" className="text-primary" size={18} /> Onde nos encontrar</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <a href="https://maps.app.goo.gl/B5w65VtY6NmjdSNMA" target="_blank" rel="noreferrer noopener" aria-label="Abrir localização Grupo LF no Google Maps (abre em nova aba)" className="block w-full h-full">
                  <img src="/map-preview-lf.svg" alt="Mapa — Grupo LF (Residencial Itaipú, Goiânia)" className="w-full h-full object-cover" loading="lazy" />
                </a>
              </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Nota: O mapa é fornecido pelo Google Maps. Ao interagir, você concorda com os termos de serviço e política de privacidade do Google.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
