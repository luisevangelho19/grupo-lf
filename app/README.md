# site-servicos (local scaffold)

Scaffold mínimo do site institucional (MVP) — Next.js (App Router) + TypeScript (stack minimal).

Observação importante: por decisão de manter o repositório enxuto e seguro, o projeto foi reduzido para um setup minimal (Next.js + React + TypeScript). Algumas implementações e placeholders foram adicionados — porém dependências opcionais como Tailwind, @mdx-js/mdx, next-seo e next-sitemap foram separadas do conjunto mínimo e não estão instaladas por padrão. Se quiser reativar as features completas (MDX render, JSON-LD helpers do next-seo, sitemap generation etc.) eu posso reinstalar as dependências apropriadas.

Instalação local (PowerShell):

```powershell
cd app
npm install
npm run dev
```

Arquivos importantes:

- `next.config.js` — config do Next
- `next.config.js` — config do Next
- `postcss.config.cjs` — postcss (autoprefixer) — Tailwind removido no setup minimal
- `next-sitemap.config.js` — configuração opcional de sitemap (instalação manual necessária)

Observações rápidas:

- Conteúdo de serviços: `app/content/services/*.mdx` contém exemplos de MDX/frontmatter. Para renderizar MDX no servidor é preciso instalar `@mdx-js/mdx` e `@mdx-js/react`.
- JSON‑LD e SEO: implementações de prova de conceito existem (ex.: `src/components/ServiceJsonLd.tsx`), mas o uso pleno do `next-seo` está opcional.
- Contato: formulário de contato abre WhatsApp com mensagem pré‑preenchida; endpoint de persistência foi descontinuado em produção.

Deployment notes (Vercel / Cloudflare Pages)

Contact flow: production is WhatsApp-first; there is no server-side persistence by default. If you later enable a server sink it should be configured through the deployment provider's secrets and integrated with durable delivery and retries.

Domain configuration

- `SITE_URL` — set this to your production domain (ex.: https://servicoslf.com.br). This is used by `next-sitemap` and canonical tags. You can set it in your deployment provider (Vercel / Cloudflare Pages) and locally with `.env` (see `.env.example`).

Vercel setup

1. Go to the Vercel project dashboard → Settings → Environment Variables.
2. Add the variables above for `Production` (and `Preview` if needed).
3. Deploy — the API route will run as a serverless function.

Cloudflare Pages setup

1. In the Pages project → Settings → Environment variables, add the same env vars. For Supabase use a service-role `LEADS_SUPABASE_KEY` stored as a secret.
2. Cloudflare Pages functions will run on the Edge; ensure your chosen sink allows requests from Cloudflare's IP ranges or uses secrets correctly.

Notes & recommendations

- Do NOT persist leads to local disk in production — the app will refuse to write locally in production to prevent data loss on serverless platforms.
- For production grade use, prefer Supabase (or any DB) + a background job + retry logic, or a webhook that pushes to your CRM. Avoid using public keys in client code and store secrets in your deployment provider secrets.
- Add retries / durable messaging if webhook is used to avoid lost leads.

  Nota: por padrão o fluxo de contato em produção usa WhatsApp. Se precisar reativar persistência de leads, faça isso conscientemente (secrets na plataforma de deploy e entrega durável/retries serão necessários).

Se preferir que eu reative toda a stack (Tailwind/MDX/next-seo/tests), confirme e eu reinstalo as dependências e garanto que o projeto roda com todas as features completas.

- `next-sitemap.config.js` — configuração de sitemap & robots
