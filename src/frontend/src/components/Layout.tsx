import { Link } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 bg-background">{children}</main>

      <footer className="bg-card border-t border-border/40" data-ocid="footer">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-cosmic glow-primary flex items-center justify-center">
                <Camera size={16} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">
                  Capturo
                </p>
                <p className="text-xs text-muted-foreground">
                  On-demand event content
                </p>
              </div>
            </div>

            {/* Footer links */}
            <nav
              className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground"
              aria-label="Footer navigation"
            >
              <Link to="/" className="hover:text-foreground transition-smooth">
                Home
              </Link>
              <Link
                to="/booking"
                className="hover:text-foreground transition-smooth"
              >
                Book Now
              </Link>
              <Link
                to="/login"
                className="hover:text-foreground transition-smooth"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-foreground transition-smooth"
              >
                Register
              </Link>
            </nav>

            {/* Branding */}
            <p className="text-xs text-muted-foreground text-center">
              © {year}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-smooth"
              >
                Built with love using caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
