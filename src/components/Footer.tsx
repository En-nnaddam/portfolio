import { Link } from "@heroui/react";
import { FacebookIcon, InstagramIcon, XIcon } from "../icons";

export function Footer() {
  return (
    <footer className="flex justify-between items-center h-10 px-4 md:px-16">
      <span className="whitespace-nowrap text-sm sm:text-base">Abdessamad Ennaddam &copy;</span>
      <div className="space-x-4">
        <Link href="https://x.com/abdoennaddam">
          <XIcon />
        </Link>
        <Link href="https://web.facebook.com/abd.essamad.7186896/">
          <FacebookIcon /> <span className="hidden sm:inline">Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/abdessamad_ennaddam/">
          <InstagramIcon /> <span className="hidden sm:inline">Instagram</span>
        </Link>
      </div>
    </footer>
  );
}
