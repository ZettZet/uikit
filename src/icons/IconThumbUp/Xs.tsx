import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M1 5h2v6H1V5zM4 9.953C4 10.583 4.346 11 5 11h3.639c.694 0 .988-.551 1.111-.833l1.083-2.5C11 7.25 11 6.833 11 6.902V6s-.167-1-1-1H7.25l.39-2.71c.06-.29.016-.634-.14-.79L6.833 1 4.28 4.803c-.29.364-.28.52-.28.937v4.213z" />
    </svg>
  );
}

export default Xs;
