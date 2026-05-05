// The project is configured to use WhatsApp CTAs only in production.
// Keep this route as a safe stub so accidental calls get a clear response.
export async function POST() {
  return new Response(JSON.stringify({ ok: false, error: 'Endpoint de leads removido — use WhatsApp (CTA) para contato.' }), { status: 410 })
}
