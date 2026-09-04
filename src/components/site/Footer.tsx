import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="night-panel px-4 pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-wide">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-night-foreground/70">
            Classic New York diner food, served all day in the heart of Manhattan.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow text-gold">Visit</p>
          <p className="mt-3 text-night-foreground/80">
            {site.street}
            <br />
            {site.city}
          </p>
          <a href={site.phoneHref} className="mt-3 block font-semibold hover:text-gold">
            {site.phoneDisplay}
          </a>
          <p className="mt-3 text-night-foreground/70">{site.hours}</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow text-gold">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-night-foreground/80">
            <Link to="/menu" className="hover:text-gold">
              Full Menu
            </Link>
            <Link to="/about" className="hover:text-gold">
              About Us
            </Link>
            <Link to="/gallery" className="hover:text-gold">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Contact &amp; Location
            </Link>
            <a href={site.orderUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Order Online
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-night-foreground/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
