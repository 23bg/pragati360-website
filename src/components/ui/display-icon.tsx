import { Icons } from "@/components/icons";
import { type LucideIcon } from "lucide-react";

interface DisplayIconProps {
  icon: string;
  className?: string;
}

export const DisplayIcon: React.FC<DisplayIconProps> = ({ icon, className }) => {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon | undefined;
  if (!IconComponent) {
    // Fallback if icon is not found, render first letter or a generic icon
    return <span className={className}>{icon.charAt(0).toUpperCase()}</span>;
  }
  return <IconComponent className={className} />;
};
