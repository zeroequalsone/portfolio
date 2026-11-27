import StackCategory from "./StackCategory";

type Category = {
  title: string;
  items: string[];
};

const STACK_CATEGORIES: Category[] = [
  {
    title: "Core",
    items: ["Semantic HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js (App Router)", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Backend & Database",
    items: ["Supabase (Auth)", "PostgreSQL (Row Level Security)"],
  },
  {
    title: "Tooling & Workflow",
    items: [
      "Git & GitHub",
      "GitHub Actions (CI)",
      "Vitest (Unit Tests)",
      "Vercel",
      "Figma",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-12">
      <div className="px-4 py-6 md:px-12 border-b-2 border-black flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Index_03 // Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        {STACK_CATEGORIES.map((category) => (
          <StackCategory
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}
