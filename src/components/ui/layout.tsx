import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";

const flexLayoutVariants = cva("flex", {
  variants: {
    spacing: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
    },
    items: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    spacing: 2,
  },
});

export interface FlexLayoutProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexLayoutVariants> {}

const Column = forwardRef<HTMLDivElement, FlexLayoutProps>(
  ({ className, spacing, justify, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex-col",
        flexLayoutVariants({ spacing, justify, items }),
        className
      )}
      {...props}
    />
  )
);
Column.displayName = "Column";

const Row = forwardRef<HTMLDivElement, FlexLayoutProps>(
  ({ className, spacing, justify, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex-row",
        flexLayoutVariants({ spacing, justify, items }),
        className
      )}
      {...props}
    />
  )
);
Row.displayName = "Column";

export { Column, Row, flexLayoutVariants };
