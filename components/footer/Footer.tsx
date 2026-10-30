import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full flex-wrap items-end justify-between gap-2 px-5 pb-2.5 text-sm text-light opacity-0 animate-fade-in">
      <p className="text-muted">A new version of this site is on the way.</p>
      <p>Created by {site.name} &copy;</p>
    </footer>
  );
}
