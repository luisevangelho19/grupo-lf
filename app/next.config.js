/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Explicit Turbopack root: ensures Turbopack treats this project folder
  // as the workspace root when multiple lockfiles are present on the system.
  // When building on Vercel for a repo where the Next app lives in `app/`,
  // set both `turbopack.root` and `outputFileTracingRoot` to the repository
  // root so Next writes `.next` to /vercel/path0/.next (where Vercel expects it).
  // For local dev we keep the app/ folder as the root to avoid changing
  // developer behavior.
  // Turbopack / outputFileTracing handling
  // When Vercel runs the build from the `app/` folder we must place
  // `.next` into the repository root (e.g. /vercel/path0/.next) so
  // the platform can find `routes-manifest.json` after build.
  // Locally we keep the app folder as the root to avoid changing dev
  // behavior (so developers still get `.next` in app/.next).
  turbopack: {
    // Default to app folder for local dev
    root: path.join(__dirname, '.'),
  },
  // Only override outputFileTracingRoot and turbopack.root when running
  // on Vercel during the CI build (process.env.VERCEL === '1').
  // This ensures both values match and Next writes `.next` into the
  // repository root where Vercel expects it.
  ...(process.env.VERCEL
    ? {
        turbopack: { root: path.resolve(__dirname, '..') },
        outputFileTracingRoot: path.resolve(__dirname, '..'),
      }
    : {}),
  // When Vercel runs the build inside `app/` we need Next to output
  // the `.next` folder into the repository root so Vercel will find
  // `.next/routes-manifest.json` at `/vercel/path0/.next` after build.
  // Use a relative distDir so local builds remain unchanged.
  // keep distDir default for both local dev and production
  distDir: '.next',
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react']
  },
  images: {
    // allow optimized images served from /public/images/* and similar
    localPatterns: [
      { pathname: '/images/**' },
      { pathname: '/public/**' }
    ]
  }
}

// Add permanent redirects to preserve SEO when slugs change
// No redirects configured. Previous redirect from `/servicos/encanamento`
// to `/servicos/encanador` was removed because the old page was deleted.
nextConfig.redirects = async () => []

module.exports = nextConfig