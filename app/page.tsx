import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemsGrid from "@/components/SystemsGrid";
import DepartmentSpotlight from "@/components/DepartmentSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SystemsGrid />
        <DepartmentSpotlight />
      </main>
      <Footer />
    </div>
  );
}
