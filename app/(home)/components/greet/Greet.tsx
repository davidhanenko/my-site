type GreetProps = {
  text: string;
  status: string[];
  contact: string;
  email: string;
};

export function Greet({ text, status, contact, email }: GreetProps) {
  return (
    <section className="absolute right-[5%] bottom-[45vh] w-[85%] text-light animate-greet min-[601px]:bottom-[25vh] min-[601px]:w-[65%] min-[769px]:w-1/2">
      <p className="text-sm font-light min-[601px]:text-base min-[769px]:text-2xl">{text}</p>
      <p className="mt-4 font-display text-sm font-semibold text-teal2 animate-status min-[601px]:text-base min-[769px]:text-2xl">
        <span className="block">{status[0]}</span>
        <span>{status[1]}</span>{" "}
        <a
          href={`mailto:${email}`}
          className="text-light underline decoration-teal2 underline-offset-4 transition-colors duration-350 hover:text-teal2"
        >
          {contact}
        </a>
      </p>
    </section>
  );
}
