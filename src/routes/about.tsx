import { createFileRoute, Link } from "@tanstack/react-router";

import interior from "@/assets/interior.jpg";
import nyc from "@/assets/nyc-street.jpg";
import { LocationSection } from "@/components/site/LocationSection";
import { OrderCta } from "@/components/site/OrderCta";

const title = "About — A New York Diner Classic on 8th Ave";
const description =
  "Times Square Diner & Grill serves classic American diner favorites in Midtown Manhattan: breakfast anytime, burgers, sandwiches, salads, entrées and desserts.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="px-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-3 text-5xl leading-[0.9] md:text-7xl">A New York Diner Classic</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              We're on 8th Avenue, a couple of blocks off Times Square, with the coffee on and the
              griddle hot from seven in the morning until eleven at night. Cab drivers, stagehands,
              nurses coming off shift, families with theater tickets — everybody ends up in the
              same booths eventually.
            </p>
            <p>
              The food is the food you hope for in a New York diner. Omelettes folded around feta
              and spinach. French toast that actually tastes like custard. Eight-ounce burgers on a
              house blend. Gyros stuffed with fries, the way they should be. Hanger steak and
              salmon when you want a real dinner, and a slice of homemade cheesecake after.
            </p>
            <p>
              Nothing here is complicated. We cook to order, we don't cut corners on the meat or
              the potatoes, and we'd rather you leave too full than hungry. That's the whole idea.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <img
            src={interior}
            alt="Chrome counter and red booths inside the diner"
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover plate-shadow md:h-96"
          />
          <img
            src={nyc}
            alt="8th Avenue and Times Square at dusk"
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover plate-shadow md:h-96"
          />
        </div>
      </section>

      <section className="bg-cream px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {[
            { k: "Breakfast all day", v: "Eggs, omelettes, pancakes and benedicts from 7AM to close." },
            { k: "Made to order", v: "Fresh cut fries, house burger blend, dressings made in house." },
            { k: "Two minutes away", v: "A short walk from Times Square, the Theater District and Port Authority." },
          ].map((f) => (
            <div key={f.k}>
              <h2 className="font-display text-3xl tracking-wide">{f.k}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.v}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <Link to="/menu" className="text-sm font-bold text-primary hover:underline">
            Browse the full menu →
          </Link>
        </div>
      </section>

      <LocationSection />
      <OrderCta />
    </>
  );
}
