import { Side } from "@/types/button";

export interface TooltipPropsCustom {
  useTooltip: boolean;
  tooltip: string;
  side: Side;
  delay?: number;
}
