import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { menu } from "@/data/menu";
import { site } from "@/data/site";
import { FoodCard } from "@/components/site/FoodCard";
import { OrderCta } from "@/components/site/OrderCta";

const title = "Full Menu — Times Square Diner & Grill, NYC";
const description =
  "Breakfast anytime, specialty omelettes, 8 oz. burgers, sandwiches, entrées, desserts and drinks. See the full Times Square Diner & Grill menu with prices.";

export const Route = createFileRoute("/menu")({
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
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];
  const withPhotos = category.items.filter((i) => i.image);
  const rest = category.items.filter((i) => !i.image);

  return (
    <>
      <section className="night-panel px-4 pb-10 pt-16 md:pb-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-gold">Served all day</p>
          <h1 className="mt-3 text-5xl leading-[0.9] md:text-7xl">The Menu</h1>
          <p className="mt-4 max-w-lg text-night-foreground/70">
            Everything is made to order. Prices shown are current in-house prices.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur md:top-20">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4">
          <div className="flex gap-2 py-3">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
                  active === c.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl leading-none md:text-5xl">{category.name}</h2>
          {category.note && <p className="mt-3 text-sm text-muted-foreground">{category.note}</p>}

          {withPhotos.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {withPhotos.map((item) => (
                <FoodCard key={item.name} item={item} />
              ))}
            </div>
          )}

          {rest.length > 0 && (
            <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
              {rest.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-6 border-b border-border py-4"
                >
                  <div>
                    <p className="font-display text-2xl leading-none tracking-wide">
                      {item.name}
                      {item.ageRestricted && (
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 align-middle text-[0.6rem] font-bold tracking-widest text-primary">
                          21+
                        </span>
                      )}
                    </p>
                    {item.desc && (
                      <p className="mt-1 max-w-md text-sm text-muted-foreground">{item.desc}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
          )}

          {category.id === "drinks-21" && (
            <p className="mt-8 rounded-2xl bg-secondary p-5 text-sm text-secondary-foreground">
              Alcoholic beverages are age-restricted. You must be 21 or older with valid ID to
              purchase.
            </p>
          )}

          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-3.5 font-bold tracking-wide text-primary-foreground"
          >
            Order {category.name} Online
          </a>
        </div>
      </section>

      <OrderCta />
    </>
  );
}
