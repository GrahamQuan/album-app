import { useCallback, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options, observerCallback]);

  return { containerRef, isVisible };
};
