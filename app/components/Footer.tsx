import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-25">
          <div className="space-y-2 col-span-2 lg:col-span-1">
            <div>
              <Link href="/">
                <Image
                  src="/assets/logo-nav.png"
                  alt="Login Image"
                  width={150}
                  height={48}
                />
              </Link>
            </div>
            <p className="text-[14px] text-white mt-[15px]">
              Rent a car with ease and confidence. We offer a wide selection of
              vehicles, simple booking, and dependable service to make every
              journey enjoyable.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white text-[18px]">Pages</h3>
            <ul className="flex flex-col gap-2 text-white text-[15px]">
              <li>
                <Link
                  href="#products"
                  className="hover:underline transform transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/car-details"
                  className="hover:underline transform transition-all"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/my-booking"
                  className="hover:underline transform transition-all"
                >
                  My Booking
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/"
                  className="hover:underline transform transition-all"
                >
                  About Us
                </Link>
              </li> */}
              <li>
                <Link
                  href="/profile"
                  className="hover:underline transform transition-all"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white text-[18px]">Support</h3>
            <ul className="flex flex-col gap-2 text-white text-[15px]">
              <li>
                <Link
                  href="/"
                  className="hover:underline transform transition-all"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:underline transform transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:underline transform transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:underline transform transition-all"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 col-span-2 lg:col-span-1">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-semibold text-white text-[18px]">Contact</h3>
              <ul className="flex flex-col gap-2 text-white text-[15px]">
                <li>Office : 42 Marine Parade, Australia</li>
                <li>
                  Mail :{" "}
                  <a
                    href="mailto:info@8pxlstudio.com"
                    className="hover:scale-110 hover:text-[--color-primary] transform transition-all"
                  >
                    info@8pxlstudio.com
                  </a>
                </li>
                <li>
                  Phone :{" "}
                  <a
                    href="tel:+0123456789"
                    className="hover:scale-110 hover:text-[--color-primary] transform transition-all"
                  >
                    +0123456789
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="text-center py-4 text-sm text-white border-t border-white/20">
          <span>© {new Date().getFullYear()} Motly. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
