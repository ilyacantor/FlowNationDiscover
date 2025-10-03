import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/match", label: "Match" },
    { path: "/calendar", label: "Calendar" },
    { path: "/other", label: "Other" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" data-testid="link-home-logo">
              <span className="text-2xl font-bold text-primary cursor-pointer">FlowNation</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                    <span
                      className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                        isActive
                          ? "text-primary font-semibold underline underline-offset-4"
                          : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link key={link.path} href={link.path} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                  <div
                    onClick={handleLinkClick}
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors hover-elevate ${
                      isActive
                        ? "text-primary bg-primary/5 font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
