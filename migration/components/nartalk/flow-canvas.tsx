"use client";

import { useCallback, useRef, useState } from "react";
import { Maximize2, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EdgeDefs, type NodeKind } from "./flow-node";

/**
 * FlowCanvas — pan/zoom work surface for the bot builder.
 *
 * Deliberately dependency-free. @xyflow/react is the right call once the
 * builder needs edge re-routing, multi-select marquee or nested subflows;
 * until then it is a large runtime for a dotted div with a transform.
 *
 * Node *positions* stay owned by the caller so the canvas has no opinion
 * about persistence — it reports drops and drags, the caller stores them.
 */
export function FlowCanvas({
  children,
  toolbar,
  minimap,
  onDropNode,
  className,
}: {
  children: React.ReactNode;
  toolbar?: React.ReactNode;
  minimap?: React.ReactNode;
  onDropNode?: (kind: NodeKind, at: { x: number; y: number }) => void;
  className?: string;
}) {
  const [zoom, setZoom] = useState(90);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const surface = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const clampZoom = (z: number) => Math.min(200, Math.max(25, Math.round(z)));

  // Ctrl/⌘ + wheel zooms (the browser gesture users already know);
  // plain wheel is left alone so the page/canvas can still scroll.
  const onWheel = useCallback((e: React.WheelEvent) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    setZoom((z) => clampZoom(z - e.deltaY * 0.25));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    // Middle-click or space-less background drag pans; left-drag on a node is
    // the node's own concern, so ignore anything that started on a child.
    if (e.target !== e.currentTarget && e.button !== 1) return;
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setPan({
      x: drag.current.px + (e.clientX - drag.current.x),
      y: drag.current.py + (e.clientY - drag.current.y),
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    drag.current = null;
    (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const onDrop = (e: React.DragEvent) => {
    const kind = e.dataTransfer.getData("application/nartalk-node") as NodeKind;
    if (!kind || !onDropNode) return;
    e.preventDefault();
    const box = surface.current?.getBoundingClientRect();
    if (!box) return;
    const scale = zoom / 100;
    onDropNode(kind, {
      x: (e.clientX - box.left - pan.x) / scale,
      y: (e.clientY - box.top - pan.y) / scale,
    });
  };

  const fit = () => {
    setZoom(100);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className={cn("relative flex-1 overflow-hidden bg-muted/40", className)}>
      {/* Dot grid scales and pans with the content so it reads as one surface. */}
      <div
        ref={surface}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: "radial-gradient(color-mix(in oklch, var(--border) 90%, transparent) 1px, transparent 1px)",
          backgroundSize: `${16 * (zoom / 100)}px ${16 * (zoom / 100)}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      >
        <div
          className="absolute origin-top-left"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom / 100})` }}
        >
          <svg className="pointer-events-none absolute overflow-visible" width={2000} height={1600} aria-hidden>
            <EdgeDefs />
          </svg>
          {children}
        </div>
      </div>

      {toolbar ? <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2">{toolbar}</div> : null}
      {minimap ? <div className="absolute bottom-3 right-3 z-20">{minimap}</div> : null}

      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-0.5 rounded-lg border bg-card p-1 shadow-md">
        <button
          type="button"
          onClick={() => setZoom((z) => clampZoom(z - 10))}
          aria-label="Uzaqlaşdır"
          className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Minus size={14} />
        </button>
        <span className="min-w-11 text-center text-xs font-medium tabular-nums">{zoom}%</span>
        <button
          type="button"
          onClick={() => setZoom((z) => clampZoom(z + 10))}
          aria-label="Yaxınlaşdır"
          className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Plus size={14} />
        </button>
        <button
          type="button"
          onClick={fit}
          aria-label="Ekrana sığdır"
          className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Maximize2 size={13} />
        </button>
      </div>
    </div>
  );
}

/** CanvasToolbar — the floating tool strip. Shadow is earned: it hovers over content. */
export function CanvasToolbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 items-center gap-1 rounded-lg border bg-card px-2 shadow-md">{children}</div>
  );
}

export function ToolbarDivider() {
  return <span className="mx-1 h-5 w-px bg-border" aria-hidden />;
}
