"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig, services } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  eventType: z.string().min(1, "Select an event type"),
  date: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().min(10, "Tell us about your event"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <Card className="glass-card p-10">
            <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-2">Message Sent!</h1>
            <p className="text-muted-foreground mb-6">
              Thanks for reaching out! We&apos;ll get back to you within 24 hours to discuss your event.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Plan Your Event</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Tell us about your event and we&apos;ll create a custom proposal tailored to your vision and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Name *</label>
                      <Input {...register("name")} placeholder="Your name" />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email *</label>
                      <Input {...register("email")} type="email" placeholder="you@email.com" />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone *</label>
                      <Input {...register("phone")} placeholder="(555) 123-4567" />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Event Type *</label>
                      <Select
                        onValueChange={(v: string | null) =>
                          setValue("eventType", v || "", { shouldValidate: true })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.eventType && (
                        <p className="text-xs text-destructive mt-1">{errors.eventType.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Event Date</label>
                      <Input {...register("date")} type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Estimated Guests</label>
                      <Input {...register("guests")} type="number" placeholder="e.g. 80" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Tell Us About Your Event *</label>
                    <Textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us about your event — date, location, guest count, any special requests..."
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                  <Button type="submit" disabled={isSubmitting} className="gap-2">
                    <FontAwesomeIcon icon={faPaperPlane} className="size-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {[
              { icon: faPhone, label: "Call Us", value: siteConfig.phone },
              { icon: faEnvelope, label: "Email", value: siteConfig.email },
              { icon: faLocationDot, label: "Service Area", value: siteConfig.address },
              { icon: faClock, label: "Hours", value: siteConfig.hours },
            ].map((item, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={item.icon} className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
