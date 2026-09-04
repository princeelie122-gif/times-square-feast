import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function LocationSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="mt-3 text-4xl leading-[0.95] md:text-5xl">{site.name}</h2>
          <p className="mt-5 text-muted-foreground">
            Steps from Times Square in the heart of Midtown Manhattan — an easy walk from the
            Theater District, Hell's Kitchen and the Port Authority.
          </p>

          <dl className="mt-7 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <dd>
                {site.street}
                <br />
                {site.city}
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <dd>
                <a href={site.phoneHref} className="font-semibold hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <dd>Monday – Sunday, 7:00 AM – 11:00 PM</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background"
            >
              Get Directions
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-border px-6 py-3 text-sm font-bold hover:border-primary hover:text-primary"
            >
              Call Now
            </a>
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              Order Online
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border plate-shadow">
          <iframe
            title="Map showing Times Square Diner & Grill at 807 8th Ave"
            src={site.mapEmbed}
            loading="lazy"
            className="h-[320px] w-full md:h-[460px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
