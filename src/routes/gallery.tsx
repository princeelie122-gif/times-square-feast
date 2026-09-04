import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero-breakfast.jpg";
import interior from "@/assets/interior.jpg";
import nyc from "@/assets/nyc-street.jpg";
import { images } from "@/data/menu";
import { OrderCta } from "@/components/site/OrderCta";

const shots = [
  { src: images.pancakes, alt: "Chocolate chip pancakes with syrup" },
  { src: images.frenchToast, alt: "French toast with strawberries" },
  { src: images.greekOmelette, alt: "Greek omelette with feta and tomato" },
  { src: images.eggsBenedict, alt: "Eggs benedict with hollandaise" },
  { src: images.timesSquareBurger, alt: "The Times Square burger with fries" },
  { src: images.friedChickenSandwich, alt: "Crispy fried chicken sandwich" },
  { src: images.gyro, alt: "Chicken gyro sandwich stuffed with fries" },
  { src: images.cubanSandwich, alt: "Pressed Cuban sandwich" },
  { src: images.hangerSteak, alt: "Grilled hanger steak with asparagus" },
  { src: images.salmon, alt: "Grilled fillet of salmon with rice pilaf" },
  { src: images.pasta, alt: "Meatballs and spaghetti" },
  { src: images.fries, alt: "Disco fries with gravy and mozzarella" },
  { src: images.greekSalad, alt: "Greek salad with feta and olives" },
  { src: images.cheesecake, alt: "Homemade cheesecake with berry compote" },
  { src: hero, alt: "Full diner breakfast spread" },
  { src: interior, alt: "Inside the diner: chrome counter and red booths" },
  { src: nyc, alt: "Times Square and 8th Avenue at dusk" },
];

const title = "Gallery — Times Square Diner & Grill Food Photos";
const description =
  "Pancakes, omelettes, burgers, gyros, steak, salmon and desserts — a look at the food and the room at Times Square Diner & Grill in Midtown Manhattan.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="px-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">The good stuff</p>
          <h1 className="mt-3 text-5xl leading-[0.9] md:text-7xl">Gallery</h1>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {shots.map((s) => (
            <figure
              key={s.alt}
              className="break-inside-avoid overflow-hidden rounded-2xl plate-shadow"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <OrderCta />
    </>
  );
}
