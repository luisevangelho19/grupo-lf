export type Review = {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  publishedAt: string
  service: string
  avatar: string
}

export const reviews: Review[] = [
  {
    id: 'review-1',
    name: 'Maria S.',
    rating: 5,
    comment:
      'Serviço impecável! Profissionalismo e pontualidade do início ao fim. Recomendo fortemente a todos em Goiânia.',
    date: '02/03/2025',
    publishedAt: '2025-03-02',
    service: 'Reparo Hidráulico',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtYfrFG_eF9bxR2ldqaWXvIKR1DtBTp4MVbi7tPoGQ2PVsqXlkn8_yedsFj43rO9rz4RN18OZSqfb8rfFS0lgiNsHabGWST3jhU9dQAry9hQSvuNyOfEtv6NnT49CasNuDdYFN3z1oI9KJI1TPlfrtISmwFV6jKgajyEKSIGtltdXMK-g0Sv_YzXO1tG8ur6uUM7_jccgTr4jPzIwFeAwAhVz3V-qPcOh-gvRjbfww1hnNVj0FMOnhWUaXO1DkoL6dDG1mT6L_eQ',
  },
  {
    id: 'review-2',
    name: 'João P.',
    rating: 5,
    comment:
      'Resolveram meu problema elétrico rapidamente e com muita eficiência. Atendimento nota 10, super honestos.',
    date: '15/08/2025',
    publishedAt: '2025-08-15',
    service: 'Instalação Elétrica',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSdXVwJVwSDGpguQjDAtJfao33hGFBgJIwQJYBrTL_wdWUuepizqLqFXLNMT1JzyBY1SuFs3b6efyuvsYRs0jw2BBh5mK7TV5d4ZnhRhUTiMQMk1muloq8csZsP4_dX1JWqwXxzWvNAfgaJ9KQSM1rTphV_vTROdezeq1rdkFOhhyJaOWOvWPrlZlS-k2NrsjfHrRvHMRW8XYSEi4xm10sYfzojuZwLgzN5BHc3TNcs_THSKSptS4bjcbIWFR6rzp3qfjg2LKjQ',
  },
  {
    id: 'review-3',
    name: 'Ana C.',
    rating: 5,
    comment:
      'A instalação do ar condicionado foi perfeita. Equipe muito cuidadosa, organizada e deixaram tudo limpo.',
    date: '07/09/2024',
    publishedAt: '2024-09-07',
    service: 'Manutenção de Ar Condicionado',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlhPpZjOZSwl2rpkNF0Vtm_CoNN4UeCN2ygPUvvk2GOZB0yE2xEG1oP5byOuGZc-HK7cseC_uC_DjzAcecqxvFhhl0HjnFGjhN1axcGuqEYslKLgIpLzjlIdEwqZosZfMEl8HGKEl54A9eOvvfX770S62VhTKQohGyMKAUKT0tO0DGfI8jBwQ7FzNIhN2vqMJfQjMaOLamr6x8nuTsH4BTwzqe-SzUDHV8yrCnBQP0dOLTJE7Fc6cn6JwETjmuYT6eS6xMCkOCCw',
  },
  {
    id: 'review-4',
    name: 'Carlos M.',
    rating: 5,
    comment:
      'Contratei para a pintura interna e o resultado ficou excelente. Trabalho de alta qualidade, superou minhas expectativas.',
    date: '28/04/2024',
    publishedAt: '2024-04-28',
    service: 'Pintura Interna',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_QswbeuUZV_M39XVeB-AiRz6w1OP6Sanaz631CSUNidcpsq1gR4mG3ItKgngnlOGCxzwaUNfRhzEiq6gaAo2ANpYEqlabDCZ9Hx1fPA4CFfDIB3wPybQ1KTMFVk2hjD-rN3zT_fb_7Vw-pt3eniivkaNhvdZZaZnkePuHoTQftyvBEu1mAPJsJ_YVqU0OEkkdZT178VVgxyOb8RGThO6H9K7JanpG3UBOYFBrI6aPtX1a4x0Gm846NKrbiwW5GcPLwo6DYqBEQ',
  },
]

export const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Grupo LF',
  url: 'https://servicoslf.com.br',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    )
      .toFixed(1)
      .toString(),
    bestRating: '5',
    ratingCount: reviews.length.toString(),
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    datePublished: review.publishedAt,
    reviewBody: review.comment,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewAspect: review.service,
  })),
}
