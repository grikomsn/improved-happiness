import { CohostIcon } from "@/components/icons/cohost";
import { MastodonIcon } from "@/components/icons/mastodon";
import { MatrixIcon } from "@/components/icons/matrix";
import { XIcon } from "@/components/icons/x";
import { customMetadata } from "@/site.config";
import { CloudIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export const links = [
  { href: customMetadata.blueskyUrl, Icon: CloudIcon, label: "Bluesky" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.mastodonUrl, Icon: MastodonIcon, label: "Mastodon" },
];

export const wholeLinks = [
  { href: customMetadata.blueskyUrl, Icon: CloudIcon, label: "Bluesky" },
  { href: customMetadata.cohostUrl, Icon: CohostIcon, label: "Cohost" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.mastodonUrl, Icon: MastodonIcon, label: "Mastodon" },
  { href: customMetadata.matrixUrl, Icon: MatrixIcon, label: "Matrix" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
];
