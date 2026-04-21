import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for pull-to-refresh functionality
 * @param {Function} onRefresh - Callback function to execute when refresh is triggered
 * @param {number} threshold - Distance in pixels to pull to trigger refresh (default: 80)
 * @returns {object} - { pullDistance, isRefreshing, progress }
 */
export const usePullToRefresh = (onRefresh, threshold = 80) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startPoint, setStartPoint] = useState(0);
  
  // Calculate progress from 0 to 1 based on threshold
  const progress = Math.min(pullDistance / threshold, 1);

  const handleTouchStart = useCallback((e) => {
    // Only activate if we are at the top of the page
    if (window.scrollY === 0 && !isRefreshing) {
      setStartPoint(e.touches[0].clientY);
    }
  }, [isRefreshing]);

  const handleTouchMove = useCallback((e) => {
    if (startPoint === 0 || isRefreshing) return;

    const currentPoint = e.touches[0].clientY;
    const diff = currentPoint - startPoint;

    // Only allow pulling down (positive difference) and if at top
    if (diff > 0 && window.scrollY <= 0) {
      // Add resistance to the pull (logarithmic scaling)
      const newDistance = Math.pow(diff, 0.8);
      // Limit maximum pull distance visually
      if (newDistance < 200) {
        setPullDistance(newDistance);
        // Prevent default scrolling behavior if we are effectively pulling to refresh
        if (e.cancelable && diff > 10) {
           // We generally don't want to preventDefault all touchmoves as it breaks scrolling
           // but for simple implementations often just relying on CSS overscroll-behavior is safer.
           // However, to ensure custom UI logic, we track the distance.
        }
      }
    }
  }, [startPoint, isRefreshing]);

  const handleTouchEnd = useCallback(async () => {
    if (startPoint === 0 || isRefreshing) return;

    if (pullDistance > threshold) {
      setIsRefreshing(true);
      setPullDistance(threshold); // Snap to threshold position
      
      // Trigger haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      // Snap back if threshold not met
      setPullDistance(0);
    }
    
    setStartPoint(0);
  }, [pullDistance, threshold, isRefreshing, startPoint, onRefresh]);

  useEffect(() => {
    // Passive: false is sometimes needed for preventDefault, but generally better to keep passive true for performance
    // unless we strictly need to block scroll. Since we check scrollY === 0, we coexist with native scroll.
    const options = { passive: true };
    
    document.addEventListener('touchstart', handleTouchStart, options);
    document.addEventListener('touchmove', handleTouchMove, options);
    document.addEventListener('touchend', handleTouchEnd, options);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    pullDistance,
    isRefreshing,
    progress
  };
};