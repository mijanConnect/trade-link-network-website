import React from "react";

type IconKey = string;

interface WhyUseItem {
  id: number | string;
  icon: IconKey;
  title: string;
}

interface WhyUseProps {
  title: string;
  subtitle: string;
  items: WhyUseItem[];
  icons: Record<IconKey, React.ReactNode>;
}

function WhyUseCard({
  icon,
  title,
  icons,
}: {
  icon: IconKey;
  title: string;
  icons: Record<IconKey, React.ReactNode>;
}) {
  return (
    <div className="flex flex-col items-center bg-white py-8 md:py-12 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#E9EBEF] inline-block p-5 rounded-full mb-7">
        {icons[icon] || null}
      </div>
      <h3 className="text-[18px] md:text-[20px] text-primary font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}

export default function WhyUse({ title, subtitle, items, icons }: WhyUseProps) {
  return (
    <div className="py-6 md:py-10 lg:py-[130px]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="mb-4 md:mb-6 lg:mb-20 text-center">
          <h1 className="text-[20px] md:text-[40px] font-semibold text-primaryText">
            {title}
          </h1>
          <p className="text-[16px] md:text-[24px] text-primaryTextLight mt-4">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full sm:basis-[48%] md:basis-[calc(33.333%-1.5rem)]"
            >
              <WhyUseCard icon={item.icon} title={item.title} icons={icons} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
