import React, { useState } from 'react';
import { Database, TrendingUp, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface StockDetailsProps {
  isDark: boolean;
}

interface EquityShareDetail {
  currentdate?: string;
  equitycategory?: string;
  pevalue?: number;
  indexvalue?: number;
  [key: string]: any; // For any additional columns
}

const StockDetails: React.FC<StockDetailsProps> = ({ isDark }) => {
  const [stockData, setStockData] = useState<EquityShareDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Helper functions - moved before they are used
  const formatCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN').format(value);
  };

  const formatDate = (value: string | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    try {
      return new Date(value).toLocaleDateString('en-IN');
    } catch {
      return value;
    }
  };

  const fetchStockDetails = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { data, error } = await supabase
        .from('equitysharedetails')
        .select('currentdate, equitycategory, pevalue, indexvalue');

      if (error) {
        throw error;
      }

      setStockData(data || []);
      setSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch stock details');
      console.error('Error fetching stock details:', err);
    } finally {
      setLoading(false);
    }
  };

  const processChartData = () => {
    if (stockData.length === 0) return null;

    // Get unique dates and sort them
    const uniqueDates = [...new Set(stockData.map(item => item.currentdate))]
      .filter(date => date)
      .sort((a, b) => new Date(a!).getTime() - new Date(b!).getTime());

    // Get unique equity categories
    const uniqueCategories = [...new Set(stockData.map(item => item.equitycategory))]
      .filter(category => category);

    // Generate colors for each category
    const colors = [
      'rgba(59, 130, 246, 0.8)', // Blue
      'rgba(16, 185, 129, 0.8)', // Green
      'rgba(245, 101, 101, 0.8)', // Red
      'rgba(139, 92, 246, 0.8)', // Purple
      'rgba(245, 158, 11, 0.8)', // Yellow
      'rgba(236, 72, 153, 0.8)', // Pink
      'rgba(14, 165, 233, 0.8)', // Sky
      'rgba(34, 197, 94, 0.8)', // Emerald
    ];

    const datasets = uniqueCategories.map((category, index) => {
      const categoryData = uniqueDates.map(date => {
        const item = stockData.find(
          stock => stock.currentdate === date && stock.equitycategory === category
        );
        return item?.pevalue || 0;
      });

      return {
        label: category || 'Unknown',
        data: categoryData,
        backgroundColor: colors[index % colors.length],
        borderColor: colors[index % colors.length].replace('0.8', '1'),
        borderWidth: 1,
      };
    });

    // Add PE value dotted line
    const peValueLineData = uniqueDates.map(date => {
      const item = stockData.find(stock => stock.currentdate === date);
      return item?.pevalue || 0;
    });

    datasets.push({
      type: 'line' as const,
      label: 'PE Value Line',
      data: peValueLineData,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      borderDash: [5, 5],
      pointRadius: 0,
      fill: false,
      tension: 0,
    });
    return {
      labels: uniqueDates.map(date => formatDate(date)),
      datasets,
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? '#D1D5DB' : '#374151',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'PE Values by Equity Category Over Time',
        color: isDark ? '#FFFFFF' : '#111827',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        backgroundColor: isDark ? '#374151' : '#FFFFFF',
        titleColor: isDark ? '#FFFFFF' : '#111827',
        bodyColor: isDark ? '#D1D5DB' : '#374151',
        borderColor: isDark ? '#6B7280' : '#D1D5DB',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: isDark ? '#D1D5DB' : '#374151',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
        },
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          maxRotation: 45,
        },
        grid: {
          color: isDark ? '#374151' : '#E5E7EB',
        },
      },
      y: {
        title: {
          display: true,
          text: 'PE Value',
          color: isDark ? '#D1D5DB' : '#374151',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
        },
        grid: {
          color: isDark ? '#374151' : '#E5E7EB',
        },
        beginAtZero: true,
      },
    },
  };

  const chartData = processChartData();

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-blue-600' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse`}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 ${isDark ? 'bg-purple-600' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-20 left-1/2 w-80 h-80 ${isDark ? 'bg-blue-800' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Stock{' '}
            <span className="text-blue-600">Details</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Fetch and view real-time equity share details from your Supabase database. 
            Get comprehensive information about stocks including prices, market cap, and financial ratios.
          </p>

          {/* Fetch Button */}
          <button
            onClick={fetchStockDetails}
            disabled={loading}
            className={`group flex items-center justify-center gap-3 mx-auto px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
            } text-white shadow-lg hover:shadow-blue-500/25`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Fetching Data...
              </>
            ) : (
              <>
                <Database className="w-6 h-6" />
                Fetch Stock Details
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {error && (
          <div className={`mb-8 p-4 rounded-lg border ${isDark ? 'bg-red-900/20 border-red-800 text-red-300' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Error:</span>
              {error}
            </div>
          </div>
        )}

        {success && (
          <div className={`mb-8 p-4 rounded-lg border ${isDark ? 'bg-green-900/20 border-green-800 text-green-300' : 'bg-green-50 border-green-200 text-green-800'}`}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Success:</span>
              Stock details fetched successfully! Found {stockData.length} records.
            </div>
          </div>
        )}

        {/* Chart Section */}
        {stockData.length > 0 && chartData && (
          <div className={`mb-8 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-xl'}`}>
            <div className={`px-6 py-4 border-b ${isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
              <div className="flex items-center gap-3">
                <TrendingUp className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  PE Values Chart
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div style={{ height: '400px' }}>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        )}

        {/* Data Display */}
        {stockData.length > 0 && (
          <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-xl'}`}>
            <div className={`px-6 py-4 border-b ${isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
              <div className="flex items-center gap-3">
                <TrendingUp className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Equity Share Details ({stockData.length} records)
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Date
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Equity Category
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      PE Value
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Index Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((stock, index) => (
                    <tr
                      key={index}
                      className={`border-b transition-colors duration-200 ${
                        isDark 
                          ? 'border-gray-700 hover:bg-gray-750' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`px-6 py-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <div className="font-semibold">
                          {formatDate(stock.currentdate)}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {stock.equitycategory || 'N/A'}
                        </span>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                        <div className="font-semibold">
                          {formatNumber(stock.pevalue)}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        <div className="font-semibold">
                          {formatNumber(stock.indexvalue)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && stockData.length === 0 && !error && (
          <div className={`text-center py-16 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Database className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Data Available</h3>
            <p>Click "Fetch Stock Details" to load data from your Supabase database.</p>
          </div>
        )}

        {/* Database Info */}
        <div className={`mt-12 p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Database Connection Info
          </h3>
          <div className={`grid md:grid-cols-2 gap-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>
              <span className="font-medium">Project:</span> TaskManager
            </div>
            <div>
              <span className="font-medium">Table:</span> equitysharedetails
            </div>
            <div>
              <span className="font-medium">Project ID:</span> qxtzljusnyaeaxprcutp
            </div>
            <div>
              <span className="font-medium">Status:</span> 
              <span className={`ml-2 px-2 py-1 rounded text-xs ${isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;