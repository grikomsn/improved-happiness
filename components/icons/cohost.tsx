import { ComponentProps } from "react";

export function CohostIcon(props: ComponentProps<"svg">) {
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
      <path d="M14 14a3 2 0 1 0 6 0a3 2 0 1 0-6 0" />
      <path d="M4.526 17.666c-1.133-.772-1.897-1.924-2.291-3.456c-.398-1.54-.29-2.937.32-4.19c.61-1.255 1.59-2.34 2.938-3.254c1.348-.914 2.93-1.625 4.749-2.132c1.81-.504 3.516-.708 5.12-.61c1.608.1 2.979.537 4.112 1.31s1.897 1.924 2.291 3.456c.398 1.541.29 2.938-.32 4.192c-.61 1.253-1.59 2.337-2.938 3.252c-1.348.915-2.93 1.626-4.749 2.133c-1.81.503-3.516.707-5.12.61c-1.608-.102-2.979-.538-4.112-1.31z" />
      <path d="M11 12.508C10.47 12.192 9.77 12 9 12c-1.657 0-3 .895-3 2s1.343 2 3 2c.767 0 1.467-.192 2-.508" />
    </svg>
  );
}
