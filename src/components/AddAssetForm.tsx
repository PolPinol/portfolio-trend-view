
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const popularAssets = [
  "AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "NVDA", "META", "NFLX", "AMD", "INTC"
];

export const AddAssetForm = () => {
  const [selectedAsset, setSelectedAsset] = useState("");

  const handleAddHolding = () => {
    if (selectedAsset) {
      console.log("Adding asset:", selectedAsset);
      // Here you would typically add the asset to your holdings
      setSelectedAsset("");
    }
  };

  return (
    <div className="flex gap-4 items-end">
      <div className="flex-1">
        <Select value={selectedAsset} onValueChange={setSelectedAsset}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an asset" />
          </SelectTrigger>
          <SelectContent>
            {popularAssets.map((asset) => (
              <SelectItem key={asset} value={asset}>
                {asset}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button 
        onClick={handleAddHolding}
        disabled={!selectedAsset}
        className="bg-gray-500 hover:bg-gray-600 text-white px-6"
      >
        Add holding
      </Button>
    </div>
  );
};
