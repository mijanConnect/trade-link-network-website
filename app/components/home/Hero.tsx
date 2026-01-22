import Button from "../ui/Button";

export default function Hero() {
  return (
    <>
      <div className="w-full h-[92vh] bg-[url('/assets/hero-image.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="container mx-auto px-4 -mt-12">
          <h1 className="text-[60px] font-bold text-TextPrimary leading-tight">
            Connect with trusted tradespeople <br /> across the UK — fast
          </h1>
          <p className="text-[24px] mt-10 text-primaryTextLight">
            Tell us what you need and we’ll match you with verified <br />
            professionals near you
          </p>
          <Button className="mt-12" variant="primary">
            Post your job
          </Button>
        </div>
      </div>
    </>
  );
}
