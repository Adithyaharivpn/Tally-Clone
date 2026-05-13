"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { ChevronRight, Star } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !headlineRef.current) return;

    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });

    // Animate the badge
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    );

    // Split headline text and animate each word
    const words = headlineRef.current.querySelectorAll(".hero-word");
    tl.fromTo(
      words,
      { opacity: 0, y: 60, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Optional: Add the gradient class dynamically or skip if you removed the element
    const gradientText = containerRef.current.querySelector(".hero-gradient-text");
    if (gradientText) {
      tl.fromTo(
        gradientText,
        { backgroundSize: "200% 200%", backgroundPosition: "100% 50%" },
        {
          backgroundPosition: "0% 50%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.8"
      );
    }

    // Animate subtext
    tl.fromTo(
      ".hero-subtext",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    // Animate CTAs with a staggered bounce
    tl.fromTo(
      ".hero-cta",
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.6 },
      "-=0.4"
    );

    // Animate trust bar
    tl.fromTo(
      ".hero-trust",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-zinc-950"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundRippleEffect />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm border border-slate-300/50 dark:border-white/10 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-primary-500 text-primary-500" />
            <span>Tally Certified 5-Star Partner</span>
          </div>

          {/* Headline with word-by-word animation */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
            style={{ perspective: "800px" }}
          >
            <span className="hero-word inline-block">Empowering</span>{" "}
            <span className="hero-word inline-block">Business</span>{" "}
            <span className="hero-word inline-block">with</span>{" "}
            <span className="hero-word inline-block text-primary-600 dark:text-primary-400">
              TallyPrime
            </span>{" "}
            <span className="hero-word inline-block">Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Complete Business Management Solutions — from TallyPrime sales,
            implementation, and customization to corporate training and 24/7
            expert support. Trusted by 2000+ businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="hero-cta">
              <MovingBorderButton
                borderRadius="2rem"
                className="px-8 py-3 text-base font-semibold"
                duration={3000}
              >
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-1" />
              </MovingBorderButton>
            </div>
            <div className="hero-cta">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              >
                Explore Products
              </Button>
            </div>
          </div>

          {/* Trust bar */}
          <div className="hero-trust mt-16 flex items-center gap-8 text-slate-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-300 dark:bg-slate-700" />
            <span className="hidden sm:block">2000+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
