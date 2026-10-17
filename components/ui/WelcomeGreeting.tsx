"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sessionKey = "emmanuel-welcome-seen";

export function WelcomeGreeting() {
  const dialog = useRef<HTMLDialogElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const savedOverflow = useRef("");
  const [leaving, setLeaving] = useState(false);

  function finish() {
    setLeaving(true);
  }

  useLayoutEffect(() => {
    const intro = dialog.current;
    if (!intro) return;
    try {
      // if (sessionStorage.getItem(sessionKey)) return;
    } catch {
      // Browser storage is optional.
    }

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    savedOverflow.current = previousOverflow;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    intro.showModal();
    document.body.style.overflow = "hidden";
    skip.current?.focus({ preventScroll: true });

    const timer = window.setTimeout(finish, reducedMotion ? 900 : 3200);
    return () => {
      window.clearTimeout(timer);
      intro.close();
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement)
        previouslyFocused.focus({ preventScroll: true });
    };
  }, []);

  useLayoutEffect(() => {
    if (!leaving) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => {
        dialog.current?.close();
        try {
          sessionStorage.setItem(sessionKey, "true");
        } catch {
          // Closing the intro never depends on storage.
          sessionStorage.setItem(sessionKey, "false");
        }
      },
      reducedMotion ? 0 : 550,
    );
    return () => window.clearTimeout(timer);
  }, [leaving]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="welcome-heading"
      aria-describedby="welcome-description"
      onCancel={(event) => {
        event.preventDefault();
        finish();
      }}
      onClose={() => {
        document.body.style.overflow = savedOverflow.current;
        if (dialog.current?.contains(document.activeElement)) {
          document
            .querySelector<HTMLElement>("header a, main a, main button")
            ?.focus({ preventScroll: true });
        }
      }}
      className={`welcome-loader fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-paper p-6 text-navy backdrop:bg-paper ${leaving ? "welcome-loader-leaving" : ""}`}
    >
      <div className="flex min-h-full flex-col items-center justify-center text-center">
        <p className="welcome-copy mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-deep">
          A little hello before we begin
        </p>
        <Image
          src="/me.png"
          alt="Emmanuel's Bitmoji waving hello"
          width={1592}
          height={1592}
          preload
          sizes="(max-width: 639px) 220px, 280px"
          className="welcome-avatar h-[min(36dvh,280px)] w-auto max-w-[70vw] origin-bottom object-contain"
        />
        <div className="welcome-copy mt-5" role="status">
          <h2
            id="welcome-heading"
            className="font-serif text-5xl tracking-tight sm:text-7xl"
          >
            Hey, welcome<span className="text-blue">.</span>
          </h2>
          <p id="welcome-description" className="mt-4 text-sm text-ink-soft">
            I&apos;m Emmanuel. Come see what I&apos;ve been building.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="mt-8 h-0.5 w-40 overflow-hidden rounded-full bg-navy/10"
        >
          <div className="welcome-progress h-full origin-left rounded-full bg-blue-deep" />
        </div>
        <button
          ref={skip}
          type="button"
          onClick={finish}
          className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full px-5 text-xs text-blue-deep transition-colors hover:bg-sky/20"
        >
          Let&apos;s explore{" "}
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>
    </dialog>
  );
}
