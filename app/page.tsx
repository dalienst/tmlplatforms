import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBanner from "@/components/MetricsBanner";
import SystemsGrid from "@/components/SystemsGrid";
import DepartmentSpotlight from "@/components/DepartmentSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MetricsBanner />
        <SystemsGrid />
        <DepartmentSpotlight />
      </main>
      <Footer />
    </div>
  );
}
