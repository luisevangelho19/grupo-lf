"use client"

import { useEffect } from 'react'

// Global click listener that detects clicks on WhatsApp links (wa.me / api.whatsapp.com)
// and pushes a dataLayer event before opening the target. This avoids having to
// add onClick handlers to every anchor and guarantees GTM sees the event.
export default function WhatsAppLinkTracker() {
  useEffect(() => {
    const lastPush: { href?: string; ts?: number } = {}

    function extractFromWaMe(href: string) {
      try {
        const url = new URL(href, window.location.href)
        const host = url.hostname || ''
        let phone = ''
        let text = ''

        if (host.includes('wa.me')) {
          phone = url.pathname.replace(/^\/+/, '')
          text = url.searchParams.get('text') || ''
        } else if (host.includes('api.whatsapp.com')) {
          phone = url.searchParams.get('phone') || ''
          text = url.searchParams.get('text') || ''
        }

        return { phone, text }
      } catch (err) {
        return { phone: '', text: '' }
      }
    }

    function onDocumentClick(e: MouseEvent) {
      try {
        const target = (e.target as Element) || null
        if (!target) return
        const anchor = (target as Element).closest && (target as Element).closest('a[href]') as HTMLAnchorElement | null
        if (!anchor) return

        const href = anchor.getAttribute('href')
        if (!href) return

        // Only handle web WhatsApp links
        if (!/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return

        // Deduplicate quick double pushes for the same href
        const now = Date.now()
        if (lastPush.href === href && lastPush.ts && now - lastPush.ts < 1000) {
          // already pushed very recently
          return
        }

        const { phone, text } = extractFromWaMe(href)
        const message = text || ''
        const method = 'web-click'

        try {
          ;(window as any).dataLayer = (window as any).dataLayer || []
          ;(window as any).dataLayer.push({
            event: 'whatsapp_click',
            phone,
            message,
            method,
            page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          })
        } catch (_err) {
          // ignore
        }

        lastPush.href = href
        lastPush.ts = now

        // If opening in same tab, open in new tab instead so GTM has time
        // to deliver the hits (and consistent behaviour across devices)
        const targetAttr = anchor.target
        if (!targetAttr || targetAttr === '_self') {
          e.preventDefault()
          // Open in new tab (short timeout to allow any synchronous handlers)
          setTimeout(() => {
            window.open(href, '_blank')
          }, 80)
        }
      } catch (_e) {
        // swallow
      }
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  return null
}
