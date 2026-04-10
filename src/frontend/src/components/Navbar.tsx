import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";
import { GradientButton } from "./GradientButton";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
  { to: "/booking", label: "Book Now" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border/40 shadow-elevated backdrop-blur-md"
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="navbar-logo"
        >
          <div className="w-8 h-8 rounded-lg gradient-cosmic glow-primary flex items-center justify-center">
            <Camera size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            Capturo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          data-ocid="navbar-links"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-smooth relative group",
                currentPath === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-0.5 gradient-cosmic rounded-full transition-smooth",
                  currentPath === link.to ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div
          className="hidden md:flex items-center gap-3"
          data-ocid="navbar-cta"
        >
          <Link to="/login">
            <GradientButton
              variant="ghost"
              size="sm"
              glowing={false}
              data-ocid="nav-login"
            >
              Login
            </GradientButton>
          </Link>
          <Link to="/register">
            <GradientButton
              variant="primary"
              size="sm"
              data-ocid="nav-register"
            >
              Get Started
            </GradientButton>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-smooth"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="navbar-hamburger"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border/40 bg-card/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3 animate-slide-up"
          data-ocid="navbar-mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium py-2 px-3 rounded-lg transition-smooth",
                currentPath === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/20",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border/40 pt-3 flex flex-col gap-2">
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <GradientButton
                variant="outline"
                size="sm"
                glowing={false}
                className="w-full"
                data-ocid="nav-mobile-login"
              >
                Login
              </GradientButton>
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <GradientButton
                variant="primary"
                size="sm"
                className="w-full"
                data-ocid="nav-mobile-register"
              >
                Get Started
              </GradientButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
