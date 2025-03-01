import { cn } from "@/lib/utils";

export const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-3 rounded bg-white/30 px-4 py-2 backdrop-blur-xl",
        className
      )}
    >
      <p className="font-aloevera">{children}</p>
      <span className="size-1 rotate-45 bg-brand" />
    </div>
  );
};
