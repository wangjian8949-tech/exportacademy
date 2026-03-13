import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "muted" | "dark";
  id?: string;
}

export default function Section({ children, className, bg = "white", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        bg === "muted" && "bg-slate-50",
        bg === "dark" && "bg-slate-900 text-white",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
