import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    includeAssets: ["icon.svg"],
    manifest: {
      name: "FDS Logbook", short_name: "FDS Logbook", description: "Private, device-local mileage, fuel and incident logbook",
      theme_color: "#f97316", background_color: "#0f172a", display: "standalone", start_url: "./", scope: "./",
      icons: [{ src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }]
    }
  })]
});