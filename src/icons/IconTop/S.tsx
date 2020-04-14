import * as React from 'react';

function S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M7.211 5.617L3.914 8.914 2.5 7.5l5.711-5.711 5.712 5.71-1.415 1.415-3.297-3.297v8.594h-2V5.617z" />
    </svg>
  );
}

export default S;
