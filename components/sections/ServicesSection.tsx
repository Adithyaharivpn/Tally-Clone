"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Settings, LifeBuoy, GraduationCap, Database, Monitor, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Implementation & Setup", description: "Complete TallyPrime setup — installation, configuration, and go-live handholding for smooth, accurate accounting from day one.", icon: <Settings className="w-8 h-8" /> },
  { title: "Customization Services", description: "Tailor TallyPrime to your business with custom reports, invoice formats, barcode integration, and industry-specific TDL modules.", icon: <Wrench className="w-8 h-8" /> },
  { title: "Onsite & Remote Support", description: "Professional onsite visits and remote assistance to resolve issues swiftly. Annual maintenance contracts for uninterrupted service.", icon: <LifeBuoy className="w-8 h-8" /> },
  { title: "Corporate Training", description: "Comprehensive training and certification programs for your accounting staff to maximize TallyPrime utility and productivity.", icon: <GraduationCap className="w-8 h-8" /> },
  { title: "Data Synchronization", description: "Consolidate multi-location data seamlessly. Remote access solutions for branch management without hassle.", icon: <Database className="w-8 h-8" /> },
  { title: "Data Migration & Upgrades", description: "Seamlessly upgrade from older Tally versions or migrate existing data into TallyPrime without any data loss.", icon: <Monitor className="w-8 h-8" /> },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Decorative line wipe animation
    gsap.fromTo(".services-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );

    // Header label slide in
    gsap.fromTo(ref.current.querySelectorAll(".services-header"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-(--background)" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="services-header text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">Our Services</p>
          <div className="services-header">
            <TextGenerateEffect
              words="Comprehensive Tally Solutions"
              className="text-3xl md:text-4xl text-(--foreground) mb-4"
            />
          </div>
          <div className="services-line h-1 w-24 mx-auto bg-primary-500 rounded-full mb-4 origin-left" />
          <p className="services-header text-(--muted-foreground) max-w-2xl mx-auto">
            From initial setup to custom deployment and lifetime support — we are your end-to-end partner for all things TallyPrime.
          </p>
        </div>

        <HoverEffect items={services} />
      </div>
    </section>
  );
}
