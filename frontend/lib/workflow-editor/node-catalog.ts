import type { CategoryDefinition, NodeDefinition } from "./types";

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: "input",
    label: "Input",
    nodes: [
      {
        id: "input-local-file",
        category: "input",
        label: "Local File",
        description: "Read a file from disk",
        icon: "file",
      },
      {
        id: "input-cloud-storage",
        category: "input",
        label: "Cloud Storage",
        description: "Fetch a file from cloud storage",
        icon: "cloud",
      },
      {
        id: "input-http-endpoint",
        category: "input",
        label: "HTTP Endpoint",
        description: "Receive a file over HTTP",
        icon: "globe",
      },
    ],
  },
  {
    id: "transform",
    label: "Transform",
    nodes: [
      {
        id: "transform-compress",
        category: "transform",
        label: "Compress",
        description: "Zip or shrink the file",
        icon: "archive",
      },
      {
        id: "transform-encrypt",
        category: "transform",
        label: "Encrypt",
        description: "Encrypt the file contents",
        icon: "lock",
      },
      {
        id: "transform-convert-format",
        category: "transform",
        label: "Convert Format",
        description: "Convert to a different file format",
        icon: "refresh-cw",
      },
    ],
  },
  {
    id: "output",
    label: "Output",
    nodes: [
      {
        id: "output-local-folder",
        category: "output",
        label: "Local Folder",
        description: "Write the file to disk",
        icon: "folder-output",
      },
      {
        id: "output-cloud-storage",
        category: "output",
        label: "Cloud Storage",
        description: "Upload the file to cloud storage",
        icon: "upload-cloud",
      },
      {
        id: "output-webhook",
        category: "output",
        label: "Webhook",
        description: "Send the file to a webhook",
        icon: "webhook",
      },
    ],
  },
];

export function findNodeDefinition(id: string): NodeDefinition | undefined {
  return CATEGORIES.flatMap((category) => category.nodes).find(
    (node) => node.id === id,
  );
}
