import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s premium mobile bartending services — weddings, corporate events, private parties, mixology classes, and more.`,
};

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From intimate gatherings to grand celebrations, we have the perfect bar package for every occasion.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="glass-card overflow-hidden group">
              <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FontAwesomeIcon icon={service.icon} className="size-5" />
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-1">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="inline-flex">
                  <Button variant="outline" size="sm" className="gap-1">
                    Learn More <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
