"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Server, Crown, User, Briefcase, Cloud, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "TallyPrime Silver", desc: "Single-user edition. Activated and used on one computer at a time. Ideal for small businesses.", icon: <User className="w-7 h-7" />, popular: false },
  { name: "TallyPrime Gold", desc: "Multi-user edition. Activated on one computer, accessible from unlimited computers on the same network.", icon: <Crown className="w-7 h-7" />, popular: true },
  { name: "TallyPrime Server", desc: "Powerful data server for medium & large businesses with multiple simultaneous users. Maximum efficiency.", icon: <Server className="w-7 h-7" />, popular: false },
  { name: "TallyPrime Auditor", desc: "Designed for chartered accountants. Streamline audits with specialized tools and reports.", icon: <Briefcase className="w-7 h-7" />, popular: false },
  { name: "TallyPrime Cloud", desc: "Access your Tally data securely from anywhere. Zero downtime with optimized cloud servers.", icon: <Cloud className="w-7 h-7" />, popular: false },
  { name: "Tally Mobile App", desc: "Monitor your business on the go. Real-time data access, reports and approvals from your phone.", icon: <Smartphone className="w-7 h-7" />, popular: false },
];

export default function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Header text split animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.querySelectorAll(".prod-header"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );
    }

    // 3D card entrance with stagger
    const cards = ref.current.querySelectorAll(".product-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 80, rotateX: -10, scale: 0.9 },
      { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: { amount: 0.6, from: "start" },
        duration: 0.9, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );

    // Icon bounce on scroll
    gsap.fromTo(ref.current.querySelectorAll(".product-icon"),
      { scale: 0, rotate: -90 },
      { scale: 1, rotate: 0, stagger: 0.1, duration: 0.6, ease: "back.out(3)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" }, delay: 0.4 }
    );
  }, []);

  return (
    <section id="products" className="py-24 lg:py-32 bg-(--muted)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <p className="prod-header text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">Products</p>
          <h2 className="prod-header text-3xl md:text-4xl font-bold text-(--foreground) mb-4">Seamless TallyPrime Products</h2>
          <p className="prod-header text-(--muted-foreground) max-w-2xl mx-auto">Choose the right TallyPrime edition for your business. From single-user licenses to powerful server solutions — we have it all.</p>
        </div>

        <Spotlight className="rounded-3xl">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4" style={{ perspective: "1200px" }}>
            {products.map((p, i) => (
              <div key={i}
                className={`product-card relative rounded-2xl p-6 bg-(--card) border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                  p.popular ? "border-primary-500 shadow-lg shadow-primary-500/10" : "border-(--border) shadow-sm"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full z-10">Most Popular</div>
                )}
                <div className={`product-icon inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                  p.popular ? "bg-primary-600 text-white" : "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                }`}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-(--foreground) mb-3">{p.name}</h3>
                <p className="text-sm text-(--muted-foreground) leading-relaxed mb-6">{p.desc}</p>
                <Button variant={p.popular ? "default" : "outline"} size="sm" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  );
}
