import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <div className="container mx-auto px-4">
          <Hero />
        </div>
      </>
    </main>
  );
}
