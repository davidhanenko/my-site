export function Greet({ text }: { text: string }) {
  return (
    <section className="absolute right-[5%] bottom-[45vh] w-[85%] text-light animate-greet min-[601px]:bottom-[25vh] min-[601px]:w-[65%] min-[769px]:w-1/2">
      <p className="text-sm font-light min-[601px]:text-base min-[769px]:text-2xl">{text}</p>
    </section>
  );
}
