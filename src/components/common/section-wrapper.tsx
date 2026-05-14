import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface SectionWrapperProps extends ComponentPropsWithoutRef<"section"> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-7xl px-6 pt-section pb-section-inner",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl mb-16", className)}>
      {label && (
        <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
