import DetailsMain from "@/app/components/view-details/DetailsMain";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const carId = Number(resolvedParams.id);

  return (
    <>
      <div className="my-5 lg:my-12">
        <DetailsMain carId={Number.isNaN(carId) ? null : carId} />
      </div>
    </>
  );
}
