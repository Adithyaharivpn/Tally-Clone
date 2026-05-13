"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
  { quote: "From installation to ongoing support, the team provided excellent guidance. Our staff is more confident using Tally, thanks to the detailed training sessions.", name: "Shahid Ali", title: "Operations Head" },
  { quote: "We had challenges managing multiple branches, but with their Tally synchronization and remote access solutions, everything is now consolidated and secure.", name: "Anita Nair", title: "Finance Manager" },
  { quote: "They transformed the way we handle accounting. Their Tally setup and training made our processes seamless and error-free. The support team is always just a call away!", name: "Ravi Menon", title: "Business Owner" },
  { quote: "Exceptional customization service. They built exactly what we needed for our manufacturing reporting. Highly professional and always on time.", name: "Priya Sharma", title: "CFO, Manufacturing Co." },
  { quote: "Moving to TallyPrime was smooth thanks to their expert data migration. Zero data loss and our team was trained within a week. Outstanding service!", name: "Mohammed Faisal", title: "Director, Retail Chain" },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const headers = ref.current.querySelectorAll(".testi-header");
    if (headers.length > 0) {
      gsap.fromTo(headers,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play reverse play reverse" } }
      );
    }

    // Decorative gradient orb animation
    gsap.fromTo(".testi-orb",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play reverse play reverse" } }
    );
  }, { scope: ref });

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-(--muted) overflow-hidden" ref={ref}>
      {/* Decorative glow */}
      <div className="testi-orb absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="testi-header text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="testi-header text-3xl md:text-4xl font-bold text-(--foreground) mb-4">What Our Clients Say</h2>
          <p className="testi-header text-(--muted-foreground) max-w-2xl mx-auto">Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped grow.</p>
        </div>

        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  );
}
