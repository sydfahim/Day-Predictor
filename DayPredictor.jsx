import React, { useState } from 'react';

export default function DayPredictor() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [prediction, setPrediction] = useState('');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const predictTomorrow = () => {
    setIsPredicting(true);
    setShowResult(false);
    
    // Get tomorrow's day
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDay = days[tomorrow.getDay()];
    
    // Add some suspense with a delay
    setTimeout(() => {
      setPrediction(tomorrowDay);
      setIsPredicting(false);
      setShowResult(true);
    }, 2000);
  };

  const reset = () => {
    setShowResult(false);
    setPrediction('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center border border-white/20 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Day Predictor</h1>
          <p className="text-white/80 text-lg">Discover what day tomorrow will be</p>
        </div>

        {!showResult && !isPredicting && (
          <button
            onClick={predictTomorrow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Predict Tomorrow
          </button>
        )}

        {isPredicting && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto"></div>
            <p className="text-white/80 text-lg">Consulting the cosmic calendar...</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        )}

        {showResult && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-2">🔮 Prediction Revealed!</h2>
              <p className="text-3xl font-bold text-white">{prediction}</p>
            </div>
            <p className="text-white/80 text-sm italic">
              "The ancient algorithms have spoken..."
            </p>
            <button
              onClick={reset}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Predict Again
            </button>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm">
            ✨ 100% Accuracy Guaranteed* ✨
          </p>
          <p className="text-white/40 text-xs mt-1">
            *Results may vary in alternate dimensions
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}