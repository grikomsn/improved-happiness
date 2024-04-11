import { customMetadata } from "@/site.config";

export const routes = [
  { children: "Home", href: "/" },
  { children: "About", href: "/about" },
  { children: "Articles", href: "/articles" },
  { children: "Projects", href: "/projects" },
  { children: "Schedule", href: customMetadata.scheduleUrl },
];
