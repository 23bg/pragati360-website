"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <span className="text-sm text-muted-foreground">
        Theme
      </span>

      <ToggleGroup
        type='single'

        value={theme}
        onValueChange={(value) => {
          if (value) setTheme(value);
        }}
        className="justify-start bg-zinc-500"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light theme"
          className="flex items-center gap-2"
        >
          <Sun className="h-4 w-4" />

        </ToggleGroupItem>

        <ToggleGroupItem
          value="dark"
          aria-label="Dark theme"
          className="flex items-center gap-2"
        >
          <Moon className="h-4 w-4" />

        </ToggleGroupItem>

        <ToggleGroupItem
          value="system"
          aria-label="System theme"
          className="flex items-center gap-2"
        >
          <Laptop className="h-4 w-4" />

        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
