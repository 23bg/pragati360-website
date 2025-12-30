import { Icons } from "@/components/icons";
import { type LucideIcon } from "lucide-react";

interface DisplayIconProps {
  icon?: string;
  name?: string; // backward compatibility for some pages using `name` prop
  className?: string;
}

export const DisplayIcon: React.FC<DisplayIconProps> = ({ icon, name, className }) => {
  const key = icon ?? name ?? "";
  const IconComponent = Icons[key as keyof typeof Icons] as LucideIcon | undefined;
  if (!IconComponent) {
    const fallback = (key && key.length > 0) ? key.charAt(0).toUpperCase() : "?";
    return <span className={className}>{fallback}</span>;
  }
  return <IconComponent className={className} />;
};

// Export aliases for compatibility with older imports
export const Icon = DisplayIcon;
export const ProductIcon = DisplayIcon;
