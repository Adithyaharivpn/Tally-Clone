"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (visualRef.current) {
      gsap.to(visualRef.current, {
        y: -40,
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
    }
    gsap.fromTo(ref.current.querySelectorAll(".about-anim"),
      { opacity: 0, x: -40, skewX: -2 },
      { opacity: 1, x: 0, skewX: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
    const items = ref.current.querySelectorAll(".highlight-item");
    items.forEach((item, i) => {
      gsap.fromTo(item,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7, ease: "power3.inOut", delay: i * 0.12,
          scrollTrigger: { trigger: item, start: "top 90%" } }
      );
    });
    gsap.fromTo(ref.current.querySelectorAll(".float-badge"),
      { opacity: 0, scale: 0, rotate: -20 },
      { opacity: 1, scale: 1, rotate: 0, stagger: 0.2, duration: 0.8, ease: "back.out(3)",
        scrollTrigger: { trigger: ref.current, start: "top 70%" } }
    );
    gsap.to(".about-gradient-ring", { rotate: 360, duration: 20, repeat: -1, ease: "none" });
  }, []);

  const highlights = [
    "Tally Certified Five-Star Sales & Solutions Partner",
    "Expert TallyPrime Customization using TDL",
    "Seamless Data Migration & Cloud Hosting",
    "Serving Manufacturing, Retail, Healthcare & more",
    "Pan-India & International Support Coverage",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-(--background)" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-anim relative h-full flex items-center justify-center lg:justify-start" ref={visualRef}>
            <div className="relative w-full max-w-lg aspect-4/3 rounded-4xl overflow-hidden shadow-2xl border border-border/50 group">
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-500 z-10" />
              <img 
                src="/about-image.png" 
                alt="About NexusTally" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>
          <div>
            <p className="about-anim text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="about-anim text-3xl md:text-4xl font-bold text-(--foreground) mb-6 leading-tight">Your Trusted Partner for Complete Tally Solutions</h2>
            <p className="about-anim text-(--muted-foreground) mb-6 leading-relaxed">NexusTally is a premier IT services provider specializing in TallyPrime implementation. Recognized as a Five-Star Sales and Solutions Partner by Tally Solutions Pvt. Ltd., we deliver cutting-edge solutions in Accounting, Inventory, and Statutory automation.</p>
            <p className="about-anim text-(--muted-foreground) mb-8 leading-relaxed">Our team of certified professionals brings deep expertise across diverse industries. We leverage Technology, Services, and People to empower businesses to enhance productivity and reduce costs.</p>
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="highlight-item flex items-start gap-3 py-2 px-3 rounded-xl hover:bg-(--muted) transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-(--foreground)">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
