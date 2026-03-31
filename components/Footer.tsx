import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-slate-50 font-['Inter'] text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-lg font-bold text-slate-900 mb-6 font-headline uppercase">
            Aviatech Consulting
          </div>
          <p className="text-slate-500 mb-8 max-w-xs">
            Elevating aviation standards through engineering-led digital transformation.
          </p>
        </div>

        <div>
          <h6 className="font-headline font-bold mb-6 text-[#161c22]">Navigation</h6>
          <ul className="space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/industries", label: "Industries" },
              { href: "/insights", label: "Insights" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="font-headline font-bold mb-6 text-[#161c22]">Compliance</h6>
          <ul className="space-y-4">
            {[
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Terms of Service" },
              { href: "#", label: "Cookie Policy" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-500 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="font-headline font-bold mb-6 text-[#161c22]">Social</h6>
          <ul className="space-y-4">
            {[
              { href: "#", label: "LinkedIn" },
              { href: "#", label: "X (Twitter)" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-500 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-slate-500">© 2024 Aviatech Consulting. All rights reserved.</p>
        <div className="flex gap-8 text-slate-500">
          <span>Certified Aviation Partner</span>
          <span>ISO 27001</span>
        </div>
      </div>
    </footer>
  );
}
