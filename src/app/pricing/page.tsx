import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans, faqs, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent pricing for ${siteConfig.name}'s mobile bartending services. Packages from $499 for intimate gatherings to full-service luxury experiences.`,
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Choose the package that fits your event. Every plan includes professional bartenders, setup, and breakdown.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`glass-card overflow-hidden relative ${
                  plan.popular ? "ring-2 ring-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-1">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-4 text-primary mt-0.5 shrink-0"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
