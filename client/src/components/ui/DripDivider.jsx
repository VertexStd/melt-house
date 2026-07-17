/**
 * DripDivider — the brand's signature motif.
 * A slow, uneven melt-line echoing the chocolate drip in the Melt House
 * logo mark. Used to close light sections into dark ones (and back),
 * standing in for the generic straight hairline seam.
 *
 * `flip` mirrors it vertically so the same path can open a section
 * as well as close one. `tone` controls the fill so it can sit on
 * cream or espresso backgrounds.
 */
export default function DripDivider({ tone = "cream", flip = false, className = "" }) {
  const fill = tone === "cream" ? "#F7EFE1" : "#2C1A10";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[52px] sm:h-[72px]"
      >
        <path
          d="M0,0 L1440,0 L1440,36 C1380,36 1364,66 1324,66 C1284,66 1276,32 1236,32 C1196,32 1192,78 1148,78 C1104,78 1104,40 1060,40 C1016,40 1016,58 972,58 C928,58 924,24 880,24 C836,24 840,50 796,50 C752,50 752,30 708,30 C664,30 664,62 620,62 C576,62 580,20 536,20 C492,20 492,52 448,52 C404,52 404,34 360,34 C316,34 316,60 272,60 C228,60 232,26 188,26 C144,26 148,46 104,46 C60,46 64,18 20,18 C10,18 4,20 0,22 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
