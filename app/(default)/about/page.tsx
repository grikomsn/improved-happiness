import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Polaroid } from "@/components/polaroid";
import { ProseArticle } from "@/components/prose-article";
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
    <ContainerSection className="relative">
      <div className="mb-8 ml-4 w-[300px] max-w-full rotate-3 max-md:mx-auto md:float-right">
        <Polaroid />
      </div>
      <ProseArticle className="text-balance">
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </ProseArticle>
    </ContainerSection>
  );
}
