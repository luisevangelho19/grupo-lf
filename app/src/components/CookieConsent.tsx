"use client"

import React, { useEffect, useState } from 'react'

type ConsentState = {
  analytics: boolean
  ads: boolean
}

const STORAGE_KEY = 'cookie_consent_v1'

function pushConsentToGtag(state: ConsentState) {
  try {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({ event: 'consent_changed', consent: state })

    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: state.analytics ? 'granted' : 'denied',
        ad_storage: state.ads ? 'granted' : 'denied',
      })
    }
  } catch (e) {
    // non-critical
    // eslint-disable-next-line no-console
    console.warn('Consent update failed', e)
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({ analytics: false, ads: false })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState
        setConsent(parsed)
        setVisible(false)
        pushConsentToGtag(parsed)
      } else {
        setVisible(true)
      }
    } catch (e) {
      setVisible(true)
    }
  }, [])

  function acceptAll() {
    const s = { analytics: true, ads: true }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    setConsent(s)
    pushConsentToGtag(s)
    setVisible(false)
  }

  function rejectAll() {
    const s = { analytics: false, ads: false }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    setConsent(s)
    pushConsentToGtag(s)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center md:justify-end">
      <div className="cookie-card mx-auto w-full max-w-xs rounded-xl bg-white p-4 shadow-[20px_20px_30px_rgba(0,0,0,0.05)] dark:bg-gray-800 md:max-w-sm">
        <div className="flex items-start gap-3">
          <span className="title text-base font-semibold">🍪 Aviso de Cookies</span>
        </div>

        <p className="description mt-3 text-sm leading-5 text-gray-600 dark:text-gray-300">
          Usamos cookies para garantir a melhor experiência no nosso site.{' '}
          <a href="/politica-de-privacidade" className="text-blue-600 hover:underline">Leia a política</a>.
        </p>

        <div className="actions mt-4 flex items-center justify-between gap-4">
          <button
            onClick={() => window.location.assign('/politica-de-privacidade')}
            className="pref text-sm text-gray-800 underline decoration-transparent hover:text-gray-500 dark:text-gray-200"
          >
            Configurar Preferências
          </button>

          <div className="flex gap-2">
            <button
              onClick={rejectAll}
              className="pref rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
            >
              Rejeitar Tudo
            </button>
            <button
              onClick={acceptAll}
              className="accept rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
