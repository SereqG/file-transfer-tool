import {
  Archive,
  Cloud,
  File,
  FolderOutput,
  Globe,
  Lock,
  RefreshCw,
  UploadCloud,
  Webhook,
  type LucideIcon,
} from "lucide-react";

import type { NodeIconId } from "@/lib/workflow-editor/types";

export const NODE_ICONS: Record<NodeIconId, LucideIcon> = {
  file: File,
  cloud: Cloud,
  globe: Globe,
  archive: Archive,
  lock: Lock,
  "refresh-cw": RefreshCw,
  "folder-output": FolderOutput,
  "upload-cloud": UploadCloud,
  webhook: Webhook,
};
