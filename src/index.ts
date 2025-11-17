import { type PluginContext } from "@lmstudio/sdk";
import { configSchematics } from "./config";
import { preprocess } from "./promptPreprocessor";

export async function main(context: PluginContext) {
    // Register the configuration schematics.
    context.withConfigSchematics(configSchematics);
    // Register the promptPreprocessor.
    context.withPromptPreprocessor(preprocess);
}
