import { metrics, metricsNote } from "@/lib/cv";

export function Metrics() {
  return (
    <>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(132px,1fr))] gap-px overflow-hidden rounded-sm border border-rule bg-rule">
        {metrics.map((metric) => (
          <div key={metric.caption} className="bg-surface px-4 pb-3.5 pt-4">
            <div className="font-mono text-[1.62rem] font-medium leading-tight tracking-tight text-accent tabular-nums">
              {metric.figure}
            </div>
            <div className="mt-1 text-[0.79rem] leading-snug text-ink-2">
              {metric.caption}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.82rem] text-ink-3">{metricsNote}</p>
    </>
  );
}
