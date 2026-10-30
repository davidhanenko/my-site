import { site } from "@/content/site";

import { Bg } from "./bg/Bg";
import { Greet } from "./greet/Greet";
import { Name } from "./name/Name";

export function Home() {
  return (
    <main id="home" className="mx-auto h-dvh max-w-site overflow-hidden">
      <div className="relative mt-header flex min-h-full w-full items-center justify-center overflow-hidden px-12.5">
        <Bg logos={site.techLogos} />
        <Name />
        <Greet text={site.greeting} />
      </div>
    </main>
  );
}
