"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialItem } from "@/lib/data";

export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }}>
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-8 text-primary/20 mb-3" />
                <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="size-3 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
