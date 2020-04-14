import * as React from 'react';

function M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M6.75 4.5L12 0l5.25 4.5H13.5v6h6V6.75L24 12l-4.5 5.25V13.5h-6v6h3.75L12 24l-5.25-4.5h3.75v-6h-6v3.75L0 12l4.5-5.25v3.75h6v-6H6.75z" />
    </svg>
  );
}

export default M;
