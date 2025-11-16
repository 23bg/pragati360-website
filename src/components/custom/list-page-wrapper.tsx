import React from "react";
import { Button } from "@/components/ui/button";

type ListPageWrapperProps = {
  title: string;
  subtitle?: string;
  createHref?: string;
  createLabel?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  dropdownSlot?: React.ReactNode;
  showExport?: boolean;
  showRefresh?: boolean;
  showBackButton?: boolean;
  children: React.ReactNode;
};

export function ListPageWrapper({
  title,
  subtitle,
  createHref,
  createLabel = "Create",
  showSearch,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  isLoading,
  error,
  onRetry,
  dropdownSlot,
  showExport,
  showRefresh,
  showBackButton,
  children,
}: ListPageWrapperProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-background text-foreground transition-colors">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {showBackButton && (
            <Button variant="outline" className="sm:hidden">
              Back
            </Button>
          )}

          {showRefresh && (
            <Button variant="outline" onClick={onRetry} disabled={isLoading}>
              Refresh
            </Button>
          )}

          {showExport && (
            <Button
              variant="outline"
              onClick={() => alert("Export feature coming soon")}
            >
              Export
            </Button>
          )}

          {dropdownSlot}

          {createHref && createLabel && (
            <Button className="whitespace-nowrap">{createLabel}</Button>
          )}
        </div>
      </header>

      {/* Search */}
      {showSearch && onSearchChange && (
        <div className="mb-4">
          <input
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full sm:w-64 px-3 py-2 border border-border rounded-md bg-background text-foreground 
                       placeholder:text-muted-foreground 
                       focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>
      )}

      {/* Content */}
      <main>
        {isLoading ? (
          <div className="text-center py-20 text-muted-foreground">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center py-20 text-destructive">
            <p>Error: {error}</p>
            {onRetry && (
              <Button onClick={onRetry} className="mt-2">
                Retry
              </Button>
            )}
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
