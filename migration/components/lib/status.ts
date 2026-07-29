import type { LucideIcon } from "lucide-react";
import {
  Archive, CheckCheck, CircleAlert, CircleCheck, CircleDot, CircleX, Clock, Eye,
  LoaderCircle, Pause, PencilLine, RotateCcw, Send, ShieldCheck, ShieldX, TimerOff,
  TriangleAlert,
} from "lucide-react";

export type StatusTone = "neutral" | "brand" | "success" | "warning" | "error" | "info";

export type StatusKey =
  | "form.draft" | "form.published" | "form.paused" | "form.archived"
  | "bot.draft" | "bot.active" | "bot.paused" | "bot.error"
  | "submission.new" | "submission.reviewed" | "submission.in_progress"
  | "submission.completed" | "submission.rejected"
  | "webhook.delivered" | "webhook.pending" | "webhook.failed" | "webhook.retrying"
  | "otp.sent" | "otp.verified" | "otp.expired" | "otp.failed"
  | "key.active" | "key.revoked"
  | "invite.pending";

/**
 * The single source of truth for platform status.
 *
 * Every status is a `<domain>.<state>` key carrying a label, a tone and a glyph.
 * Colour is never the only signal — the word and the glyph always travel with it,
 * so the state survives greyscale, colour-blindness and a screenshot in a ticket.
 *
 * Labels are Azerbaijani; the keys stay English because they are also the
 * webhook event vocabulary a developer greps for.
 */
export const NT_STATUS: Record<StatusKey, { label: string; tone: StatusTone; icon: LucideIcon }> = {
  "form.draft":     { label: "Qaralama",   tone: "neutral", icon: PencilLine },
  "form.published": { label: "Dərc edilib", tone: "success", icon: CircleCheck },
  "form.paused":    { label: "Dayandırılıb", tone: "warning", icon: Pause },
  "form.archived":  { label: "Arxivdə",    tone: "neutral", icon: Archive },

  "bot.draft":  { label: "Qaralama", tone: "neutral", icon: PencilLine },
  "bot.active": { label: "Aktiv",    tone: "success", icon: CircleCheck },
  "bot.paused": { label: "Dayandırılıb", tone: "warning", icon: Pause },
  "bot.error":  { label: "Xəta",     tone: "error",   icon: TriangleAlert },

  "submission.new":         { label: "Yeni",        tone: "info",    icon: CircleDot },
  "submission.reviewed":    { label: "Baxılıb",     tone: "neutral", icon: Eye },
  "submission.in_progress": { label: "Davam edir",  tone: "warning", icon: LoaderCircle },
  "submission.completed":   { label: "Tamamlanıb",  tone: "success", icon: CheckCheck },
  "submission.rejected":    { label: "Rədd edilib", tone: "error",   icon: CircleX },

  "webhook.delivered": { label: "Çatdırılıb", tone: "success", icon: CircleCheck },
  "webhook.pending":   { label: "Gözləyir",   tone: "neutral", icon: Clock },
  "webhook.failed":    { label: "Uğursuz",    tone: "error",   icon: CircleAlert },
  "webhook.retrying":  { label: "Təkrarlanır", tone: "warning", icon: RotateCcw },

  "otp.sent":     { label: "Göndərilib", tone: "info",    icon: Send },
  "otp.verified": { label: "Təsdiqlənib", tone: "success", icon: ShieldCheck },
  "otp.expired":  { label: "Vaxtı bitib", tone: "neutral", icon: TimerOff },
  "otp.failed":   { label: "Uğursuz",    tone: "error",   icon: ShieldX },

  "key.active":  { label: "Aktiv",       tone: "success", icon: CircleCheck },
  "key.revoked": { label: "Ləğv edilib", tone: "error",   icon: CircleX },

  "invite.pending": { label: "Gözləyir", tone: "warning", icon: Clock },
};

/** Tailwind classes per tone. Soft is the default; solid is for counts and pills. */
export const TONE_CLASS: Record<StatusTone, { soft: string; solid: string; dot: string }> = {
  neutral: {
    soft: "bg-muted text-muted-foreground border-border",
    solid: "bg-muted-foreground text-background border-transparent",
    dot: "bg-muted-foreground",
  },
  brand: {
    soft: "bg-primary/10 text-primary border-primary/25",
    solid: "bg-primary text-primary-foreground border-transparent",
    dot: "bg-primary",
  },
  success: {
    soft: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:text-emerald-300",
    solid: "bg-emerald-600 text-white border-transparent",
    dot: "bg-emerald-500",
  },
  warning: {
    soft: "bg-amber-500/10 text-amber-800 border-amber-500/25 dark:text-amber-300",
    solid: "bg-amber-500 text-white border-transparent",
    dot: "bg-amber-500",
  },
  error: {
    soft: "bg-destructive/10 text-destructive border-destructive/25",
    solid: "bg-destructive text-white border-transparent",
    dot: "bg-destructive",
  },
  info: {
    soft: "bg-blue-500/10 text-blue-700 border-blue-500/25 dark:text-blue-300",
    solid: "bg-blue-600 text-white border-transparent",
    dot: "bg-blue-500",
  },
};
