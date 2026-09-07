"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaMenuPanel from "./MegaMenuPanel";
import SolutionsMenuContent from "./SolutionsMenuContent";
import ShopMenuContent from "./ShopMenuContent";
import { services, shopCategories } from "@/lib/site-data";

const plainNavLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Mirrors ShopMenuContent's primary-category selection for the mobile accordion.
const mobileShopSlugs = [
  "devices-hardware",
  "servers-infrastructure",
  "networking",
  "software-licensing",
  "accessories-peripherals",
];

type MenuKey = "solutions" | "shop";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<MenuKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MenuKey | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close everything on route change \u2014 adjusted during render (not an
  // effect) per React's guidance for resetting state when a value like
  // pathname changes, avoiding an extra render + effect round trip.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setDesktopMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setDesktopMenu(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setDesktopMenu(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleDesktopMenu(key: MenuKey) {
    setDesktopMenu((current) => (current === key ? null : key));
  }

  function toggleMobileExpanded(key: MenuKey) {
    setMobileExpanded((current) => (current === key ? null : key));
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/90 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="focus-ring text-lg font-bold tracking-tight text-white"
          onClick={() => setMobileOpen(false)}
        >
          GEAA
          <span className="font-mono text-xs font-normal text-electric-cyan align-super ml-0.5">
            technologies
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={desktopMenu === "solutions"}
            aria-controls="solutions-menu-panel"
            onClick={() => toggleDesktopMenu("solutions")}
            className="focus-ring flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
          >
            Solutions
            <ChevronDown
              size={14}
              className={`transition-transform ${desktopMenu === "solutions" ? "rotate-180" : ""}`}
            />
          </button>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={desktopMenu === "shop"}
            aria-controls="shop-menu-panel"
            onClick={() => toggleDesktopMenu("shop")}
            className="focus-ring flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
          >
            Shop
            <ChevronDown
              size={14}
              className={`transition-transform ${desktopMenu === "shop" ? "rotate-180" : ""}`}
            />
          </button>
          {plainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/support"
            className="focus-ring font-mono text-xs text-white/50 transition-colors hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-geaa-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-electric-cyan hover:text-navy-deep"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MegaMenuPanel isOpen={desktopMenu === "solutions"} id="solutions-menu-panel">
        <SolutionsMenuContent onNavigate={() => setDesktopMenu(null)} />
      </MegaMenuPanel>
      <MegaMenuPanel isOpen={desktopMenu === "shop"} id="shop-menu-panel">
        <ShopMenuContent onNavigate={() => setDesktopMenu(null)} />
      </MegaMenuPanel>

      {mobileOpen && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-deep px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                type="button"
                aria-expanded={mobileExpanded === "solutions"}
                onClick={() => toggleMobileExpanded("solutions")}
                className="focus-ring flex w-full items-center justify-between py-3 text-base text-white/80"
              >
                Solutions
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileExpanded === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "solutions" && (
                <ul className="mb-2 space-y-1 border-l border-white/10 pl-4">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/solutions/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="focus-ring block py-2 text-sm text-white/60"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                type="button"
                aria-expanded={mobileExpanded === "shop"}
                onClick={() => toggleMobileExpanded("shop")}
                className="focus-ring flex w-full items-center justify-between py-3 text-base text-white/80"
              >
                Shop
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileExpanded === "shop" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "shop" && (
                <ul className="mb-2 space-y-1 border-l border-white/10 pl-4">
                  {mobileShopSlugs.map((slug) => {
                    const category = shopCategories.find((c) => c.slug === slug);
                    if (!category) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/shop/${slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="focus-ring block py-2 text-sm text-white/60"
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {plainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring block py-3 text-base text-white/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/support"
                className="focus-ring block py-3 font-mono text-sm text-white/50"
                onClick={() => setMobileOpen(false)}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="focus-ring mt-2 inline-block rounded-full bg-geaa-blue px-5 py-2 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
