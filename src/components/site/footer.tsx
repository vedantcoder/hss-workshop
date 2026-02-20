import { content } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-900 bg-blue-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-blue-200">
              {content.ui.footerContactTitle}
            </p>
            <p className="mt-2 text-sm text-blue-300">
              <a
                href={`mailto:${content.application.email}`}
                className="font-medium text-white underline underline-offset-4 hover:text-blue-200"
              >
                {content.application.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-blue-200">
              {content.ui.footerInstitutionTitle}
            </p>
            <p className="mt-2 text-sm text-blue-300">
              {content.footer.institution}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-blue-200">
              {content.ui.footerQuickLinksTitle}
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {content.footer.quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-blue-300 underline underline-offset-4 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-blue-400">
          © {year} {content.event.title}
        </p>
      </div>
    </footer>
  );
}
