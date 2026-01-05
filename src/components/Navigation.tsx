import { cn, Link } from "@heroui/react";
import { BarsIcon, CloseIcon } from "../icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useScreen } from "../hooks/useScreen";

export function Navigation() {
  const { isMdScreen } = useScreen();
  const [isOpen, setIsOpen] = useState(false);
  const navList = ["about", "skills", "projects", "contact"];
  const list = (
    <ul
      className={cn(
        "flex flex-col bg-background/10 backdrop-blur-sm z-10 md:bg-transparent md:static md:flex-row md:backdrop-blur-none fixed right-0 top-16 left-0 gap-0 md:gap-4 justify-end transition-all duration-300",!isMdScreen && "translate-x-full",
        isOpen && "translate-x-0"
      )}
    >
      {navList.map((item) => (
        <Link
          key={item}
          href={`#${item}`}
          className="h-10 md:h-min hover:bg-background/20 px-4 md:px-0 transition-colors duration-300 w-full"
          onClick={() => setIsOpen(false)}
        >
          <li className="capitalize">{item}</li>
        </Link>
      ))}
    </ul>
  );

  return (
    <nav className="w-full flex justify-end">
      {isOpen ? (
        <CloseIcon
          className="inline md:hidden"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <BarsIcon
          className="inline md:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isMdScreen ? list : createPortal(list, document.body)}
    </nav>
  );
}
