import {useState, useEffect, useRef} from 'react'

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1,
     rootMargin = '0px' } = options;

    const [isRevealed, setIsRevealed] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIsRevealed(true);
                observer.unobserve(element);
            }
        }, 
        {
            threshold,
            rootMargin
        }
    );
        
        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);
    
    return { ref, isRevealed };
};