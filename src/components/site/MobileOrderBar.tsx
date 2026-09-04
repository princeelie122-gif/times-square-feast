import { Phone, ShoppingBag } from "lucide-react";
import { site } from "@/data/site";

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 px-3 py-3 backdrop-blur-md md:hidden">
      <a
        href={site.phoneHref}
        className="flex h-12 w-14 shrink-0 items-center justify-center rounded-full border border-border text-foreground"
        aria-label="Call the diner"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={site.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-bold tracking-wide text-primary-foreground"
      >
        <ShoppingBag className="h-5 w-5" />
        Order Online
      </a>
    </div>
  );
}
