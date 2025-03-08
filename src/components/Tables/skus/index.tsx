import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getSkus, getStores, getTopChannels } from "../fetch";
import { TrashIcon, ReorderIcon } from "@/assets/icons";

export async function Sku({ className }: { className?: string }) {
  const data = await getSkus();
  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        SKU
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead></TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Cost</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((sku, i) => (
            <TableRow
              className="text-center text-base font-medium text-dark dark:text-white"
              key={sku.ID + i}
            >
              <TableCell>
                  <TrashIcon className="cursor-pointer" />
              </TableCell>
              <TableCell>{sku.Label}</TableCell>
              <TableCell>{sku.Price}</TableCell>
              <TableCell>{sku.Cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
