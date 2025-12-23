import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              DMV Heat Pumps
            </h3>
            <p className="text-slate-300 text-sm">
              Your complete resource for heat pump education, installation
              guidance, and electrification rebates in Maryland, DC & Northern
              Virginia.
            </p>
          </div>

          {/* Homeowners */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              For Homeowners
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/heat-pump-101"
                  className="text-slate-300 hover:text-white"
                >
                  Heat Pump 101
                </Link>
              </li>
              <li>
                <Link
                  href="/rebates/maryland-zehes"
                  className="text-slate-300 hover:text-white"
                >
                  Maryland ZEHES Rebates
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/a2l-safety"
                  className="text-slate-300 hover:text-white"
                >
                  A2L Refrigerant Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/sizing-calculator"
                  className="text-slate-300 hover:text-white"
                >
                  Sizing Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/find-installer"
                  className="text-slate-300 hover:text-white"
                >
                  Find Certified Installer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contractors */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              For Contractors
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/training/a2l-certification"
                  className="text-slate-300 hover:text-white"
                >
                  A2L Certification
                </Link>
              </li>
              <li>
                <Link
                  href="/training/manual-j-templates"
                  className="text-slate-300 hover:text-white"
                >
                  Manual J Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/contractors/market-report"
                  className="text-slate-300 hover:text-white"
                >
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/training/ai-diagnostics"
                  className="text-slate-300 hover:text-white"
                >
                  AI Diagnostics Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contractors/join"
                  className="text-slate-300 hover:text-white"
                >
                  Join Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/sizing-calculator"
                  className="text-slate-300 hover:text-white"
                >
                  Sizing Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white"
                >
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/technical"
                  className="text-slate-300 hover:text-white"
                >
                  Technical Deep Dives
                </Link>
              </li>
              <li>
                <Link
                  href="/outreach"
                  className="text-slate-300 hover:text-white"
                >
                  Outreach Materials
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-slate-300 hover:text-white"
                >
                  Community Forum
                </Link>
              </li>
            <li>
              <Link
                href="/about"
                className="text-slate-300 hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/sitemap"
                className="text-slate-300 hover:text-white"
              >
                Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} DMV Heat Pumps. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-slate-400 hover:text-white text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
