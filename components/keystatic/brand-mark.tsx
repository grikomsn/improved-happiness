import { defaultMetadata } from "@/site.config";

interface Props {
  colorScheme: "light" | "dark";
}

export function BrandMark({ colorScheme }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${defaultMetadata.url}/favicon.ico`}
      alt={defaultMetadata.title}
      className="mr-2 h-4 w-4"
    />
  );
}
