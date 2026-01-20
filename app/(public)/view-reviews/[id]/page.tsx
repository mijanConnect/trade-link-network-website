import Reviews from "@/app/components/view-reviews/Reviews";
import TopBar from "@/app/components/view-reviews/TopBar";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const carId = Number(resolvedParams.id);
  const displayCarId = Number.isNaN(carId) ? 1 : carId; // Default to 1 if invalid

  return (
    <>
      <div className="my-5 lg:my-12">
        <TopBar carId={displayCarId} />
        <Reviews carId={displayCarId} />
      </div>
    </>
  );
}
