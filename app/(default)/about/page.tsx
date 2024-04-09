import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Polaroid } from "@/components/polaroid";
import { getReader } from "@/server/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Myself",
};

export default async function Page() {
  const data = await getReader().singletons.about.readOrThrow();
  const document = await data.content();
  const renderers = getBasicRenderers();
  return (
    <ContainerSection
      className="relative"
      enableNavShadow
    >
      <div
        className={clsx(
          "mb-8 w-[300px] max-w-full rotate-3",
          "md:float-right md:-mr-16 md:w-[300px]",
          //
        )}
      >
        <Polaroid />
      </div>
      <article className="prose prose-primary text-balance pb-20 dark:prose-invert [&_a:hover]:underline [&_a]:no-underline">
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </article>
    </ContainerSection>
  );
}
