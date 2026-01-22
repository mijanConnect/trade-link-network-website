import Category from "../components/home/Category";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <div className="container mx-auto px-4 lg:px-0">
          {/* <Category /> */}
          <Category />
        </div>
      </>
    </main>
  );
}
