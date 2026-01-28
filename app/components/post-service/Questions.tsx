import { CustomSelect } from "../ui/CustomSelect";
import Button from "../ui/Button";

const questions = [
  {
    question: "What type of garden service do you need?",
    options: [
      { value: "new-garden", label: "New garden / blank canvas" },
      { value: "garden-redesign", label: "Garden redesign / makeover" },
      { value: "patios-paving", label: "Patios & paving" },
      { value: "decking", label: "Decking (timber or composite)" },
    ],
  },
  {
    question: "Which outdoor service are you looking for?",
    options: [
      { value: "fencing", label: "Fencing" },
      { value: "turfing", label: "Turfing / artificial grass" },
      { value: "groundworks-drainage", label: "Groundworks & drainage" },
      { value: "garden-maintenance", label: "Garden maintenance" },
    ],
  },
  {
    question: "Do you need advice on your garden project?",
    options: [
      { value: "need-advice", label: "Not sure yet – need advice" },
      { value: "patios-paving", label: "Patios & paving" },
      { value: "tree-surgery", label: "Tree surgery / tree work" },
      { value: "garden-redesign", label: "Garden redesign / makeover" },
    ],
  },
  {
    question: "Which of these services do you need for your home?",
    options: [
      { value: "new-garden", label: "New garden / blank canvas" },
      { value: "fencing", label: "Fencing" },
      { value: "groundworks-drainage", label: "Groundworks & drainage" },
      { value: "decking", label: "Decking (timber or composite)" },
    ],
  },
  {
    question: "Are you looking for tree care services?",
    options: [
      { value: "tree-surgery", label: "Tree surgery / tree work" },
      { value: "garden-maintenance", label: "Garden maintenance" },
      { value: "fencing", label: "Fencing" },
      { value: "turfing", label: "Turfing / artificial grass" },
    ],
  },
  {
    question: "Which garden maintenance service do you need?",
    options: [
      { value: "garden-maintenance", label: "Garden maintenance" },
      { value: "new-garden", label: "New garden / blank canvas" },
      { value: "decking", label: "Decking (timber or composite)" },
      { value: "patios-paving", label: "Patios & paving" },
    ],
  },
  {
    question: "What type of outdoor flooring do you want?",
    options: [
      { value: "patios-paving", label: "Patios & paving" },
      { value: "decking", label: "Decking (timber or composite)" },
      { value: "fencing", label: "Fencing" },
      { value: "new-garden", label: "New garden / blank canvas" },
    ],
  },
  {
    question: "Which type of drainage service are you interested in?",
    options: [
      { value: "groundworks-drainage", label: "Groundworks & drainage" },
      { value: "tree-surgery", label: "Tree surgery / tree work" },
      { value: "patios-paving", label: "Patios & paving" },
      { value: "fencing", label: "Fencing" },
    ],
  },
  {
    question: "What kind of garden project are you planning?",
    options: [
      { value: "new-garden", label: "New garden / blank canvas" },
      { value: "garden-redesign", label: "Garden redesign / makeover" },
      { value: "fencing", label: "Fencing" },
      { value: "turfing", label: "Turfing / artificial grass" },
    ],
  },
  {
    question: "Are you interested in artificial grass for your garden?",
    options: [
      { value: "turfing", label: "Turfing / artificial grass" },
      { value: "groundworks-drainage", label: "Groundworks & drainage" },
      { value: "decking", label: "Decking (timber or composite)" },
      { value: "tree-surgery", label: "Tree surgery / tree work" },
    ],
  },
];

export default function Questions() {
  return (
    <>
      <div className="space-y-6 lg:space-y-10">
        {questions.map((question, index) => (
          <div key={index} className="space-y-4 lg:space-y-6">
            <CustomSelect
              label={question.question}
              options={question.options}
              placeholder="Choose a service category"
            />
            <div className="flex gap-4">
              <Button variant="outline" className="w-[100px]">
                Back
              </Button>
              <Button variant="primary" className="w-[100px]">
                Next
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
