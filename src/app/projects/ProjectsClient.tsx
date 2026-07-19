"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";

const categories = ["All", "Wedding", "Corporate", "Private Party", "Festival", "Mixology Class"];

export function ProjectsClient() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={activeTab === cat ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.slug} className="glass-card overflow-hidden group">
            <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-5">
              <Badge variant="secondary" className="mb-2 text-xs">{project.category}</Badge>
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <Link href="/contact" className="inline-flex">
                <Button variant="outline" size="sm" className="gap-1">
                  Book Similar <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
