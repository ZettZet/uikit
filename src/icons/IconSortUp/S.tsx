import * as React from 'react';

function S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M6 5H2V3h4v2zM2 7v2h8V7H2zM2 13h12v-2H2v2z" />
    </svg>
  );
}

export default S;
