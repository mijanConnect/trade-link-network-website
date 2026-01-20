import { Suspense } from "react";
import Checkout from "@/app/components/checkout/Checkout";

function CheckoutFallback() {
  return <div className="my-5 lg:my-12">Loading...</div>;
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const carId = Number(resolvedParams.id);
  const displayCarId = Number.isNaN(carId) ? 1 : carId;

  return (
    <>
      <Suspense fallback={<CheckoutFallback />}>
        <div className="my-5 lg:my-12">
          <Checkout carId={displayCarId} />
        </div>
      </Suspense>
    </>
  );
}
