"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NumberTicker from "@/components/ui/number-ticker";
import { Award, Users, Globe, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <Award className="w-6 h-6" />, value: 30, suffix: "+", label: "Years Experience" },
  { icon: <Users className="w-6 h-6" />, value: 2000, suffix: "+", label: "Happy Clients" },
  { icon: <Globe className="w-6 h-6" />, value: 50, suffix: "+", label: "Custom Modules" },
  { icon: <Headphones className="w-6 h-6" />, value: 24, suffix: "/7", label: "Expert Support" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll(".stat-card");
    const icons = ref.current.querySelectorAll(".stat-icon");

    // Fade in the container
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      }
    );

    // Stagger the stat values
    const values = ref.current.querySelectorAll(".stat-value");
    gsap.fromTo(
      values,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className="relative -mt-16 sm:-mt-24 z-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 p-6 sm:p-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center group ${
                i > 1 ? "pt-8 md:pt-0" : "pt-0"
              }`}
            >
              <div className="stat-value flex flex-col items-center">
                <div className="mb-3 p-3 rounded-2xl bg-primary-50 dark:bg-primary-950/50 text-primary-600 transition-colors group-hover:bg-primary-100 dark:group-hover:bg-primary-900">
                  {s.icon}
                </div>
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-1">
                  <NumberTicker value={s.value} />
                  {s.suffix}
                </h3>
                <p className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
