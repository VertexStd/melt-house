import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Native lazy-loaded image with a soft fade-in once decoded,
 * plus a warm placeholder tone so nothing pops in on a hard edge.
 */
export default function LazyImage({ src, alt, className = "", imgClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  const markLoaded = useCallback(() => {
    setLoaded(true);
    setFailed(false);
  }, []);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);

    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      markLoaded();
    }
  }, [src, markLoaded]);

  return (
    <div className={`relative overflow-hidden bg-cream-deep ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={markLoaded}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-all duration-[900ms] ease-melt ${
          loaded || failed ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
