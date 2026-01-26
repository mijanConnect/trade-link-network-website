import Button from "../ui/Button";
import { ReactNode } from "react";

type JobAction = {
  id?: string;
  label: string;
  variant: "primary" | "outline";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
};

type JobCardProps = {
  title: string;
  postedOn: string;
  description: string;
  actions?: JobAction[];
};

export default function JobCard({
  title,
  postedOn,
  description,
  actions,
}: JobCardProps) {
  const finalActions: JobAction[] =
    actions && actions.length > 0
      ? actions
      : [
          {
            label: "Create Post",
            variant: "outline",
            className:
              "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
          },
          { label: "View Details", variant: "primary" },
        ];

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-primary bg-white p-4 md:p-8 lg:gap-12">
      <div>
        <h1 className="text-[24px] text-primaryText lg:text-[28px] font-semibold">
          {title}
        </h1>
        <p className="mt-0 text-[14px] text-gray-400 lg:mt-2 lg:text-[18px]">
          {postedOn}
        </p>
        <p className="mt-4 text-[16px] text-primaryText lg:mt-8 lg:text-[22px]">
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <div className="flex w-full gap-4 md:w-auto md:gap-6">
          {finalActions.map((action) => (
            <Button
              key={action.id ?? action.label}
              variant={action.variant}
              size="md"
              className={`w-1/2 md:w-auto ${action.className ?? ""}`.trim()}
              onClick={action.onClick}
            >
              <span
                className={`flex items-center justify-center ${
                  action.icon ? "gap-2" : "gap-0"
                }`}
              >
                {action.icon ? (
                  <div className="-mt-1">{action.icon}</div>
                ) : null}
                <span>{action.label}</span>
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
