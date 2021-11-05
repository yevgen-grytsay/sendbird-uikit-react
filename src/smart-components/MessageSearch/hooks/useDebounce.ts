import { useEffect, useState } from 'react'

// thanks https://usehooks-ts.com/react-hook/use-debounce
// should move to generic hooks if we have to reuse it later
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer)
    };
  }, [value, delay]);

  return debouncedValue;
}


export default useDebounce;
