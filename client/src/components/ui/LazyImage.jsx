import { useState } from "react";

/**
 * Native lazy-loaded image with a soft fade-in once decoded,
 * plus a warm placeholder tone so nothing pops in on a hard edge.
 */
export default function LazyImage({ src, alt, className = "", imgClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-cream-deep ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-[900ms] ease-melt ${
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
