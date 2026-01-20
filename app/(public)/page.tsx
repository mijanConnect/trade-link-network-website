import DownloadLink from "../components/home/DownloadLink";
import FAQ from "../components/home/FAQ";
import SearchBox from "../components/home/SearchBox";
import Cars from "../components/home/Cars";

export default function Home() {
  return (
    <main>
      <div className="my-5 lg:my-12">
        <SearchBox />
        <Cars />
        <DownloadLink />
        <FAQ />
      </div>
    </main>
  );
}
