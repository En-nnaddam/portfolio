import { useEffect, useState } from "react";
const MD_SCREEN_SIZE = 768;

export function useScreen() {
  const [isMdScreen, setIsMdScreen] = useState(
    window.innerWidth >= MD_SCREEN_SIZE
  );

  useEffect(() => {
    const onResize = () => {};

    window.addEventListener("resize", () =>
      setIsMdScreen(window.innerWidth >= MD_SCREEN_SIZE)
    );

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { isMdScreen };
}
