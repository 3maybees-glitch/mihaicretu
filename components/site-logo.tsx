import Image from "next/image";

type SiteLogoProps = {
  variant?: "lockup" | "mark";
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

const lockup = {
  src: "/images/logo.png",
  width: 571,
  height: 712,
  sizes: "160px",
} as const;

const mark = {
  src: "/images/logo-mark.png",
  width: 420,
  height: 420,
  sizes: "56px",
} as const;

export function SiteLogo({
  variant = "lockup",
  className = "",
  decorative = false,
  priority = false,
}: SiteLogoProps) {
  const image = variant === "mark" ? mark : lockup;

  return (
    <Image
      src={image.src}
      alt={decorative ? "" : "Michael Cretu Trio"}
      width={image.width}
      height={image.height}
      sizes={image.sizes}
      priority={priority}
      className={`object-contain ${
        variant === "lockup" ? "h-auto w-full" : ""
      } ${className}`.trim()}
    />
  );
}
