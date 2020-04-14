import * as React from 'react';

function S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M8 11.448L12.326 14l-1.148-4.81L15 5.954l-5.033-.418L8 1 6.033 5.536 1 5.954 4.822 9.19 3.674 14 8 11.448z" />
    </svg>
  );
}

export default S;
