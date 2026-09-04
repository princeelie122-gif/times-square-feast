import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import heroImage from "@/assets/hero-breakfast.jpg";
import interior from "@/assets/interior.jpg";
import { favorites } from "@/data/menu";
import { site } from "@/data/site";
import { FoodCard } from "@/components/site/FoodCard";
import { LocationSection } from "@/components/site/LocationSection";
import { OrderCta } from "@/components/site/OrderCta";

const title = "Times Square Diner & Grill — Classic NYC Diner on 8th Ave";
const description =
  "Fresh, satisfying diner favorites served all day at 807 8th Ave in Midtown Manhattan. Breakfast anytime, burgers, sandwiches and entrées. Open daily 7AM–11PM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="New York diner breakfast with pancakes, eggs, bacon and coffee"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.15_0.02_50/0.82)_0%,oklch(0.15_0.02_50/0.55)_45%,oklch(0.15_0.02_50/0.9)_100%)]" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-center px-4 py-24 text-night-foreground">
          <span className="rise inline-flex w-fit items-center gap-2 rounded-full border border-night-foreground/25 bg-night/40 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {site.addressFull}
          </span>
          <h1 className="rise mt-6 max-w-4xl text-[clamp(2.9rem,11vw,6.5rem)] leading-[0.86] tracking-wide">
            Times Square
            <span className="block text-primary">Diner &amp; Grill</span>
          </h1>
          <p className="rise mt-5 max-w-xl font-display text-2xl tracking-wide text-gold md:text-3xl">
            Classic New York diner food, right in the heart of Manhattan
          </p>
          <p className="rise mt-4 max-w-lg text-night-foreground/80">
            Fresh, satisfying diner favorites served all day in the heart of New York City.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full border border-night-foreground/40 px-7 py-3.5 font-bold tracking-wide backdrop-blur transition-colors hover:bg-night-foreground hover:text-night"
            >
              View Full Menu
            </Link>
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 font-bold tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Most ordered</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl leading-[0.95] md:text-6xl">NYC Favorites</h2>
            <Link to="/menu" className="text-sm font-bold text-primary hover:underline">
              See the whole menu →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.map((item) => (
              <FoodCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl plate-shadow">
            <img
              src={interior}
              alt="Inside Times Square Diner & Grill with chrome counter and red booths"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Since day one</p>
            <h2 className="mt-3 text-4xl leading-[0.95] md:text-5xl">A New York Diner Classic</h2>
            <p className="mt-5 text-muted-foreground">
              Coffee poured before you sit down, omelettes folded to order, burgers off the grill
              and a slice of cheesecake for the walk back to the theater. We've been feeding
              Midtown the honest way for years — big plates, fair prices, open early to late.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex text-sm font-bold text-primary hover:underline"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      <LocationSection />
      <OrderCta />
    </>
  );
}
