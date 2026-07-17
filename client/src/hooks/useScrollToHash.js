import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls to the element matching the current URL hash
 * whenever the route or hash changes. Falls back to scrolling
 * to the top of the page when there is no hash.
 */
export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const timeout = setTimeout(() => {
          const navOffset = 88;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }, 80);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [pathname, hash]);
}
