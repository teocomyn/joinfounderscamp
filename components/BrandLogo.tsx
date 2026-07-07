import Image from "next/image";
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
    <Image
      src={src}
      alt="The Founders Camp"
      className={className}
      width={360}
      height={206}
      sizes="(max-width: 960px) 140px, 172px"
      priority={priority}
    />
  );
}
