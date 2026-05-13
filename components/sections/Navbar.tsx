"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    const showAnim = gsap.from(navRef.current, { 
      yPercent: -150,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        // Show if scrolling up, hide if scrolling down
        if (self.direction === -1) {
          showAnim.play();
        } else if (self.direction === 1 && self.scroll() > 100) {
          // close mobile menu if scrolling down
          if (mobileOpen) setMobileOpen(false);
          showAnim.reverse();
        }
      }
    });
  }, { scope: navRef, dependencies: [mobileOpen] });

  return (
    <div ref={navRef} className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 w-full">
      <header className="w-full max-w-5xl rounded-full border border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-sm transition-colors duration-500 relative">
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
              NT
            </div>
            <span className="hidden font-bold sm:inline-block">NexusTally</span>
          </Link>

          {/* Centered Nav Links */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="hidden sm:inline-flex rounded-full h-8 px-4 text-xs">
              Get Free Quote
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="w-full max-w-5xl mt-2 rounded-2xl border border-border/40 bg-background/95 backdrop-blur p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-border/40 mt-2">
              <Button variant="default" size="sm" className="rounded-full h-8 px-4 text-xs w-full">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
