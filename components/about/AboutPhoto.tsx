import Image, { type StaticImageData } from "next/image";

type AboutPhotoProps = {
  src: StaticImageData | string;
  width?: number;
  height?: number;
  alt: string;
  caption: string;
  number: string;
  variant?: "portrait" | "memory" | "milestone" | "snapshot" | "wide";
  sizes: string;
  preload?: boolean;
};

const photoWidths = {
  portrait: "max-w-[400px]",
  memory: "max-w-[360px]",
  milestone: "max-w-[340px]",
  snapshot: "max-w-[320px]",
  wide: "max-w-[550px]",
};

export function AboutPhoto({
  src,
  width,
  height,
  alt,
  caption,
  number,
  variant = "memory",
  sizes,
  preload = false,
}: AboutPhotoProps) {
  return (
    <figure className={`relative isolate mx-auto w-full ${photoWidths[variant]}`}>
      {variant === "portrait" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-4 bottom-16 top-5 -z-10 -rotate-3 rounded-tl-[72px] rounded-br-[72px] bg-sky/30 sm:-inset-x-6 sm:top-7"
        />
      )}
      <div
        className={
          variant === "portrait"
            ? "relative overflow-hidden rounded-tl-[64px] rounded-br-[64px] border border-navy/15 bg-paper p-2 sm:rounded-tl-[88px] sm:rounded-br-[88px] sm:p-3"
            : "relative overflow-hidden bg-pale after:pointer-events-none after:absolute after:inset-2.5 after:border after:border-paper/60 after:content-['']"
        }
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          preload={preload}
          placeholder={typeof src === "string" ? "empty" : "blur"}
          className={`block h-auto w-full ${variant === "portrait" ? "rounded-tl-[56px] rounded-br-[56px] sm:rounded-tl-[76px] sm:rounded-br-[76px]" : ""}`}
        />
      </div>
      <figcaption
        className={`mt-4 flex justify-between gap-3 ${
          variant === "portrait"
            ? "flex-wrap items-baseline border-t border-navy/20 pt-4"
            : "items-baseline"
        }`}
      >
        <span className="text-xs font-medium leading-5 text-navy">
          {caption}
        </span>
        <span className="shrink-0 font-mono text-[10px] tracking-widest text-ink-soft">
          {number}
        </span>
      </figcaption>
    </figure>
  );
}
