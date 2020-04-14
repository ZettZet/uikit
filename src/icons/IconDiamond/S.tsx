import * as React from 'react';

function S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M13 6h-3l1.6-4H4L0 5.9l7.266 8.265L4 6h4v9l8-9.1-3.752-3.658L13 6z" />
    </svg>
  );
}

export default S;
