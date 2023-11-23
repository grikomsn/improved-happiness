import imageAvatar from "@/app/apple-icon.png";
import { defaultMetadata } from "@/site.config";
import Image from "next/image";

interface Props {
  colorScheme: "light" | "dark";
}

export function BrandMark({ colorScheme }: Props) {
  return (
    <Image
      src={imageAvatar}
      alt={defaultMetadata.title}
      className="mr-2 h-4 w-4"
    />
  );
}
