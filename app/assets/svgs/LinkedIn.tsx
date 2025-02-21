import {SVGProps} from "react";

export const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.5" cy="12.25" r="12" fill="white" />
      <rect
        x="6.9875"
        y="6.7375"
        width="11.025"
        height="11.025"
        rx="2.5125"
        stroke="#1C1C1C"
        strokeWidth="0.975"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 15.25H14.2672V13.1502C14.2672 12.5745 14.0484 12.2528 13.5928 12.2528C13.0971 12.2528 12.8381 12.5876 12.8381 13.1502V15.25H11.65V11.25H12.8381V11.7888C12.8381 11.7888 13.1953 11.1278 14.0441 11.1278C14.8926 11.1278 15.5 11.6459 15.5 12.7174V15.25ZM10.2326 10.7262C9.82793 10.7262 9.5 10.3957 9.5 9.98812C9.5 9.5805 9.82793 9.25 10.2326 9.25C10.6373 9.25 10.965 9.5805 10.965 9.98812C10.965 10.3957 10.6373 10.7262 10.2326 10.7262ZM9.61914 15.25H10.858V11.25H9.61914V15.25Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};
