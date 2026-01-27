import Category from "../components/home/Category";
import Hero from "../components/home/Hero";
import UseUs from "../components/home/UseUs";
import WorksFlow from "../components/home/WorksFlow";
import CTA from "../components/ui/CTA";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <Category />
        <WorksFlow />
        <UseUs />
        <CTA />
      </>
    </main>
  );
}
