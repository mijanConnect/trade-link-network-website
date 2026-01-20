import Image from "next/image";

export default function DownloadLink() {
  return (
    <>
      <div className="flex justify-center my-10 lg:my-[180px]">
        <div className="border py-10 md:py-[86px] px-8 sm:px-[60px] md:px-[126px] border-stroke rounded-lg">
          <div className="flex flex-col">
            <h1 className="text-center inline-block text-[24px] sm:text-[40px] md:text-[60px] font-semibold mb-4.5 leading-tight text-primaryText">
              Now Available on the
              <br />
              Motly App
            </h1>
            <p className="text-center inline-block text-[22px] mb-4 text-primaryText">
              Fast, secure, and easy to use on any device.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="block">
                <Image
                  src="/assets/download/appstore.png"
                  alt="Download on the App Store"
                  width={228}
                  height={62}
                />
              </a>
              <a href="#" className="block">
                <Image
                  src="/assets/download/googleplay.png"
                  alt="Get it on Google Play"
                  width={228}
                  height={62}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
