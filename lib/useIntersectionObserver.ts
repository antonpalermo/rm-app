import { MutableRefObject, useEffect } from 'react'

export default function useIntersectionObserver<T extends Element>(
  ref: MutableRefObject<T | null>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (ref.current) observer.observe(ref.current)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [callback, options, ref])
}
