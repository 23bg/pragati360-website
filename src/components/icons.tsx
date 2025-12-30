import { Instagram, Chrome, Monitor, Smartphone, Store, Bell, LayoutDashboard, Calendar, Lock, ShieldCheck, Fingerprint, Cloud, Scale, type LucideIcon } from "lucide-react";

export const Icons = {
  instagram: Instagram,
  google: Chrome, // Using Chrome as a placeholder for Google Business Profile
  web: Monitor,
  android: Smartphone, // Using Smartphone for Android
  ios: Smartphone, // Using Smartphone for iOS
  store: Store,
  bell: Bell,
  dashboard: LayoutDashboard, // Using LayoutDashboard for unified dashboard
  calendar: Calendar, // Adding Calendar icon
  Lock: Lock,
  ShieldCheck: ShieldCheck,
  Fingerprint: Fingerprint,
  Cloud: Cloud,
  Scale: Scale,
} as const;

export type IconKeys = keyof typeof Icons;
export type Icon = LucideIcon;