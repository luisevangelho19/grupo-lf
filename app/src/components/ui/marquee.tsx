export default function Marquee({ items, separator = ' ◇ ', bgColor = 'bg-white dark:bg-gray-900', textColor = 'text-text-light dark:text-text-dark', textSize = 'text-4xl' }: { items: string[]; separator?: string; bgColor?: string; textColor?: string; textSize?: string }) {
  return (
    <div className={`relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-gray-300 dark:border-gray-700 ${bgColor} ${textColor} font-base`}>
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span key={`${item}-${index}`} className={`mx-4 ${textSize} font-semibold`}>
              {item}
              {index < items.length - 1 && <span className="ml-4">{separator}</span>}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span key={`${item}-${index}-copy`} className={`mx-4 ${textSize} font-semibold`}>
              {item}
              {index < items.length - 1 && <span className="ml-4">{separator}</span>}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}
