import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

// Helper function to determine background color based on percentage
const getPercentageColor = (percentage: number) => {
  if (percentage >= 40) return "bg-green-500/80"
  if (percentage >= 25) return "bg-yellow-500/80"
  if (percentage >= 8) return "bg-orange-400/80"
  return "bg-red-400/80"
}

// Mock data function to replace the imported getStores
const getMockStoreData = () => {
  return [
    { ID: "1", "Seq No.": 1, Label: "Nashville Melody Music Store", City: "Nashville", State: "TN" },
    { ID: "2", "Seq No.": 2, Label: "Chicago Charm Boutique", City: "Chicago", State: "IL" },
    { ID: "3", "Seq No.": 3, Label: "Miami Breeze Apparel", City: "Miami", State: "FL" },
    { ID: "4", "Seq No.": 4, Label: "Nashville Melody Music Store", City: "Nashville", State: "TN" },
    { ID: "5", "Seq No.": 5, Label: "Chicago Charm Boutique", City: "Chicago", State: "IL" },
    { ID: "6", "Seq No.": 6, Label: "Detroit Motor Gear", City: "Detroit", State: "MI" },
    { ID: "7", "Seq No.": 7, Label: "Phoenix Sunwear", City: "Phoenix", State: "AZ" },
  ]
}

export default async function Home({ className }: { className?: string }) {
  // Use the mock data function instead of the imported getStores
  const data = getMockStoreData()

  // This would come from your API, adding mock data for demonstration
  const salesData = data.map((store) => ({
    ...store,
    week01: {
      salesUnits: Math.floor(Math.random() * 300),
      salesDollars: Math.floor(Math.random() * 30000),
      gmDollars: Math.floor(Math.random() * 15000),
      gmPercent: Math.floor(Math.random() * 100),
    },
    week02: {
      salesUnits: Math.floor(Math.random() * 100),
      salesDollars: Math.floor(Math.random() * 10000),
      gmDollars: Math.floor(Math.random() * 15000),
      gmPercent: Math.floor(Math.random() * 100),
    },
    sku: [
      "Rugged Utility Jacket",
      "Floral Chiffon Wrap Dress",
      "Lace-Up Combat Boots",
      "Silk Embroidered Kimono",
      "Textured Knit Pullover",
      "Oversized Cat-Eye Sunglasses",
    ][Math.floor(Math.random() * 6)],
  }))

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-4 pb-4 pt-6 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">Store Performance</h2>

      <div className="overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow className="border-b border-gray-200 [&>th]:py-2">
              <TableHead rowSpan={2} className="text-left font-semibold">
                Store
              </TableHead>
              <TableHead rowSpan={2} className="text-left font-semibold">
                SKU
              </TableHead>
              <TableHead colSpan={4} className="text-center font-semibold border-l border-gray-200">
                Week 01
              </TableHead>
              <TableHead colSpan={4} className="text-center font-semibold border-l border-gray-200">
                Week 02
              </TableHead>
            </TableRow>
            <TableRow className="border-b border-gray-200 [&>th]:py-2 [&>th]:text-sm">
              {/* Week 01 columns */}
              <TableHead className="text-center border-l border-gray-200">Sales Units</TableHead>
              <TableHead className="text-center">Sales Dollars</TableHead>
              <TableHead className="text-center">GM Dollars</TableHead>
              <TableHead className="text-center">GM Percent</TableHead>

              {/* Week 02 columns */}
              <TableHead className="text-center border-l border-gray-200">Sales Units</TableHead>
              <TableHead className="text-center">Sales Dollars</TableHead>
              <TableHead className="text-center">GM Dollars</TableHead>
              <TableHead className="text-center">GM Percent</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {salesData.map((store, i) => (
              <TableRow
                className="text-sm font-medium text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                key={store.ID + i}
              >
                <TableCell className="text-left">{store.Label}</TableCell>
                <TableCell className="text-left">{store.sku}</TableCell>

                {/* Week 01 data */}
                <TableCell className="text-center border-l border-gray-200">
                  {store.week01.salesUnits.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">$ {store.week01.salesDollars.toFixed(2)}</TableCell>
                <TableCell className="text-center">$ {store.week01.gmDollars.toFixed(2)}</TableCell>
                <TableCell className="p-0">
                  <div className={cn("py-2 text-center", getPercentageColor(store.week01.gmPercent))}>
                    {store.week01.gmPercent.toFixed(2)} %
                  </div>
                </TableCell>

                {/* Week 02 data */}
                <TableCell className="text-center border-l border-gray-200">
                  {store.week02.salesUnits.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">$ {store.week02.salesDollars.toFixed(2)}</TableCell>
                <TableCell className="text-center">$ {store.week02.gmDollars.toFixed(2)}</TableCell>
                <TableCell className="p-0">
                  <div className={cn("py-2 text-center", getPercentageColor(store.week02.gmPercent))}>
                    {store.week02.gmPercent.toFixed(2)} %
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

