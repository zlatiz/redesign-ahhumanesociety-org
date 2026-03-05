"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    {
      label: "VOLUNTEER PORTAL",
      href: "/volunteer-portal",
    },
    {
      label: "ADOPT",
      dropdown: [
        { label: "HOW TO ADOPT", href: "/how-to-adopt" },
        { label: "ADOPTING A PUPPY", href: "/adopting-a-puppy" },
        { label: "OUR ADOPTABLE CATS", href: "/adopt-a-cat" },
        {
          label: "CAT ADOPTION APPLICATION",
          href: "https://new.shelterluv.com/matchme/adopt/AHTN/Cat",
          external: true,
        },
        { label: "OUR ADOPTABLE DOGS", href: "/adopt-a-dog-2" },
        {
          label: "DOG ADOPTION APPLICATION",
          href: "https://new.shelterluv.com/matchme/adopt/AHTN/Dog",
          external: true,
        },
        {
          label: "COURTESY LISTINGS  DOGS AND CATS",
          href: "/courtesy-listings-dogs-and-cats",
        },
      ],
    },
    {
      label: "FOSTER",
      dropdown: [
        { label: "FOSTER", href: "/foster-care" },
        {
          label: "CAT FOSTER HOME APPLICATION",
          href: "https://new.shelterluv.com/matchme/foster/AHTN/Cat",
          external: true,
        },
        {
          label: "DOG FOSTER APPLICATION",
          href: "https://new.shelterluv.com/matchme/foster/AHTN/Dog",
          external: true,
        },
      ],
    },
    {
      label: "PROGRAMS",
      dropdown: [
        {
          label: "COURTESY POSTS",
          href: "https://www.ahhumanesociety.org/courtesy-posts/",
          external: true,
        },
        {
          label: "PET FOOD PANTRY",
          href: "https://www.ahhumanesociety.org/pet-food-pantry/",
          external: true,
        },
        {
          label: "VOLUNTEER",
          href: "https://www.ahhumanesociety.org/volunteer-program/",
          external: true,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#333]">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-heading text-sm hidden md:block">
              AHHS
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-xs font-medium text-accent-offwhite hover:text-white transition-colors uppercase">
                      {item.label}
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-[#252525] border border-[#333] rounded-eight shadow-xl py-2">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            href={dropItem.href}
                            target={dropItem.external ? "_blank" : undefined}
                            rel={
                              dropItem.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className={`block px-4 py-2 text-xs text-accent-offwhite hover:bg-[#333] hover:text-white transition-colors ${
                              isActive(dropItem.href)
                                ? "bg-[#333] text-white"
                                : ""
                            }`}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={`px-3 py-2 text-xs font-medium transition-colors uppercase ${
                      isActive(item.href!)
                        ? "text-white"
                        : "text-accent-offwhite hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link
            href="https://www.ahhumanesociety.org/donate-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-eight text-sm font-bold transition-colors uppercase"
          >
            DONATE
          </Link>
        </div>
      </nav>
    </header>
  );
}