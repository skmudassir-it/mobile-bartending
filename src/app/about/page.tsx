import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlassCitrus,
  faStar,
  faHeart,
  faBullseye,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — a team of passionate mixologists dedicated to crafting unforgettable bar experiences for every occasion.`,
};

const stats = [
  { value: "200+", label: "Events Served" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Venue Partners" },
  { value: "100%", label: "5-Star Reviews" },
];

const values = [
  {
    icon: faHeart,
    title: "Passion for Craft",
    desc: "We live and breathe mixology. Every drink we serve is crafted with precision, creativity, and genuine love for the art of the cocktail.",
  },
  {
    icon: faBullseye,
    title: "Excellence in Service",
    desc: "From the first consultation to the last glass, we hold ourselves to the highest standards of professionalism and hospitality.",
  },
  {
    icon: faStar,
    title: "Memorable Experiences",
    desc: "We don't just pour drinks — we create moments. Every event is an opportunity to make your celebration truly unforgettable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About CraftPour</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We&apos;re on a mission to elevate every event with exceptional cocktails and unforgettable service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CraftPour was born from a simple belief: great drinks make great moments. What started as a
                passion project — mixing cocktails for friends&apos; parties — grew into a full-service mobile
                bartending company trusted by hundreds of clients across the metro area.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over eight years and 200+ events later, we&apos;ve honed our craft to perfection. Our team
                of TIPS-certified bartenders brings not just technical skill, but genuine warmth and
                personality to every event. We understand that behind every drink is a celebration — a
                wedding toast, a corporate milestone, a birthday laugh — and we treat every pour with
                the care it deserves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, CraftPour is proud to be the region&apos;s premier mobile bartending service,
                known for creative cocktail programs, flawless execution, and a team that feels more
                like family than vendors. We can&apos;t wait to be part of your next event.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center mb-10">What Drives Us</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
