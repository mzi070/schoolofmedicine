import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  placeholder: string;
  /** Tailwind classes for the wrapper — set the aspect ratio and radius here. */
  className?: string;
  rounded?: "rect" | "circle";
  sizes?: string;
  priority?: boolean;
  /** "contain" keeps a logo whole inside the frame; "cover" fills and crops. */
  fit?: "cover" | "contain";
  /** Background behind a contained image, e.g. "bg-white" for a logo on white. */
  background?: string;
};

/**
 * A neutral colour block until a real file exists at `src` under /public.
 * See public/README.md for the list of images this site expects.
 */
export default function ImageSlot({
  src,
  alt,
  placeholder,
  className = "",
  rounded = "rect",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  fit = "cover",
  background,
}: Props) {
  const shape = rounded === "circle" ? "rounded-full" : "rounded-2xl";
  const surface = background ?? "bg-n300";

  if (!src) {
    return (
      <div
        className={`relative overflow-hidden bg-n300 ${shape} ${className}`.trim()}
        role="img"
        aria-label={placeholder}
      >
        <div className="absolute inset-0 grid place-items-center p-4 text-center">
          <span className="text-xs leading-snug text-n600">{placeholder}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${surface} ${shape} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "contain" ? "object-contain p-[8%]" : "object-cover"}
      />
    </div>
  );
}
