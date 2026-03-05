import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#333] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-heading text-sm mb-4">ADOPT</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-to-adopt"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  How to Adopt
                </Link>
              </li>
              <li>
                <Link
                  href="/adopting-a-puppy"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Adopting a Puppy
                </Link>
              </li>
              <li>
                <Link
                  href="/adopt-a-cat"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Our Adoptable Cats
                </Link>
              </li>
              <li>
                <Link
                  href="/adopt-a-dog-2"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Our Adoptable Dogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-sm mb-4">FOSTER</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/foster-care"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Foster Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-sm mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.ahhumanesociety.org/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.ahhumanesociety.org/contact-us-2-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.ahhumanesociety.org/statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Statistics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-sm mb-4">CONNECT</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.ahhumanesociety.org/volunteer-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <Link
                  href="/volunteer-portal"
                  className="text-accent-offwhite text-sm hover:text-white transition-colors"
                >
                  Volunteer Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-offwhite text-sm">
              © 2014 Appalachian Highlands Humane Society. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.ahhumanesociety.org/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-offwhite text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.ahhumanesociety.org/terms-of-service/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-offwhite text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://www.ahhumanesociety.org/contact-us-2-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-offwhite text-sm hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}