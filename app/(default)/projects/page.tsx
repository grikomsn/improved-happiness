import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { GitHubIcon } from "@/components/icons/github";
import { getProjects } from "@/server/keystatic";
import { trimHttp } from "@/utils/string";
import { cn } from "@/utils/ui";
import { BracesIcon, LinkIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've made trying to put my dent in the universe.",
};

export default async function Page() {
  const projects = await getProjects();
  return (
    <ContainerSection className="relative space-y-4">
      <h1 className="text-balance text-4xl font-bold">Things I&apos;ve made trying to put my dent in the universe.</h1>
      <p className="space-y-4 text-balance text-zinc-700 dark:text-zinc-300">
        I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of.
        Many of them are open-source, so if you see something that piques your interest, check out the code and
        contribute if you have ideas for how it can be improved.
      </p>
      <p className="!mb-16">
        View more projects on my{" "}
        <AdaptiveLink
          className="text-primary-600 hover:underline dark:text-primary-500"
          href="https://nbr.st/resume"
        >
          resume page
        </AdaptiveLink>
        .
      </p>
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {projects.map((project, i) => {
          function ProjectIcon() {
            if (project.iconUrl)
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={project.name}
                  src={project.iconUrl}
                />
              );
            if (project.link.value?.href.includes("github.com")) return <GitHubIcon />;
            return <BracesIcon />;
          }
          return (
            <li
              className={cn(
                "group relative text-sm",
                "flex-col items-start sm:flex",
                "before:absolute before:-z-10 before:transition-[opacity,inset]",
                "before:rounded-lg before:bg-zinc-500/10 dark:before:bg-zinc-500/10",
                "before:opacity-0 hover:before:opacity-100",
                "before:-inset-1 hover:before:-inset-4",
              )}
              key={i}
            >
              <div
                className={cn(
                  "mb-2 rounded-full border border-zinc-500/25 bg-zinc-500/5 max-sm:ml-2",
                  "[&>*]:m-1 [&>*]:h-8 [&>*]:w-8 [&>*]:rounded-full [&>*]:object-cover",
                  "[&>svg]:p-1",
                  "float-right sm:float-none",
                )}
              >
                <ProjectIcon />
              </div>
              <div className="mb-2 text-lg font-bold">{project.name}</div>
              <div className="mb-2 line-clamp-2 h-auto text-balance text-zinc-700 dark:text-zinc-300 sm:h-16">
                {project.description}
              </div>
              <div className="mb-4 text-zinc-500">{project.subtitle}</div>
              {project.link.value && (
                <AdaptiveLink
                  className={cn(
                    "flex items-center gap-x-2 hover:underline",
                    "text-primary-600 dark:text-primary-500",
                    "before:absolute before:-inset-4",
                  )}
                  href={project.link.value.href}
                >
                  <LinkIcon className="h-3 w-3" />
                  <span className="line-clamp-1">{project.link.value.label || trimHttp(project.link.value.href)}</span>
                </AdaptiveLink>
              )}
            </li>
          );
        })}
      </ul>
    </ContainerSection>
  );
}
