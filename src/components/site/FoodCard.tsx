import { site } from "@/data/site";
import type { MenuItem } from "@/data/menu";

export function FoodCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card plate-shadow transition-all duration-500 hover:-translate-y-1">
      {item.image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-none tracking-wide">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
            {item.price}
          </span>
        </div>
        {item.desc && <p className="text-sm text-muted-foreground">{item.desc}</p>}
        <a
          href={site.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1 pt-3 text-sm font-bold tracking-wide text-primary hover:underline"
        >
          Order this →
        </a>
      </div>
    </article>
  );
}
