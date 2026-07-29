"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * OtpInput — Telegram verification-code entry.
 *
 * One hidden input owns the value; the cells are presentational. That is what
 * makes paste, autofill (`one-time-code`), IME and mobile keyboards work —
 * the usual six-separate-inputs approach breaks all four.
 */
export function OtpInput({
  length = 6,
  value,
  onChange,
  state = "default",
  groupAfter,
  autoFocus = false,
  disabled = false,
  className,
}: {
  length?: number;
  value: string;
  onChange: (v: string) => void;
  state?: "default" | "error" | "success";
  /** Insert a visual separator after this many cells (e.g. 3 → 482 · 913). */
  groupAfter?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  const input = useRef<HTMLInputElement>(null);
  const digits = value.slice(0, length).split("");
  const active = Math.min(digits.length, length - 1);

  return (
    <div
      className={cn("relative inline-flex items-center gap-2", className)}
      onClick={() => input.current?.focus()}
    >
      <input
        ref={input}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, length))}
        inputMode="numeric"
        autoComplete="one-time-code"
        autoFocus={autoFocus}
        disabled={disabled}
        maxLength={length}
        aria-label="Təsdiq kodu"
        aria-invalid={state === "error" || undefined}
        className="absolute inset-0 z-10 w-full cursor-default opacity-0"
      />
      {Array.from({ length }).map((_, i) => (
        <span key={i} className="flex items-center gap-2">
          <span
            aria-hidden
            className={cn(
              "grid h-12 w-10 place-items-center rounded-md border bg-background font-mono text-xl font-medium tabular-nums transition-[border-color,box-shadow,background-color]",
              digits[i] && "border-muted-foreground/40",
              state === "default" && i === active && !disabled && "border-ring ring-2 ring-ring/30",
              state === "error" && "border-destructive bg-destructive/5 text-destructive",
              state === "success" && "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",
              disabled && "bg-muted text-muted-foreground",
            )}
          >
            {digits[i] ?? ""}
          </span>
          {groupAfter && i === groupAfter - 1 && i < length - 1 ? (
            <span aria-hidden className="h-px w-2 bg-muted-foreground/40" />
          ) : null}
        </span>
      ))}
    </div>
  );
}
