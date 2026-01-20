import { Check } from "lucide-react";

type ProgressStepperProps = {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  className?: string;
};

export default function ProgressStepper({
  steps,
  currentStep,
  onStepClick,
  className,
}: ProgressStepperProps) {
  return (
    <div className={className ?? "w-full flex justify-center mb-8"}>
      <div className="w-full max-w-5xl">
        {/* Stepper */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div
                key={step}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => onStepClick?.(index)}
              >
                {/* Connector */}
                {index !== 0 && (
                  <div
                    className={`absolute top-5 left-[-50%] w-full h-0.5
                        ${
                          isCompleted ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                  />
                )}

                {/* Circle */}
                <div
                  className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium
                      ${
                        isCompleted
                          ? "bg-primary border-primary text-white"
                          : isActive
                          ? "border-primary text-primary bg-white"
                          : "border-muted-foreground text-muted-foreground bg-white"
                      }`}
                >
                  {isCompleted ? <Check size={18} /> : index + 1}
                </div>

                {/* Labels */}
                <p
                  className={`mt-3 text-[10px] lg:text-[18px] font-medium text-center
                      ${
                        isActive || isCompleted
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
