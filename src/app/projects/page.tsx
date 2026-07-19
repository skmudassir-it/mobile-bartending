import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Browse ${siteConfig.name}'s portfolio of events — weddings, corporate galas, private parties, festivals, and mixology workshops.`,
};

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Work</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A showcase of events we&apos;ve had the pleasure of serving. Each one tells a story of great drinks and unforgettable moments.
          </p>
        </div>
        <ProjectsClient />
      </div>
    </section>
  );
}
