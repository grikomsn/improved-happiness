import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Polaroid } from "@/components/polaroid";
import { getReader } from "@/server/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Myself",
};

export default async function Page() {
  const data = await getReader().singletons.about.readOrThrow();
  const document = await data.content();
  const renderers = getBasicRenderers();
  return (
    <ContainerSection enableNavShadow>
      <Polaroid className="mb-16 lg:float-right lg:mb-8 lg:ml-8" />
      <article
        className="prose prose-primary text-balance pb-20 dark:prose-invert [&_a:hover]:underline [&_a]:no-underline"
        data-stagger-children
      >
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </article>
    </ContainerSection>
  );
}
