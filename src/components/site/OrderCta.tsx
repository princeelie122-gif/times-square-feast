import { site } from "@/data/site";

export function OrderCta() {
  return (
    <section className="night-panel px-4 py-20 text-center md:py-28">
      <p className="eyebrow text-gold">Pickup &amp; Delivery</p>
      <h2 className="mx-auto mt-4 max-w-2xl text-4xl leading-[0.95] md:text-6xl">
        Hungry? Order your favorites online.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-night-foreground/70">
        Skip the wait and enjoy your favorite Times Square Diner &amp; Grill dishes for pickup or
        delivery.
      </p>
      <a
        href={site.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-primary px-10 py-4 font-bold tracking-[0.14em] text-primary-foreground uppercase transition-transform hover:scale-[1.04]"
      >
        Order Online
      </a>
    </section>
  );
}
