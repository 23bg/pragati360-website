import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table"; // Import Table type

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ColumnVisibilityDropdownProps<TData> {
  table: Table<TData>;
}

const ColumnVisibilityDropdown = <TData,>({ table }: ColumnVisibilityDropdownProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto cursor-pointer !bg-zinc-100 !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900 dark:!text-zinc-100 dark:hover:!bg-zinc-800">
          Columns <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value: boolean) =>
                column.toggleVisibility(value)
              }
            >
              {/* Show the actual header label instead of column.id */}
              {typeof column.columnDef.header === "function"
                ? React.createElement(column.columnDef.header as any, { column, table })
                : column.columnDef.header}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColumnVisibilityDropdown;
