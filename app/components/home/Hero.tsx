import Button from "../ui/Button";

export default function Hero() {
  return (
    <>
      <div className="w-full h-[50vh] lg:h-[92vh] bg-[url('/assets/hero-image.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="container mx-auto px-4 mt-0 lg:-mt-12">
          <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-bold text-TextPrimary leading-tight">
            Connect with trusted tradespeople <br /> across the UK — fast
          </h1>
          <p className="text-[18px] md:text-[24px] mt-4 lg:mt-10 text-primaryTextLight max-w-[600px]">
            Tell us what you need and we’ll match you with verified
            professionals near you
          </p>
          <Button className="mt-6 lg:mt-12" variant="primary">
            Post your job
          </Button>
        </div>
      </div>
    </>
  );
}
