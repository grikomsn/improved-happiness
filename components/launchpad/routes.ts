import { customMetadata } from "@/site.config";
import {
  BookOpenTextIcon,
  CalendarIcon,
  Code2Icon,
  HomeIcon,
  LibrarySquareIcon,
  LinkIcon,
  SmileIcon,
  SwordsIcon,
} from "lucide-react";

export const routes = [
  { Icon: HomeIcon, children: "Home", href: "/" },
  { Icon: SmileIcon, children: "About", href: "/about" },
  { Icon: BookOpenTextIcon, children: "Articles", href: "/articles" },
  { Icon: Code2Icon, children: "Projects", href: "/projects" },
  { Icon: CalendarIcon, children: "Schedule", href: customMetadata.scheduleUrl },
];

export const routeGroups = [
  {
    heading: "Navigation",
    items: [
      { Icon: HomeIcon, children: "Home", href: "/" },
      { Icon: SmileIcon, children: "About", href: "/about" },
      { Icon: BookOpenTextIcon, children: "Articles", href: "/articles" },
      { Icon: Code2Icon, children: "Projects", href: "/projects" },
      { Icon: CalendarIcon, children: "Schedule", href: customMetadata.scheduleUrl },
    ],
  },
  {
    heading: "Other",
    items: [
      { Icon: LinkIcon, children: "Links", href: "/links" },
      { Icon: SwordsIcon, children: "Uses", href: "/uses" },
      { Icon: LibrarySquareIcon, children: "Keystatic Admin", href: "/keystatic" },
      //
    ],
  },
];
