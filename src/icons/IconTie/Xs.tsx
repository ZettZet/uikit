import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path
        d="M7.5 0h-4l1.1 2.2-2.1 6.3 3 2.5 3-2.5-2.1-6.3L7.5 0z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Xs;
