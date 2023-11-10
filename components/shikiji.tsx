import "server-only";

import { ComponentProps } from "react";
import { codeToHtml } from "shikiji/index.mjs";

type Props = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language: string;
};

export async function Shikiji({ code, language, ...props }: Props) {
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

// https://github.com/shikijs/shiki/issues/33#issuecomment-1677313632
