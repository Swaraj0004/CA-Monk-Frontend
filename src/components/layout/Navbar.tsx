import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between px-6">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-sm font-bold text-white">
            CA
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Monk
          </span>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="hover:text-indigo-600">Tools</a>
          <a href="#" className="hover:text-indigo-600">Practice</a>
          <a href="#" className="hover:text-indigo-600">Events</a>
          <a href="#" className="hover:text-indigo-600">Job Board</a>
          <a href="#" className="hover:text-indigo-600">Points</a>
        </nav>

        {/* RIGHT: Profile */}
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Profile
        </Button>
      </div>
    </header>
  );
}
