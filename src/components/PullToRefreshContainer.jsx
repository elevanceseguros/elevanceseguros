import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, ArrowDown } from 'lucide-react';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';
import { cn } from '@/lib/utils';

const PullToRefreshContainer = ({ children, onRefresh }) => {
  const { pullDistance, isRefreshing, progress } = usePullToRefresh(onRefresh);

  return (
    <div className="relative min-h-screen">
      {/* Visual Indicator Container */}
      <div 
        className="fixed top-0 left-0 right-0 flex justify-center pointer-events-none z-50"
        style={{ height: `${Math.max(pullDistance, isRefreshing ? 80 : 0)}px` }}
      >
        <div className="absolute top-0 w-full h-full overflow-hidden flex items-end justify-center pb-4">
           {/* Background Circle */}
           <motion.div
             className="bg-white rounded-full shadow-lg p-3 flex items-center justify-center border border-slate-100"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ 
               scale: isRefreshing ? 1 : Math.min(progress * 1.2, 1), 
               opacity: isRefreshing ? 1 : Math.max(progress, 0),
               y: isRefreshing ? 20 : Math.min(pullDistance * 0.4, 40)
             }}
             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
           >
             <AnimatePresence mode="wait">
                {isRefreshing ? (
                  <motion.div
                    key="refreshing"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <RefreshCcw className="w-6 h-6 text-blue-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="pulling"
                    style={{ rotate: progress * 180 }}
                  >
                     {progress < 0.8 ? (
                       <ArrowDown className={cn("w-6 h-6", progress > 0.5 ? "text-blue-500" : "text-slate-400")} />
                     ) : (
                        <RefreshCcw className="w-6 h-6 text-blue-600" />
                     )}
                  </motion.div>
                )}
             </AnimatePresence>
           </motion.div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <motion.div
        animate={{ y: pullDistance }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefreshContainer;