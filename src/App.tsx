import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/layout/BlogHero";
import Home from "@/pages/Home";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <BlogHero />

      <main className="flex-1 bg-gray-50">
        <Home />
      </main>

      <Footer />
    </div>
  );
}