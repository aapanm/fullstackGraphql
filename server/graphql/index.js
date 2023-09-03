import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typesArray = loadFilesSync(join(__dirname, "./type"), {
  extensions: ["graphql"],
});

const types = mergeTypeDefs(typesArray);

export { types };
