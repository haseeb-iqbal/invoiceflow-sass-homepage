"use client";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
  },
);

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-12 pb-10 sm:px-6 lg:px-8 flex"
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16 z-1">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground ">
            Get paid faster with smarter invoicing
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-10 leading-relaxed">
            Create invoices, track payments, and understand your cash flow in
            real time. InvoiceFlow helps small businesses stay organised and get
            paid on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="rounded-full h-12 bg-primary  text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 border-2 border-primary text-primary hover:bg-primary/3 hover:text-primary font-semibold transition-all bg-transparent"
            >
              Watch demo
            </Button>
          </div>
        </div>
        <div className="w-full max-w-2xl h-[400px] lg:h-[500px]">
          <World
            key={theme}
            globeConfig={{
              pointSize: 4,
              globeColor: theme === "dark" ? "#062056" : "#85beff",
              showAtmosphere: true,
              atmosphereColor: theme === "dark" ? "#FFFFFF" : "#7dd3fc",
              atmosphereAltitude: 0.1,
              emissive: theme === "dark" ? "#062056" : "#e0f2fe",
              emissiveIntensity: theme === "dark" ? 0.1 : 0.25,
              shininess: 0.9,
              polygonColor:
                theme === "dark" ? "rgba(255,255,255,0.7)" : "#000000",
              ambientLight: theme === "dark" ? "#38bdf8" : "#7dd3fc",
              directionalLeftLight: theme === "dark" ? "#ffffff" : "#ffffff",
              directionalTopLight: theme === "dark" ? "#ffffff" : "#ffffff",
              pointLight: theme === "dark" ? "#ffffff" : "#38bdf8",
              arcTime: 2000,
              arcLength: 0.6,
              rings: 3,
              maxRings: 3,
              initialPosition: { lat: 22.3193, lng: 114.1694 },
              autoRotate: true,
              autoRotateSpeed: 0.2,
            }}
            data={[
              {
                order: 1,
                startLat: 40.7128,
                startLng: -74.006,
                endLat: 51.5074,
                endLng: -0.1278,
                arcAlt: 0.15, // Reduced from 0.3
                color: theme === "dark" ? "#3b82f6" : "#3b82f6",
              },
              {
                order: 2,
                startLat: 51.5074,
                startLng: -0.1278,
                endLat: 35.6762,
                endLng: 139.6503,
                arcAlt: 0.25, // Reduced from 0.5
                color: theme === "dark" ? "#06b6d4" : "#06b6d4",
              },
              {
                order: 3,
                startLat: 37.7749,
                startLng: -122.4194,
                endLat: -33.8688,
                endLng: 151.2093,
                arcAlt: 0.35, // Reduced from 0.7
                color: theme === "dark" ? "#ec4899" : "#f472b6",
              },
              {
                order: 4,
                startLat: 1.3521,
                startLng: 103.8198,
                endLat: 52.52,
                endLng: 13.405,
                arcAlt: 0.2, // Reduced from 0.4
                color: theme === "dark" ? "#ec4899" : "#f472b6",
              },
              {
                order: 5,
                startLat: 35.6762,
                startLng: 139.6503,
                endLat: 25.2048,
                endLng: 55.2708,
                arcAlt: 0.3, // Reduced from 0.6
                color: theme === "dark" ? "#8b5cf6" : "#a78bfa",
              },
              {
                order: 6,
                startLat: -23.5505,
                startLng: -46.6333,
                endLat: -33.9249,
                endLng: 18.4241,
                arcAlt: 0.25, // Reduced from 0.5
                color: theme === "dark" ? "#10b981" : "#34d399",
              },
              {
                order: 7,
                startLat: 19.076,
                startLng: 72.8777,
                endLat: -37.8136,
                endLng: 144.9631,
                arcAlt: 0.4, // Reduced from 0.8
                color: theme === "dark" ? "#f59e0b" : "#fbbf24",
              },
              {
                order: 8,
                startLat: 43.6532,
                startLng: -79.3832,
                endLat: 48.8566,
                endLng: 2.3522,
                arcAlt: 0.2, // Reduced from 0.4
                color: theme === "dark" ? "#06b6d4" : "#06b6d4",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
