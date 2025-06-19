// src/components/Header.tsx
import { HardHat, Menu, X, Instagram, Linkedin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo-no-bg.png";

/* ---------- ÍCONOS RRSS ---------- */
const SocialIcon = ({
  type,
  className = "",
}: {
  type: "whatsapp" | "instagram" | "tiktok" | "linkedin";
  className?: string;
}) => {
  const base = `w-5 h-5 text-white ${className}`;

  switch (type) {
    case "whatsapp":
      return (
        <svg
          className={base}
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      );

    case "tiktok":
      return (
        <svg
          className={base}
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg>
      );

    case "instagram":
      return <Instagram className={base} strokeWidth={1.5} />;

    case "linkedin":
      return <Linkedin className={base} strokeWidth={1.5} />;

    default:
      return null;
  }
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Inicio", href: "/" },
    { title: "Catálogo", href: "/catalogo" },
    { title: "Sobre Nosotros", href: "/sobre-nosotros" },
  ];

  const socialLinks = [
    { type: "whatsapp" as const, href: "#", label: "WhatsApp DMAC" },
    { type: "instagram" as const, href: "#", label: "Instagram DMAC" },
    { type: "tiktok" as const, href: "#", label: "TikTok DMAC" },
    { type: "linkedin" as const, href: "#", label: "LinkedIn DMAC" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dmac-red py-4">
      {/* ---------- ROW PRINCIPAL ---------- */}
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:items-center">
        {/* ---------- LOGO ---------- */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
        >
          <img
            src={logo}
            alt="DMAC logo"
            className="w-48 h-auto -mt-8 xl:h-auto xl:w-1/2 xl:-mt-10"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <HardHat className="hidden h-10 w-10 text-white" />
        </Link>

        {/* ---------- NAV DESKTOP ---------- */}
        <nav
          aria-label="Navegación"
          className="hidden items-center justify-center gap-8 lg:flex"
        >
          {navLinks.map(({ href, title }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-md px-3 py-1 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red ${
                  isActive
                    ? "font-bold text-white"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>

        {/* ---------- RRSS + CTA DESKTOP ---------- */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          {socialLinks.map(({ type, href, label }) => (
            <a
              key={type}
              href={href}
              aria-label={label}
              className="rounded-md p-1 text-white transition-colors hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
            >
              <SocialIcon type={type} />
            </a>
          ))}

          <Button
            asChild
            className="bg-yellow-400 font-bold text-black hover:bg-yellow-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
          >
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>

        {/* ---------- BOTÓN BURGER ---------- */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="ghost"
            size="xl"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-yellow"
          >
            {open ? <X className="h-14 w-14" /> : <Menu className="h-14 w-14" />}
          </Button>
        </div>
      </div>

      {/* ---------- MENÚ MOBILE ---------- */}
      <div
        aria-hidden={!open}
        className={`overflow-hidden border-t border-white/10 bg-dmac-red transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-4 py-6"
          aria-label="Navegación móvil"
        >
          {navLinks.map(({ href, title }) => (
            <NavLink
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full rounded-md py-3 text-center text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red ${
                  isActive
                    ? "bg-white/10 font-bold text-background"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              {title}
            </NavLink>
          ))}

          <div className="mt-4 flex justify-between mx-20">
            {socialLinks.map(({ type, href, label }) => (
              <a
                key={type}
                href={href}
                aria-label={label}
                className="rounded-md p-1 text-white transition-colors hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
              >
                <SocialIcon type={type} />
              </a>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="mt-4 w-full bg-yellow-400 font-bold text-black hover:bg-yellow-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
          >
            <Link to="/catalogo" onClick={() => setOpen(false)}>
              Cotiza aquí
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
