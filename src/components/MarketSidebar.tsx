
import { AlertTriangle, TrendingUp, TrendingDown, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const marketNews = [
  {
    title: "ServiceNow Regenerates On Swarm Of AI Deals With Amazon, Microsoft And More",
    time: "2 hours ago",
    sentiment: "positive"
  },
  {
    title: "Tech Stocks Rally on AI Breakthrough Announcements",
    time: "4 hours ago", 
    sentiment: "positive"
  },
  {
    title: "Federal Reserve Hints at Rate Changes",
    time: "6 hours ago",
    sentiment: "neutral"
  }
];

const topMovers = [
  { ticker: "NVDA", change: 8.45, price: 145.67 },
  { ticker: "AAPL", change: -2.34, price: 187.23 },
  { ticker: "MSFT", change: 3.21, price: 463.57 },
  { ticker: "TSLA", change: -5.67, price: 340.79 }
];

export const MarketSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Market News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5" />
            Market News
          </CardTitle>
          <p className="text-sm text-gray-600">24 new articles today</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {marketNews.map((news, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
              <p className="text-sm font-medium text-gray-900 leading-tight mb-1">
                {news.title}
              </p>
              <p className="text-xs text-gray-500">{news.time}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-900">Price Alert</p>
              <p className="text-sm text-gray-600">37 alerts in the last day</p>
              <p className="text-sm text-gray-500">Latest: No change</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Movers */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Top Movers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topMovers.map((stock, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{stock.ticker}</p>
                  <p className="text-sm text-gray-600">${stock.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-1">
                  {stock.change > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
                    {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Indices */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bell className="w-5 h-5 text-blue-500" />
            Market Indices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">S&P 500</span>
              <div className="text-right">
                <div className="font-medium">4,567.23</div>
                <div className="text-green-600 text-sm">+0.8%</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">NASDAQ</span>
              <div className="text-right">
                <div className="font-medium">14,234.56</div>
                <div className="text-green-600 text-sm">+1.2%</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">DOW</span>
              <div className="text-right">
                <div className="font-medium">33,987.45</div>
                <div className="text-red-600 text-sm">-0.3%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
