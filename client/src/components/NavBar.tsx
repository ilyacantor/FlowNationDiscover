import { Link, useLocation } from "wouter";

export default function NavBar() {
  const [location] = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/match", label: "Match" },
    { path: "/calendar", label: "Calendar" },
    { path: "/other", label: "Other" },
  ];

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
        </div>
      </div>
    </nav>
  );
}
