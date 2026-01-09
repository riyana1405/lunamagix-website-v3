"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border-light)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-[var(--shadow-sm)]"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <Image 
            src="/logo-dark.png" 
            alt="Lunamagix" 
            width={140} 
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-150",
                  "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--gray-50)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--azure-blue)]"
                )}
              >
                {item.title}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.title && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.children && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-[var(--border-default)] bg-white p-2 shadow-[var(--shadow-lg)]"
                  >
                    {item.children.map((child) => (
                      <div key={child.title}>
                        {"items" in child && child.items ? (
                          <div className="mb-2">
                            <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                              {child.title}
                            </span>
                            {child.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all hover:bg-[var(--luna-purple-lighter)]"
                              >
                                <div>
                                  <span className="font-medium text-[var(--text-primary)] group-hover/item:text-[var(--luna-purple)]">
                                    {subItem.title}
                                  </span>
                                  {subItem.description && (
                                    <span className="block text-xs text-[var(--text-tertiary)] mt-0.5">
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--luna-purple-lighter)] hover:text-[var(--luna-purple)]"
                          >
                            {child.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link 
            href="/contact"
            className="text-sm font-medium text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors flex items-center gap-1"
          >
            Contact
          </Link>
          <Button asChild className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-button-hover)] transition-all">
            <Link href="/contact?demo=true">
              Request Demo
              <span className="ml-1">→</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors",
            "text-[var(--text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--text-primary)]"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--border-default)] bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--gray-50)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                    {item.children && <ChevronDown className="h-4 w-4 text-[var(--text-tertiary)]" />}
                  </Link>
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-[var(--border-default)]">
                <Button variant="outline" asChild className="w-full border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)]">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
                  <Link href="/contact?demo=true" onClick={() => setMobileMenuOpen(false)}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
