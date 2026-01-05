import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="h-16 flex items-center px-4 md:px-16 bg-background/20 fixed top-0 left-0 w-full backdrop-blur-sm z-20">
      <div className="font-['Space_Grotesk'] md:font-extrabold tracking-wide md:text-xl whitespace-nowrap">Abdessamad Ennaddam</div>
      <Navigation />
    </header>
  );
}
