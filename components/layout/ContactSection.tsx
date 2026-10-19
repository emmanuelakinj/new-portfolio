import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const contactEmail = "mailto:emmanuelakinj@gmail.com";

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-navy text-paper">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-14 sm:px-8 sm:py-24 md:flex-row md:items-center lg:px-12">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-sky">
            Have something in mind?
          </p>
          <h2 id="contact-heading" className="font-serif text-5xl tracking-tight sm:text-7xl">
            Let&apos;s make it useful.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/70">
            I&apos;m open to interesting ideas, meaningful collaborations, and
            conversations about building better digital experiences.
          </p>
        </div>

        <Link
          href={contactEmail}
          className="group inline-flex w-fit items-center gap-3 border border-paper/40 bg-paper px-6 py-3.5 text-sm text-navy transition-colors duration-300 hover:bg-sky"
        >
          Get in touch
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 text-xs text-white/65 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>
            © {year} Emmanuel Akinjogunla. Building useful things. Growing with
            intention.
          </p>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5">
            <Link
              className="inline-flex min-h-11 items-center transition-colors hover:text-white"
              href="/projects"
            >
              Work
            </Link>
            <Link className="inline-flex min-h-11 items-center transition-colors hover:text-white" href="/about">
              About
            </Link>
            <Link className="inline-flex min-h-11 items-center transition-colors hover:text-white" href="/blog">
              Blog
            </Link>
            <Link
              className="inline-flex min-h-11 items-center transition-colors hover:text-white"
              href={contactEmail}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href={contactEmail}
              aria-label="Email Emmanuel"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-white"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a href="https://github.com/emmanuelakinj" aria-label="Emmanuel on GitHub" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://x.com/emmanuelakinj" aria-label="Emmanuel on X" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-white">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="1200"
                height="1227"
                fill="none"
                viewBox="0 0 1200 1227"
                className="h-4 w-4"
              >
                <path
                  fill="#fff"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </svg>
            </a>

            <a href="https://instagram.com/emmanuelakinj" aria-label="Emmanuel on Instagram" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-white">
              <svg
                aria-hidden="true"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#fff"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
