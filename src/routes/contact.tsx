import { createFileRoute } from "@tanstack/react-router";

import { LocationSection } from "@/components/site/LocationSection";
import { OrderCta } from "@/components/site/OrderCta";

const title = "Contact & Location — Times Square Diner & Grill, 807 8th Ave";
const description =
  "Times Square Diner & Grill, 807 8th Ave, New York, NY 10019. Call (212) 315-2400. Open daily 7:00 AM to 11:00 PM, minutes from Times Square.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Say hello</p>
          <h1 className="mt-3 text-5xl leading-[0.9] md:text-7xl">Visit Us</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Walk in, call ahead, or order online — we're open every day of the week.
          </p>
        </div>
      </section>

      <LocationSection />
      <OrderCta />
    </>
  );
}
