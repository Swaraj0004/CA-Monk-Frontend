export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 font-bold">
                CA
              </div>
              <span className="text-lg font-semibold">CA Monk</span>
            </div>

            <p className="text-sm leading-relaxed">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Webinars</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Job Board</li>
              <li className="hover:text-white cursor-pointer">Practice Tests</li>
              <li className="hover:text-white cursor-pointer">Mentorship</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© 2024 CA Monk. All rights reserved By Swaraj Harode.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
