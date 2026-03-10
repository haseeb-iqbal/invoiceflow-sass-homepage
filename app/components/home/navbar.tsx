"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 64; // h-16 = 64px
  const elementPosition = element.offsetTop - navbarHeight;

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
};

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xl font-bold tracking-tight transition-colors hover:opacity-80"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <Image
            src="/icon.svg"
            alt="InvoiceFlow logo"
            width={24}
            height={24}
            className="h-6 w-6"
            priority
          />
          <span className="italic">InvoiceFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button variant="ghost" className="text-sm font-medium">
            Sign in
          </Button>
          <Button className="rounded-full shadow-md">Start free</Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 animate-in slide-in-from-top-2 fade-in-0 duration-200 border-t border-border bg-background shadow-lg lg:hidden">
          <div className="container max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 border-t pt-4">
              <Button variant="outline" className="w-full justify-center">
                Sign in
              </Button>
              <Button className="w-full justify-center rounded-full">
                Start free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
