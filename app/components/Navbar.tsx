"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const navbarStyles = `
  .nav-link {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: #262626;
  }

  .nav-link::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '';
    color: transparent;
    background: #262626;
    height: 2px;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: #262626;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const selectLanguage = (language: string) => {
    setLang(language);
    setLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setServiceDropdownOpen(false);
      }
    };

    if (langDropdownOpen || serviceDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownOpen, serviceDropdownOpen]);

  const languages = [
    { code: "EN", name: "English" },
    { code: "DE", name: "Deutsch" },
    { code: "FR", name: "Français" },
    { code: "ES", name: "Español" },
    { code: "IT", name: "Italiano" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{navbarStyles}</style>
      <header
        className={`sticky top-0 z-20 bg-primary rounded-b-2xl shadow-[0_3px_5px_rgba(0,0,0,0.10)] px-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 relative">
          <button
            type="button"
            className="items-center justify-center rounded-md text-white hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[--color-primary] cursor-pointer hidden lg:inline-flex"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-8 md:h-10 w-8 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
                />
              )}
            </svg>
          </button>
          <nav
            className={`${
              open
                ? "max-h-[500px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } absolute left-0 right-0 lg:left-0 lg:right-auto lg:w-[25%] mt-1 top-full overflow-y-hidden bg-[#FBFBFB] text-primaryText px-4 shadow-2xl transition-all duration-300 ease-out`}
          >
            <div className="flex flex-col gap-4 py-6 text-[16px] font-medium text-primaryText items-start">
              <Link
                href="/"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <div className="relative " ref={serviceDropdownRef}>
                <button
                  onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                  className={`nav-link py-1 transform transition-all flex items-center justify-start w-full cursor-pointer ${
                    isActive("/car-details") ? "active" : ""
                  }`}
                >
                  Service
                  <ChevronDown
                    className={`ml-1 transition-transform w-4 h-4 ${
                      serviceDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="#262626"
                    stroke="null"
                  />
                </button>

                {serviceDropdownOpen && (
                  <div className="mt-2 w-full bg-white/10 backdrop-blur-sm rounded-lg">
                    <Link
                      href="/car-details"
                      onClick={() => {
                        setServiceDropdownOpen(false);
                        setOpen(false);
                      }}
                      className="block w-full text-start px-4 py-2 hover:bg-gray-200 transition-colors text-primaryText"
                    >
                      Car Rental
                    </Link>
                    <Link
                      href="/flight-booking"
                      onClick={() => {
                        setServiceDropdownOpen(false);
                        setOpen(false);
                      }}
                      className="block w-full text-start px-4 py-2 hover:bg-gray-200 transition-colors text-primaryText"
                    >
                      Flight Booking
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/my-booking"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/my-booking") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                My Booking
              </Link>
              {/* <Link
                href="#products"
                className={`nav-link py-1 transform transition-all ${
                  isActive("#products") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                About us
              </Link> */}
              <Link
                href="/contact-us"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/contact-us") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          <div>
            <Link href="/">
              <Image
                src="/assets/logo-nav.png"
                alt="Login Image"
                width={150}
                height={48}
                className="hidden md:block"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/logo-icon.png"
                alt="Login Image"
                width={50}
                height={48}
                className="block md:hidden"
              />
            </Link>
          </div>

          <div className="flex gap-4 align-middle justify-between">
            <div className="flex justify-start items-center gap-4">
              <div
                className="relative border-r border-white"
                ref={langDropdownRef}
              >
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center cursor-pointer select-none text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  <span className="font-medium">{lang}</span>
                  <ChevronDown
                    className={`ml-1 transition-transform ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="white"
                    stroke="null"
                  />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg z-50">
                    {languages.map((language, index) => (
                      <button
                        key={language.code}
                        onClick={() => selectLanguage(language.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer ${
                          index === 0 ? "" : ""
                        } ${index === languages.length - 1 ? "" : ""} ${
                          lang === language.code
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-gray-800"
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-3 items-center">
                <Link
                  href="/profile"
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {/* <UserIcon /> */}
                  <Image
                    src="/assets/avatar.png"
                    alt="Profile Image"
                    width={46}
                    height={46}
                    className="rounded-full border border-white"
                  />
                </Link>
                <Link
                  href="/login"
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex justify-start items-center gap-3">
                    {/* <UserIcon /> */}
                    <p className="text-[18px]">Sign In</p>
                  </div>
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="items-center justify-center rounded-md text-white hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[--color-primary] cursor-pointer inline-flex lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-8 md:h-10 w-8 md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
