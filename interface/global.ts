import { Side } from "@/types/types";

export interface TooltipProps {
  side: Side;
  tooltip: string;
  delay?: number;
}