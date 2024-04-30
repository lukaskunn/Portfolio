// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { list } from "@vercel/blob";
import englishContent from "../../../content/en.json";
import portugueseContent from "../../../content/pt.json";

//TODO: Fix any type
export default async function handler(req: any, res: any) {
  const projectInPortuguese = [
    ...portugueseContent.works.backgroundProjects.projects,
    ...portugueseContent.works.personalProjects.projects,
  ].find((project: any) => project.projectId === req.query.projectId);

  const projectInEnglish = [
    ...englishContent.works.backgroundProjects.projects,
    ...englishContent.works.personalProjects.projects,
  ].find((project: any) => project.projectId === req.query.projectId);

  if (!projectInPortuguese || !projectInEnglish) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  const projects = {
    pt: projectInPortuguese,
    en: projectInEnglish,
  };

  res.status(200).json(projects);
}
