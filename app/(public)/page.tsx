import Category from "../components/home/Category";
import Hero from "../components/home/Hero";
import WorksFlow from "../components/home/WorksFlow";
import CTA from "../components/ui/CTA";
import WhyUse from "../components/ui/WhyUse";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <Category />
        <WorksFlow />
        <WhyUse />
        <CTA />
      </>
    </main>
  );
}
