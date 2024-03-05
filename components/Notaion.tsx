import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { NotationProps } from '../models/types/notation-props';

const Notation = ({ children, config }: NotationProps): JSX.Element => {
    /** Reference to the element to annotate */
    const ref = useRef<HTMLSpanElement>(null);

    /** Annotates when element is in view */
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    annotate(entry.target as HTMLElement, config).show();
                }, 750);
            }
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <span ref={ref}>{children}</span>;
};

export default Notation;