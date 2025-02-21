import {SVGProps} from "react";

export const Arrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="65"
      height="27"
      viewBox="0 0 65 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.47098 17.6374C19.3521 22.7573 30.5631 24.6396 45.8598 15.6492C49.5724 13.4672 55.8592 10.4081 58.023 6.36284C59.252 4.06509 62.0127 2.90896 57.9724 2.76138C54.6452 2.63984 49.7374 2.23031 46.5648 3.35954C45.419 3.76737 57.7256 2.83126 61.4562 2.38696C66.2256 1.81894 56.3214 21.1832 54.7857 24.5109"
        stroke="#BFBFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
