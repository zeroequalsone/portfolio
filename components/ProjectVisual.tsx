import Image from "next/image";
import Link from "next/link";

type Props = {
  variant: "orbit" | "linkbloom";
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  priority?: boolean;
};

const VARIANT_STYLES = {
  orbit: {
    containerBg: "bg-black",
    wrapperStyle:
      "border-orbit-border shadow-[4px_4px_0px_0px_var(--color-orbit-shadow)] hover:shadow-[6px_6px_0px_0px_var(--color-orbit-shadow)]",
  },
  linkbloom: {
    containerBg: "bg-linkbloom-background-2",
    wrapperStyle:
      "border-linkbloom-border bg-linkbloom-background shadow-[4px_4px_0px_0px_var(--color-linkbloom-shadow)] hover:shadow-[6px_6px_0px_0px_var(--color-linkbloom-shadow)]",
  },
};

export default function ProjectVisual({
  variant,
  href,
  imageSrc,
  imageAlt,
  title,
  priority = false,
}: Props) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`${styles.containerBg} p-6 md:p-12 flex items-center justify-center`}
    >
      <div
        className={`w-full aspect-video border-2 bg-black flex items-center justify-center relative overflow-hidden hover:-translate-1 transition-all ${styles.wrapperStyle}`}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} Live-Anwendung aufrufen`}
          className="w-full h-full block relative"
        >
          <Image
            src={`/${imageSrc}`}
            alt={imageAlt}
            className="object-cover object-top"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={priority}
          />
        </Link>
      </div>
    </div>
  );
}
