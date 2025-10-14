import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  width: number;
  height: number;
  className?: string;
}

const Icon = ({ icon: Icon, width, height, className }: IconProps) => {
  return (
    <div className={cn("icon", className)}>
      <Icon width={width} height={height}/>
    </div>
  );
};

export default Icon;
