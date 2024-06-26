import { ComponentProps } from "react";

export function MatrixIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0h24v24H0z"
        stroke="none"
      />
      <path d="M4 3H3v18h1M20 21h1V3h-1M7 9v6M12 15v-3.5a2.5 2.5 0 10-5 0v.5M17 15v-3.5a2.5 2.5 0 10-5 0v.5" />
    </svg>
  );
}
