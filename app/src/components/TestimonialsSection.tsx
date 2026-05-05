import { MdStar } from 'react-icons/md'
import { reviews, Review } from '../lib/reviews'
import ReviewsStructuredData from './ReviewsStructuredData'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400" aria-hidden="true">
      {Array.from({ length: rating }).map((_, index) => (
        <MdStar key={index} className="text-base" />
      ))}
    </div>
  )
}

function TestimonialCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <img
          src="/google-icon.svg"
          alt="Google"
          width={24}
          height={24}
          className="h-6 w-6"
          aria-hidden="true"
        />
        <div className="flex flex-col">
          <p className="text-base font-semibold leading-tight text-[#212529] dark:text-white">{review.name}</p>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <blockquote className="text-sm font-normal leading-relaxed text-[#343A40] dark:text-gray-300">{review.comment}</blockquote>
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
        <span>{review.date}</span>
        <span className="px-2 py-1 bg-primary/5 dark:bg-primary/20 text-primary rounded-full">{review.service}</span>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 text-center mb-8 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#212529] dark:text-white">A confiança de quem contrata</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Veja o que nossos clientes em Goiânia têm a dizer sobre nossos serviços de manutenção.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://g.page/r/CZjBE-oTDYpOEAI/review"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
          >
            <img src="/google-icon.svg" alt="Google" className="h-4 w-4" aria-hidden="true" />
            Fazer Avaliação
          </a>
        </div>
      </div>
      <ReviewsStructuredData />
    </section>
  )
}