import type { LucideIcon } from "lucide-react";
import { Bot, ClipboardList, Code2, Inbox, KeyRound, Lock, ScrollText, Search, ShieldCheck, Users, Webhook } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The canonical empty states.
 *
 * Every empty state names the object and offers the first step — never a bare
 * "Data yoxdur". Copy lives here rather than at each call site so the same
 * situation reads identically everywhere, and so wording is reviewed once.
 *
 * `search` and `filter` are separate on purpose: "no results for a query" and
 * "no results for these filters" need different recovery actions.
 */
export const NT_EMPTY = {
  bots: {
    icon: Bot,
    title: "Hələ bot yoxdur",
    description: "İlk botunuzu qurun — sualları əlavə edin, paylaşın və cavabları burada toplayın.",
    action: "Bot yarat",
  },
  forms: {
    icon: ClipboardList,
    title: "Hələ forma yoxdur",
    description: "Web forma yaradın və linki paylaşın. Cavablar bu paneldə toplanacaq.",
    action: "Forma yarat",
  },
  responses: {
    icon: Inbox,
    title: "Cavab gözlənilir",
    description: "Botunuzu paylaşın, ilk cavablar burada real vaxtda görünəcək.",
    action: "Botu paylaş",
  },
  search: {
    icon: Search,
    title: "Nəticə tapılmadı",
    description: "Axtarış sözünü qısaldın və ya fərqli yazılış yoxlayın.",
    action: "Axtarışı təmizlə",
  },
  filter: {
    icon: Search,
    title: "Bu süzgəclərə uyğun cavab yoxdur",
    description: "Süzgəcləri yumşaldın və ya tarix aralığını genişləndirin.",
    action: "Süzgəcləri sıfırla",
  },
  apikeys: {
    icon: KeyRound,
    title: "API açarı yoxdur",
    description: "NarTalk-u öz backend-inizdən çağırmaq üçün açar yaradın.",
    action: "Açar yarat",
  },
  webhooks: {
    icon: Webhook,
    title: "Webhook endpoint-i yoxdur",
    description: "Hadisələri öz sisteminizə göndərmək üçün endpoint əlavə edin.",
    action: "Endpoint əlavə et",
  },
  otp: {
    icon: ShieldCheck,
    title: "OTP hələ işlədilməyib",
    description: "Nömrə təsdiqi üçün axınınıza OTP bloku əlavə edin.",
    action: "OTP blokunu əlavə et",
  },
  team: {
    icon: Users,
    title: "Komandada tək sizsiniz",
    description: "Həmkarınızı dəvət edin və rolunu təyin edin.",
    action: "Üzv dəvət et",
  },
  logs: {
    icon: ScrollText,
    title: "Audit log boşdur",
    description: "Workspace-də əməliyyat olduqca hadisələr burada görünəcək.",
  },
  integrations: {
    icon: Code2,
    title: "İntegrasiya yoxdur",
    description: "NarTalk-u işlətdiyiniz alətlərə bağlayın.",
    action: "İntegrasiyalara bax",
  },
  denied: {
    icon: Lock,
    title: "Bu bölməyə girişiniz yoxdur",
    description: "Bu səhifə workspace sahibi və adminlər üçündür. Giriş lazımdırsa, admin ilə əlaqə saxlayın.",
  },
} satisfies Record<string, { icon: LucideIcon; title: string; description: string; action?: string }>;

export type EmptyPreset = keyof typeof NT_EMPTY;

/**
 * EmptyState — use a `preset` rather than writing new wording.
 * Override title/description only for a genuinely new situation, and add it
 * to NT_EMPTY when you do.
 */
export function EmptyState({
  preset,
  title,
  description,
  icon,
  action,
  secondaryAction,
  inline = false,
  className,
}: {
  preset?: EmptyPreset;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  /** Render the primary action; the preset only supplies its label. */
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  inline?: boolean;
  className?: string;
}) {
  const p = preset ? NT_EMPTY[preset] : undefined;
  const Icon = icon ?? p?.icon;
  const head = title ?? p?.title;
  const body = description ?? p?.description;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-center",
        inline ? "px-4 py-8" : "px-6 py-12",
        className,
      )}
    >
      {Icon ? (
        <span className="grid size-11 place-items-center rounded-[10px] border bg-muted text-muted-foreground">
          <Icon size={19} aria-hidden />
        </span>
      ) : null}
      {head ? <div className="text-sm font-semibold">{head}</div> : null}
      {body ? <p className="max-w-[340px] text-[13px] leading-5 text-muted-foreground">{body}</p> : null}
      {action || secondaryAction ? (
        <div className="mt-1 flex items-center gap-2">
          {action}
          {secondaryAction}
        </div>
      ) : null}
    </div>
  );
}

/** The label the preset suggests for its primary action, for the caller's button. */
export function emptyActionLabel(preset: EmptyPreset): string | undefined {
  return (NT_EMPTY[preset] as { action?: string }).action;
}
