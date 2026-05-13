"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const ctaAnims = ref.current.querySelectorAll(".cta-anim");
    if (ctaAnims.length > 0) {
      gsap.fromTo(ctaAnims,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play reverse play reverse" } }
      );
    }

    // Scale-in animation for glow orbs
    const orbs = ref.current.querySelectorAll(".cta-orb");
    if (orbs.length > 0) {
      gsap.fromTo(orbs,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play reverse play reverse" } }
      );
    }
  }, { scope: ref });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-primary-600" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="cta-orb absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-[80px]" />
      <div className="cta-orb absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-[80px]" />

      {/* Background Beams */}
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="cta-anim text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Upgrade Your Business Accounting?</h2>
        <p className="cta-anim text-primary-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Join 2000+ businesses who trust us for their TallyPrime needs. Get a free consultation with our certified experts today.</p>
        <div className="cta-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="xl" className="bg-white text-primary-700 hover:bg-primary-50 rounded-full shadow-xl font-semibold">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="xl" className="rounded-full border-white/30 text-white hover:bg-white/10">Download Brochure</Button>
        </div>
      </div>
    </section>
  );
}
