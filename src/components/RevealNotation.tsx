import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

interface RevealNotationProps {
  children: React.ReactNode;
}

export const RevealNotation = ({ children }: RevealNotationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const annotation = annotate(ref.current, { type: 'underline', color: '#FF6347', padding: 1 });
        annotation.show();
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isInView]);

  return <span ref={ref}>{children}</span>;
};
