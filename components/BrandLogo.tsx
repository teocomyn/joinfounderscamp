import { IMAGES } from "@/lib/content";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** dark = logo noir (fonds clairs) · light = logo blanc (fonds sombres) */
  variant?: "dark" | "light";
};

export default function BrandLogo({
  className = "",
  priority = false,
  variant = "dark",
}: BrandLogoProps) {
  const src = variant === "light" ? IMAGES.logoLight : IMAGES.logo;

  return (
    <img
      src={src}
      alt="The Founders Camp"
      className={className}
      width={1024}
      height={585}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
