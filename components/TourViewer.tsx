"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { withBasePath } from "@/lib/basePath";

// Tipos mínimos de la API de Pannellum que usamos (la librería no trae
// tipados propios ni un paquete @types).
interface PannellumViewer {
  destroy: () => void;
}
interface PannellumConfig {
  default: { firstScene: string; sceneFadeDuration: number; autoLoad: boolean };
  scenes: Record<
    string,
    {
      type: "equirectangular";
      panorama: string;
      hfov?: number;
      pitch?: number;
      yaw?: number;
      hotSpots: Array<{
        pitch: number;
        yaw: number;
        type: "scene";
        text: string;
        sceneId: string;
      }>;
    }
  >;
}
declare global {
  interface Window {
    pannellum?: { viewer: (id: string, config: PannellumConfig) => PannellumViewer };
  }
}

/**
 * DEMO del recorrido virtual 360° pedido por el usuario. Las dos escenas son
 * fotografías panorámicas REALES de terceros con licencia CC BY (no son el
 * INCO — ver crédito abajo). Sirven para probar la interacción de
 * "caminar entre ambientes" antes de invertir en fotografiar el instituto.
 */
const config: PannellumConfig = {
  default: { firstScene: "exterior", sceneFadeDuration: 600, autoLoad: true },
  scenes: {
    exterior: {
      type: "equirectangular",
      panorama: withBasePath("/demo-tour/scene1.jpg"),
      hfov: 110,
      pitch: 0,
      yaw: 0,
      hotSpots: [
        { pitch: -2, yaw: 35, type: "scene", text: "Entrar al aula", sceneId: "aula" },
      ],
    },
    aula: {
      type: "equirectangular",
      panorama: withBasePath("/demo-tour/scene2.jpg"),
      hfov: 120,
      pitch: 0,
      yaw: 0,
      hotSpots: [
        { pitch: -5, yaw: 200, type: "scene", text: "Volver afuera", sceneId: "exterior" },
      ],
    },
  },
};

export default function TourViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PannellumViewer | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.pannellum) return;
    containerRef.current.id = "tour-viewer-canvas";
    viewerRef.current = window.pannellum.viewer("tour-viewer-canvas", config);
    return () => viewerRef.current?.destroy();
  }, [scriptReady]);

  return (
    <div>
      <link rel="stylesheet" href={withBasePath("/vendor/pannellum/pannellum.css")} />
      <Script
        src={withBasePath("/vendor/pannellum/pannellum.js")}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div
        ref={containerRef}
        className="aspect-video w-full overflow-hidden rounded-xl bg-ink shadow-card"
        role="application"
        aria-label="Recorrido virtual 360° de demostración: arrastra para mirar alrededor y haz clic en los círculos para moverte entre ambientes"
      />
      <p className="mt-3 text-xs text-ink-soft">
        Fotos de demostración (no son el INCO): panorama exterior de la Sede de ESO — © European Southern
        Observatory, CC BY 4.0; panorama de aula — © Biswarup Ganguly, CC BY 3.0.
      </p>
    </div>
  );
}
