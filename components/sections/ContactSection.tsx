"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Left content slide in from left
    gsap.fromTo(ref.current.querySelectorAll(".contact-left"),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );

    // Right form slide in from right
    gsap.fromTo(".contact-form",
      { opacity: 0, x: 50, rotateY: -5 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );

    // Contact info icons pulse
    gsap.fromTo(ref.current.querySelectorAll(".contact-icon"),
      { scale: 0, rotate: -180 },
      { scale: 1, rotate: 0, stagger: 0.12, duration: 0.6, ease: "back.out(2.5)",
        scrollTrigger: { trigger: ref.current, start: "top 75%" }, delay: 0.3 }
    );

    // Form fields staggered appearance
    gsap.fromTo(ref.current.querySelectorAll(".form-field"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" }, delay: 0.5 }
    );
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-(--background)" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="contact-left text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="contact-left text-3xl md:text-4xl font-bold text-(--foreground) mb-6">Request Your Free Business Quote Today</h2>
            <p className="contact-left text-(--muted-foreground) mb-10 leading-relaxed">Get accurate pricing insights quickly with a personalized quote designed around your requirements. Our experts are ready to help you.</p>

            <div className="space-y-6">
              {[
                { icon: <Phone className="w-5 h-5" />, title: "Call Us", lines: ["+91 98470 00000", "+91 98460 00000"] },
                { icon: <Mail className="w-5 h-5" />, title: "Email Us", lines: ["sales@nexustally.co.in"] },
                { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", lines: ["Kochi, Kerala, India"] },
                { icon: <Clock className="w-5 h-5" />, title: "Working Hours", lines: ["Mon - Sat: 9:30 AM - 6:00 PM"] },
              ].map((item, i) => (
                <div key={i} className="contact-left flex items-start gap-4 group">
                  <div className="contact-icon w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-(--foreground) mb-1">{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-(--muted-foreground)">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Spotlight className="rounded-2xl">
            <div className="contact-form bg-(--card) rounded-2xl p-8 border border-(--border) shadow-lg" style={{ perspective: "800px" }}>
              <h3 className="text-xl font-bold text-(--foreground) mb-6">Send Us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="text-sm font-medium text-(--foreground) mb-1.5 block">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-(--muted) border border-(--border) text-(--foreground) placeholder:text-(--muted-foreground) text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                  </div>
                  <div className="form-field">
                    <label className="text-sm font-medium text-(--foreground) mb-1.5 block">Phone</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl bg-(--muted) border border-(--border) text-(--foreground) placeholder:text-(--muted-foreground) text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div className="form-field">
                  <label className="text-sm font-medium text-(--foreground) mb-1.5 block">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-(--muted) border border-(--border) text-(--foreground) placeholder:text-(--muted-foreground) text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                </div>
                <div className="form-field">
                  <label className="text-sm font-medium text-(--foreground) mb-1.5 block">Message</label>
                  <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-xl bg-(--muted) border border-(--border) text-(--foreground) placeholder:text-(--muted-foreground) text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" />
                </div>
                <div className="form-field">
                  <Button variant="default" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
