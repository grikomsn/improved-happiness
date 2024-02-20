import "server-only";

import { ComponentProps } from "react";
import { codeToHtml } from "shiki";

type Props = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language: string;
};

export async function Shiki({ code, language, ...props }: Props) {
  const __html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: "light",
  });
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
