import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCalendarCheck,
  faShield,
  faArrowRight,
  faStar,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { siteConfig, services, testimonials, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Premium Mobile Bartending`,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            🍸 Premium Mobile Bartending
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Craft Cocktails,<br />
            <span className="text-primary">Wherever You Are</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From intimate gatherings to grand celebrations, {siteConfig.name} brings the bar to you
            with professional bartenders, premium ingredients, and unforgettable experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="gap-2">
                Book Your Event <FontAwesomeIcon icon={faCalendarCheck} className="size-4" />
              </Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button size="lg" variant="outline" className="gap-2">
                Explore Services <FontAwesomeIcon icon={faArrowRight} className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { icon: faCheckCircle, text: "TIPS Certified" },
              { icon: faShield, text: "Fully Insured" },
              { icon: faStar, text: "200+ Events" },
              { icon: faCalendarCheck, text: "Available 7 Days" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <FontAwesomeIcon icon={item.icon} className="size-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From weddings to corporate galas, we deliver exceptional bar experiences tailored to your event.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="glass-card overflow-hidden h-full group cursor-pointer">
                  <div className="w-full h-36 bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription className="text-xs">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Events</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              See how we&apos;ve transformed events with premium bar service.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.slug} className="glass-card overflow-hidden">
                <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-2 text-xs">{project.category}</Badge>
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="glass-card text-center p-10">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} className="size-12 text-primary mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Raise the Bar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let&apos;s create an unforgettable drink experience for your next event.
              Get in touch for a free consultation and custom quote.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Get Your Free Quote</Button>
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
