import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { projects } from "./src/data/portfolio";

const siteUrl = "https://little-bbok.github.io";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const createProjectEntryHtml = (project: (typeof projects)[number]) => {
  const cleanUrl = `${siteUrl}/project/${project.id}`;
  const hashPath = `/#/project/${project.id}`;
  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${siteUrl}${project.image}`
    : undefined;
  const escapedTitle = escapeHtml(project.title);
  const escapedDescription = escapeHtml(project.summary);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapedTitle}</title>
    <meta name="description" content="${escapedDescription}" />
    <link rel="canonical" href="${cleanUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDescription}" />
    <meta property="og:url" content="${cleanUrl}" />
    ${imageUrl ? `<meta property="og:image" content="${escapeHtml(imageUrl)}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDescription}" />
    ${imageUrl ? `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />` : ""}
    <meta http-equiv="refresh" content="0; url=${hashPath}" />
    <script>window.location.replace(${JSON.stringify(hashPath)});</script>
  </head>
  <body>
    <p><a href="${hashPath}">${escapedTitle}</a></p>
  </body>
</html>
`;
};

const projectEntryPages = (): Plugin => ({
  name: "project-entry-pages",
  apply: "build" as const,
  generateBundle() {
    projects.forEach((project) => {
      this.emitFile({
        type: "asset",
        fileName: `project/${project.id}/index.html`,
        source: createProjectEntryHtml(project),
      });
    });
  },
});

export default defineConfig({
  plugins: [react(), projectEntryPages()],
});
