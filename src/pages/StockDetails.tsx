import React, { useState } from 'react';
import { Database, TrendingUp, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface StockDetailsProps {
  isDark: boolean;
}

interface EquityShareDetail {
  id?: number;
  company_name?: string;
  symbol?: string;
  current_price?: number;
  market_cap?: number;
  pe_ratio?: number;
  dividend_yield?: number;
  sector?: string;
  created_at?: string;
  [key: string]: any; // For any additional columns
}

const StockDetails: React.FC<StockDetailsProps> = ({ isDark }) => {
  const [stockData, setStockData] = useState<EquityShareDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const fetchStockDetails = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { data, error } = await supabase
        .from('equitysharedetails')
        .select('*');

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

  const formatCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN').format(value);
  };

  const formatPercentage = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return `${value.toFixed(2)}%`;
  };

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
                      Company
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Symbol
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Current Price
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Market Cap
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      P/E Ratio
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Dividend Yield
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Sector
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((stock, index) => (
                    <tr
                      key={stock.id || index}
                      className={`border-b transition-colors duration-200 ${
                        isDark 
                          ? 'border-gray-700 hover:bg-gray-750' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`px-6 py-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <div className="font-semibold">
                          {stock.company_name || 'N/A'}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <div className="font-mono font-semibold">
                          {stock.symbol || 'N/A'}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                        <div className="font-semibold">
                          {formatCurrency(stock.current_price)}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {formatNumber(stock.market_cap)}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stock.pe_ratio ? stock.pe_ratio.toFixed(2) : 'N/A'}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        {formatPercentage(stock.dividend_yield)}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {stock.sector || 'N/A'}
                        </span>
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