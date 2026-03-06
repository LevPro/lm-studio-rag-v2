import { createConfigSchematics } from "@lmstudio/sdk";

export const configSchematics = createConfigSchematics()
    .field(
        "directories",
        "string",
        {
            displayName: "Scan Directories",
            subtitle: "Comma-separated list of directories to scan for files. Use absolute paths.",
            placeholder: "/path/to/dir1,/path/to/dir2"
        },
        ""
    )
    .field(
        "exclude",
        "string",
        {
            displayName: "Exclude files and directories",
            subtitle: "Comma-separated list of word to exclude from the scan",
            placeholder: "file_name,dir_name"
        },
        ""
    )
    .field(
        "extensions",
        "string",
        {
            displayName: "File Extensions",
            subtitle: "Comma-separated list of file extensions to include (e.g., .txt,.md)",
            placeholder: ".txt,.md,.pdf"
        },
        ""
    )
    .field(
        "retrievalLimit",
        "numeric",
        {
            int: true,
            min: 1,
            displayName: "Retrieval Limit",
            subtitle: "When retrieval is triggered, this is the maximum number of chunks to return.",
            slider: { min: 1, max: 10, step: 1 },
        },
        3,
    )
    .field(
        "retrievalAffinityThreshold",
        "numeric",
        {
            min: 0.0,
            max: 1.0,
            displayName: "Retrieval Affinity Threshold",
            subtitle: "The minimum similarity score for a chunk to be considered relevant.",
            slider: { min: 0.0, max: 1.0, step: 0.01 },
        },
        0.5,
    )
    .field(
        "model",
        "string",
        {
            displayName: "Embed model",
            subtitle: "Embed model for file analysis",
            placeholder: ""
        },
        "nomic-ai/nomic-embed-text-v1.5-GGUF"
    )
    .field(
        "injectFullContentHeader",
        "string",
        {
            displayName: "Inject Full Content - Header",
            subtitle: "Template for header when injecting full file content. Use {filesCount} for number of files.",
        },
        "This is an Enriched Context Generation scenario.\\n\\nThe following content was found in the files provided by the user.\\n"
    )
    .field(
        "injectFullContentFileTemplate",
        "string",
        {
            displayName: "Inject Full Content - File Template",
            subtitle: "Template for each file. Use {fileName} for filename and {content} for file content.",
        },
        "\\n\\n** {fileName} full content **\\n\\n{content}\\n\\n** end of {fileName} **\\n\\n"
    )
    .field(
        "injectFullContentFooter",
        "string",
        {
            displayName: "Inject Full Content - Footer",
            subtitle: "Template for footer. Use {userQuery} for the user's question.",
        },
        "Based on the content above, please provide a response to the user query.\\n\\nUser query: {userQuery}"
    )
    .build();
