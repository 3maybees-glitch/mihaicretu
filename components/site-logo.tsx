type SiteLogoProps = {
  variant?: "lockup" | "mark";
  className?: string;
  decorative?: boolean;
};

const emblem = (
  <>
    <circle
      cx="100"
      cy="78"
      r="64"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.25"
    />
    <circle
      cx="100"
      cy="78"
      r="56.5"
      fill="none"
      stroke="#7A99D1"
      strokeWidth="1.15"
    />
    <path
      d="M62.5 104.5
         C 61 78, 72 52.5, 92 57
         C 84.5 66, 82 86, 87.5 107
         M 85 63
         C 96 48, 122 49.5, 132.5 69
         C 142.5 88, 135 113, 112.5 117.5
         C 96 121.5, 81.5 110, 83 93.5
         C 86 109, 105 117, 120 106.5
         C 132 96.5, 132.5 78.5, 120 70
         C 110.5 64, 99.5 69, 99 80"
      fill="none"
      stroke="#7A99D1"
      strokeWidth="3.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

export function SiteLogo({
  variant = "lockup",
  className = "",
  decorative = false,
}: SiteLogoProps) {
  const labelled = decorative
    ? { "aria-hidden": true as const }
    : { role: "img" as const, "aria-label": "Michael Cretu Trio" };

  if (variant === "mark") {
    return (
      <svg viewBox="32 10 136 136" className={className} {...labelled}>
        {emblem}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 248" className={className} {...labelled}>
      {emblem}
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fill="#7A99D1"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="15.5"
        letterSpacing="2.6"
      >
        MICHAEL CRETU
      </text>
      <text
        x="100"
        y="206"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="14"
        letterSpacing="11"
      >
        TRIO
      </text>
    </svg>
  );
}
