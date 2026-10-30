import type { TechLogo } from "@/content/site";

// hand-placed so the logos frame the name and greeting instead of landing behind them
const spots = [
  { top: "8%", left: "10%" },
  { top: "6%", left: "38%" },
  { top: "10%", left: "64%" },
  { top: "14%", left: "86%" },
  { top: "34%", left: "90%" },
  { top: "52%", left: "6%" },
  { top: "46%", left: "30%" },
  { top: "72%", left: "12%" },
  { top: "66%", left: "34%" },
  { top: "88%", left: "26%" },
  { top: "90%", left: "56%" },
  { top: "84%", left: "84%" },
];

export function Bg({ logos }: { logos: TechLogo[] }) {
  return (
    <div aria-hidden className="absolute inset-0 text-teal2/25 opacity-0 animate-fade-in">
      {logos.map(({ title, Icon }, index) => (
        <Icon
          key={title}
          className="absolute size-9 animate-drift min-[601px]:size-14"
          // a different length and start point per logo keeps the drift from ever lining up
          style={{
            ...spots[index % spots.length],
            animationDuration: `${24 + (index * 5) % 17}s`,
            animationDelay: `-${index * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
