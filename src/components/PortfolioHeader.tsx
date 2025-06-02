
import { Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PortfolioHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">AutoInvestor</h1>
          
          <div className="flex items-center gap-3">
            <Button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Play className="w-4 h-4" />
              Simulate
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-700">
              <User className="w-4 h-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
