import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { NotationProps } from '../models/types/notation-props';

const Notation = ({ children, config }: NotationProps): JSX.Element => {
    /** Reference to the element to annotate */
    const ref = useRef<HTMLDivElement>(null);

    /** Annotates when element is in view */
    useEffect(() => {
        const notation = annotate(ref.current, config);
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => notation.show(), 1500);
            } else {
                notation.hide();
            }
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [children, config]);

    return <span ref={ref}>{children}</span>;
};

export default Notation;
