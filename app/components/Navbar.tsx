"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

const navbarStyles = `
  .nav-link {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: #1e3a5f;
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
    background: #1e3a5f;
    height: 2px;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: #1e3a5f;
  }
`;

export default function NavRes() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownOpen]);

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
        className={`sticky top-0 z-20 bg-white rounded-b-2xl shadow-[0_3px_5px_rgba(0,0,0,0.10)] px-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
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
            <div className="hidden lg:flex justify-start items-center gap-4">
              <div className="flex gap-8 items-center">
                <Link
                  href="/login"
                  className={`nav-link text-[20px] font-semibold text-primary ${
                    isActive("/post-job") ? "active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Post a Job
                </Link>
                <Link
                  href="/login"
                  className={`nav-link text-[20px] font-semibold text-primary ${
                    isActive("/login") ? "active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              </div>
              <Button variant="primary" size="md" className="font-semibold">
                Join as a Tradeperson
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-primary hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[--color-primary] lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-8 w-8"
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

        {/* Mobile Menu Drawer */}
        {open && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-white bg-opacity-50 z-40"
              onClick={() => setOpen(false)}
            />
            <div
              className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col p-6 gap-6 bg-white">
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-primary hover:bg-gray-100 rounded-md p-2"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-6 text-end">
                  <Link
                    href="/login"
                    className={`text-[18px] font-semibold text-primary hover:underline ${
                      isActive("/post-job") ? "underline" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Post a Job
                  </Link>
                  <Link
                    href="/login"
                    className={`text-[18px] font-semibold text-primary hover:underline ${
                      isActive("/login") ? "underline" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                  <Button
                    variant="primary"
                    size="md"
                    className="font-semibold w-full"
                    onClick={() => setOpen(false)}
                  >
                    Join as a Tradeperson
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
