type GreetProps = {
  text: string;
  progress: string;
  availability: string;
  contact: string;
  email: string;
};

export function Greet({ text, progress, availability, contact, email }: GreetProps) {
  return (
    <section className="absolute right-[5%] bottom-[45vh] w-[85%] text-light animate-greet min-[601px]:bottom-[25vh] min-[601px]:w-[65%] min-[769px]:w-1/2">
      <p className="mb-3 inline-block rounded-sm border border-muted/60 px-2 py-0.5 text-xs text-light-gray min-[769px]:text-sm">
        {progress}
      </p>
      <p className="text-sm font-light min-[601px]:text-base min-[769px]:text-2xl">{text}</p>
      <p className="mt-4 text-sm animate-status min-[601px]:text-base min-[769px]:text-2xl">
        {availability}{" "}
        <a
          href={`mailto:${email}`}
          className="underline decoration-teal2 underline-offset-4 transition-colors duration-350 hover:text-teal2"
        >
          {contact}
        </a>
      </p>
    </section>
  );
}
