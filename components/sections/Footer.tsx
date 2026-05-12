"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Products: [
    { label: "TallyPrime Silver", href: "#products" },
    { label: "TallyPrime Gold", href: "#products" },
    { label: "TallyPrime Server", href: "#products" },
    { label: "TallyPrime Auditor", href: "#products" },
    { label: "Tally Mobile App", href: "#products" },
  ],
  Services: [
    { label: "Implementation", href: "#services" },
    { label: "Customization", href: "#services" },
    { label: "Support & AMC", href: "#services" },
    { label: "Corporate Training", href: "#services" },
    { label: "Data Migration", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(ref.current.querySelectorAll(".footer-col"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" } }
    );

    // Divider line wipe
    gsap.fromTo(".footer-divider",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power3.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 85%" } }
    );
  }, []);

  return (
    <footer ref={ref} className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="footer-col lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg">IB</div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">IBS Team</span>
                <span className="text-xs text-slate-500 tracking-wider uppercase">Tally Certified Partner</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">Premier destination for TallyPrime solutions — Sales, Implementation, Customization, Training and 24/7 Support. Empowering businesses since 2008.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm group"><Phone className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" /><span>+91 98470 00000</span></div>
              <div className="flex items-center gap-3 text-sm group"><Mail className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" /><span>sales@ibsteam.co.in</span></div>
              <div className="flex items-center gap-3 text-sm group"><MapPin className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" /><span>Kochi, Kerala, India</span></div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-divider h-px bg-slate-800 origin-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} IBS Team — International Business Solutions. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Tally Certified 5-Star Partner</p>
      </div>
    </footer>
  );
}
