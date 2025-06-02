
import { Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const holdings = [
  {
    ticker: "GOOGL",
    exchange: "XNAS",
    shares: 5,
    valuePerShare: 171.74,
    totalValue: 858.70,
    lastDecision: "HOLD",
    change: -42.75,
    changePercent: -4.75
  },
  {
    ticker: "TSLA",
    exchange: "XNAS",
    shares: 1,
    valuePerShare: 346.46,
    totalValue: 346.46,
    lastDecision: "SELL",
    change: -13.38,
    changePercent: -3.72
  },
  {
    ticker: "NVDA",
    exchange: "XNAS",
    shares: 4,
    valuePerShare: 135.13,
    totalValue: 540.52,
    lastDecision: "SELL",
    change: -54.96,
    changePercent: -9.23
  },
  {
    ticker: "MSFT",
    exchange: "XNAS",
    shares: 4,
    valuePerShare: 460.36,
    totalValue: 1841.44,
    lastDecision: "SELL",
    change: 15.09,
    changePercent: 3.38
  },
  {
    ticker: "AMZN",
    exchange: "XNAS",
    shares: 1,
    valuePerShare: 205.01,
    totalValue: 205.01,
    lastDecision: "SELL",
    change: 105.01,
    changePercent: 105.01
  }
];

export const HoldingsTable = () => {
  const totalPortfolioValue = holdings.reduce((sum, holding) => sum + holding.totalValue, 0);

  const getDecisionBadge = (decision: string) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (decision) {
      case "HOLD":
        return `${baseClasses} bg-gray-100 text-gray-800`;
      case "SELL":
        return `${baseClasses} bg-red-100 text-red-800`;
      case "BUY":
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-700">Ticker</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Shares</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Value per share</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Total value</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Last decision</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">Change (%)</th>
            <th className="text-left py-3 px-4 font-medium text-gray-700"></th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4">
                <div>
                  <div className="font-semibold text-gray-900">{holding.ticker}</div>
                  <div className="text-sm text-gray-500">{holding.exchange}</div>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-900">{holding.shares}</td>
              <td className="py-3 px-4 text-gray-900">${holding.valuePerShare.toFixed(2)}</td>
              <td className="py-3 px-4 text-gray-900">${holding.totalValue.toFixed(2)}</td>
              <td className="py-3 px-4">
                <span className={getDecisionBadge(holding.lastDecision)}>
                  {holding.lastDecision}
                </span>
              </td>
              <td className="py-3 px-4">
                <span className={getChangeColor(holding.change)}>
                  {holding.change > 0 ? '+' : ''}{holding.changePercent.toFixed(2)}%
                </span>
              </td>
              <td className="py-3 px-4">
                <Button variant="ghost" size="sm">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </td>
            </tr>
          ))}
          <tr className="border-t-2 border-gray-300 bg-gray-50">
            <td className="py-3 px-4 font-semibold text-gray-900">Total</td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4 font-semibold text-gray-900">${totalPortfolioValue.toFixed(2)}</td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
