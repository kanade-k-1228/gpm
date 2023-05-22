import { gpm } from "./gpm/gpm.ts";
import { init } from "./init/init.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

await new Command()
  .name("gpm")
  .version("v0.0.0")
  .description("General purpose Project Manager")

  .action(() => gpm())

  .command("init", "Initialize project.")
  .arguments("[template]")
  .action((opt, ...args) => init())

  .command("update", "Update remote info.")
  .action(() => {})

  .command("add", "Add package to project.")
  .option("-l,--local", "Local package.")
  .option("-r,--repo", "Specify repository")
  .arguments("<...packages>")
  .action((opt, ...args) => console.log("Add package: ", opt, args))

  .command("install", "Install dependence packages.")
  .action((opt, ...args) => console.log("Install", opt, ...args))

  .parse(Deno.args);
