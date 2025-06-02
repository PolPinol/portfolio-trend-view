
import { useState } from "react";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
import { HoldingsTable } from "@/components/HoldingsTable";
import { MarketSidebar } from "@/components/MarketSidebar";
import { AddAssetForm } from "@/components/AddAssetForm";

const Index = () => {
  const [showAddAsset, setShowAddAsset] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <PortfolioHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Portfolio Content */}
          <div className="lg:col-span-3 space-y-6">
            <PerformanceDashboard />
            
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <HoldingsTable />
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Add new asset to portfolio
                  </h3>
                  <AddAssetForm />
                </div>
              </div>
            </div>
          </div>
          
          {/* Market Sidebar */}
          <div className="lg:col-span-1">
            <MarketSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
