
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { date: "Jan", value: 3200 },
  { date: "Feb", value: 3400 },
  { date: "Mar", value: 3300 },
  { date: "Apr", value: 3600 },
  { date: "May", value: 3500 },
  { date: "Jun", value: 3792 },
];

export const PerformanceDashboard = () => {
  const totalValue = 3792.13;
  const dailyChange = 125.45;
  const dailyChangePercent = 3.42;
  const totalReturn = 592.13;
  const totalReturnPercent = 18.51;

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Performance</h2>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Total Value</span>
            </div>
            <div className="text-2xl font-bold text-blue-900">${totalValue.toLocaleString()}</div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Daily Change</span>
            </div>
            <div className="text-2xl font-bold text-green-900">
              +${dailyChange.toFixed(2)}
            </div>
            <div className="text-sm text-green-700">+{dailyChangePercent}%</div>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Total Return</span>
            </div>
            <div className="text-2xl font-bold text-emerald-900">
              +${totalReturn.toFixed(2)}
            </div>
            <div className="text-sm text-emerald-700">+{totalReturnPercent}%</div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Best Performer</span>
            </div>
            <div className="text-lg font-bold text-purple-900">AMZN</div>
            <div className="text-sm text-purple-700">+105.01%</div>
          </div>
        </div>
        
        {/* Performance Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
