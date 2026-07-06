import { IMAGES } from "@/lib/content";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <img
      src={IMAGES.logo}
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
