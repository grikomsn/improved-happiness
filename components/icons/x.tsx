import { ComponentProps } from "react";

export function XIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.025 3h2.147l-4.69 5.295L15 15.5h-4.32l-3.383-4.37-3.872 4.37H1.277l5.016-5.664L1 3h4.43l3.058 3.994L12.025 3zm-.752 11.231h1.19L4.783 4.203H3.507l7.766 10.028z" />
    </svg>
  );
}
