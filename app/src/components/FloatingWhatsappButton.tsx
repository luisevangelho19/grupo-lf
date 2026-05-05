"use client"

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

type Props = {
  message?: string
  phone?: string
}

export default function FloatingWhatsappButton({ message, phone }: Props) {
  const targetPhone = phone ?? process.env.NEXT_PUBLIC_SITE_WHATSAPP_NUMBER ?? '5562991157746'

  const _message = message ?? 'Olá, gostaria de contratar seus serviços.'

  // Build web-only wa.me URI (we're reverting to web links only)
  const buildWaMeUri = (p: string, text?: string) => `https://wa.me/${p}${text ? `?text=${encodeURIComponent(text)}` : ''}`

  function openWhatsApp(e?: React.MouseEvent) {
    const webUri = buildWaMeUri(targetPhone, _message)

    // push event to dataLayer *before* navigating so GTM captures it even if
    // the browser unloads immediately when the native app opens.
    try {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({
        event: 'whatsapp_click',
        phone: targetPhone,
        message: _message,
        method: e ? 'web-click' : 'web-programmatic',
        page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      })
    } catch (_err) { /* ignore */ }

    // When called from an anchor click, open the web-only wa.me URL in a new tab.
    // For programmatic calls we also open the web URI in a new tab.
      try {
        if (e) {
          e.preventDefault()
          // Use web-only wa.me link for navigation (open in new tab)
          window.open(webUri, '_blank')
        } else {
          // programmatic invocation — open in new tab
          window.open(webUri, '_blank')
        }
      } catch (err) {
        // If something goes wrong, open web URL in current tab
        window.location.href = webUri
      }
  }

  // NOTE: the anchor `href` intentionally points to the web fallback (https://wa.me/...) so
  // non-JavaScript clients or link-opening behavior still navigate to a usable web chat.
  // The click handler (openWhatsApp) opens the web-only wa.me URL.
  return (
    <div aria-hidden="false">
      <a
        href={buildWaMeUri(targetPhone, _message)}
        target="_blank"
        rel="noreferrer noopener"
        role="button"
        aria-label={`Chamar no WhatsApp — ${_message}`}
        title="Chamar no WhatsApp"
        onClick={(e) => {
          // Open web-only wa.me in new tab — keep GTM click triggers intact.
          openWhatsApp(e)
        }}
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 transform transition-transform p-4 md:p-4 text-white shadow-xl rounded-full hover:scale-105 btn-whatsapp"
      >
        <span className="sr-only">Abrir WhatsApp</span>
        <FaWhatsapp aria-hidden="true" className="w-8 h-8 md:w-6 md:h-6" />
        <span className="hidden md:inline-block text-sm font-bold mr-2">Chamar</span>
      </a>
    </div>
  )
}
