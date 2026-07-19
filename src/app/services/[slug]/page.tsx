import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowLeft, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
        </Link>

        <div className="glass-card overflow-hidden mb-12">
          <div className="w-full h-64 sm:h-80 bg-muted flex items-center justify-center overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FontAwesomeIcon icon={service.icon} className="size-5" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">{service.title}</h1>
          </div>
          <div className="gradient-divider w-24 mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {service.longDescription}
          </p>

          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">What&apos;s Included</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="gap-2">
                <FontAwesomeIcon icon={faCalendarCheck} className="size-4" /> Book This Service
              </Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Other Services</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <Card className="glass-card overflow-hidden h-full group cursor-pointer">
                    <div className="w-full h-32 bg-muted flex items-center justify-center overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <FontAwesomeIcon icon={s.icon} className="size-4 text-primary" />
                        <h3 className="font-semibold text-sm">{s.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{s.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
