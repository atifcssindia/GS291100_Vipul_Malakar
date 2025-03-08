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
import { getStores, getTopChannels } from "../fetch";
import { TrashIcon, ReorderIcon } from "@/assets/icons";

export async function Stores({ className }: { className?: string }) {
  const data = await getStores();
  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Store
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead></TableHead>
            <TableHead>S.No</TableHead>
            <TableHead>Store</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((store, i) => (
            <TableRow
              className="text-center text-base font-medium text-dark dark:text-white"
              key={store.ID + i}
            >
              <TableCell>
                  <TrashIcon className="cursor-pointer" />
              </TableCell>
              <TableCell className="flex items-center justify-center gap-4">
                <ReorderIcon className="mr-2" />
                {store["Seq No."]}
              </TableCell>
              <TableCell>{store.Label}</TableCell>
              <TableCell>{store.City}</TableCell>
              <TableCell>{store.State}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
