import { reviewsJsonLd } from '../lib/reviews'

export default function ReviewsStructuredData() {
  return (
    <script
      key="reviews-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
    />
  )
}
