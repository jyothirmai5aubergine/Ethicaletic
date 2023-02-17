import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default () => {

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
      chunkSizeWarningLimit: 1600,
    },
  });
};