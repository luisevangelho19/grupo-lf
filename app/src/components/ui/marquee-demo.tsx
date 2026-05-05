import Marquee from "~/components/ui/marquee";

export function MarqueeDemo() {
  const items = [
    "Eletricista",
    "Pintor",
    "Gesseiro",
    "Vidraceiro",
    "Montador de Móveis",
    "Serralheiro",
    "Encanador",
    "Marido de Aluguel",
  ];

  return (
    <Marquee items={items} />
  );
}
