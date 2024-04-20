import { cn } from "@/lib/utils"
import React from "react"

export interface QuoteMarksProps extends React.HTMLAttributes<SVGElement> {
  side?: "left" | "right"
}

export const QuoteMarks = ({ className, side, ...props }: QuoteMarksProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    className={cn(side === "right" && "rotate-180", className)}
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
)