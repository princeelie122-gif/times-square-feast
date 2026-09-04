import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-lg leading-none text-primary-foreground">
            TS
          </span>
          <span className="font-display text-xl leading-none tracking-wide md:text-2xl">
            Times Square
            <span className="block text-[0.62rem] font-semibold tracking-[0.28em] text-muted-foreground">
              DINER &amp; GRILL
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label="Call the diner"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_10px_24px_-12px_var(--color-primary)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Order Online
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block border-b border-border/60 py-3.5 font-display text-2xl tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-primary py-3.5 text-center font-bold text-primary-foreground"
          >
            Order Online
          </a>
        </nav>
      )}
    </header>
  );
}
