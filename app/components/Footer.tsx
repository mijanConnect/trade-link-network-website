import Link from "next/link";
import { LogoNav } from "./Svg";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:py-8 sm:py-12 lg:py-15 bg-[url('/assets/watermark.png')] bg-contain bg-center bg-no-repeat">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <div className="space-y-3 col-span-2 lg:col-span-1">
            <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-semibold text-primary text-[18px]">
                Contact
              </h3>
              <ul className="flex flex-col gap-1 text-primary text-[16px]">
                <li>
                  <a
                    href="tel:+61234567890"
                    className="hover:scale-110 hover:text-[--color-primary] transform transition-all"
                  >
                    +61 234 567 890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tradelinknetwork@gmail.com"
                    className="hover:scale-110 hover:text-[--color-primary] transform transition-all"
                  >it
                    tradelinknetwork@gmail.com
                  </a>
                </li>
              </ul>

              <Button
                variant="outline"
                className="mt-2 lg:mt-6 px-10! font-semibold!"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-25 scale-150 origin-left  hidden md:block">
              <Link href="/">
                <LogoNav />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-primary text-[20px] font-medium">
                <li>
                  <Link
                    href="#products"
                    className="hover:underline transform transition-all"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car-details"
                    className="hover:underline transform transition-all"
                  >
                    Area Covered
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline transform transition-all"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-booking"
                    className="hover:underline transform transition-all"
                  >
                    Privacy/ Terms
                  </Link>
                </li>
              </ul>
              <div>
                <h4 className="text-[24px] lg:text-[32px] font-semibold text-primary mt-4 lg:mt-10">
                  Are you a tradesperson?
                </h4>
              </div>
              <Button className="mt-4 lg:mt-6 px-10! font-semibold!">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center py-4 text-sm text-primary border-t border-primary/20">
          <span>
            © {new Date().getFullYear()} Trade Link Network. All rights
            reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
