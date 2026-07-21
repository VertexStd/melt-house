import { useState, useRef, useEffect, useCallback } from "react";

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
    const checkComplete = () => {
      if (img?.complete && img.naturalWidth > 0) {
        markLoaded();
      }
    };

    checkComplete();
    const frame = requestAnimationFrame(checkComplete);
    return () => cancelAnimationFrame(frame);
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
        className={`h-full w-full object-cover transition-[opacity,transform,filter] duration-700 ease-melt ${
          loaded || failed ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-[2px]"
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
