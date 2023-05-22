import { parse } from "https://deno.land/std@0.184.0/yaml/mod.ts";
import { Project } from "../type.ts";

export const gpm = () => {
  const projectFile = Deno.readTextFileSync("project.yaml");
  const project = parse(projectFile) as Project;
  Object.entries(project.packages).forEach(([k, v]) =>
    console.log(`  ${k}: ${v}`)
  );
};
