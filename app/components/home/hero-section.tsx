import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { World } from "@/components/ui/globe";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-12 pb-10 sm:px-6 lg:px-8 flex"
    >
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={40}
        radius={7}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-800"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.05}
        speedMax={0.2}
        speedScale={1}
      />
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
            globeConfig={{
              pointSize: 4,
              globeColor: "#062056",
              showAtmosphere: true,
              atmosphereColor: "#FFFFFF",
              atmosphereAltitude: 0.1,
              emissive: "#062056",
              emissiveIntensity: 0.1,
              shininess: 0.9,
              polygonColor: "rgba(255,255,255,0.7)",
              ambientLight: "#38bdf8",
              directionalLeftLight: "#ffffff",
              directionalTopLight: "#ffffff",
              pointLight: "#ffffff",
              arcTime: 2000,
              arcLength: 0.9,
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
                arcAlt: 0.3,
                color: "#3b82f6",
              },
              {
                order: 2,
                startLat: 51.5074,
                startLng: -0.1278,
                endLat: 35.6762,
                endLng: 139.6503,
                arcAlt: 0.5,
                color: "#06b6d4",
              },
              {
                order: 3,
                startLat: 37.7749,
                startLng: -122.4194,
                endLat: -33.8688,
                endLng: 151.2093,
                arcAlt: 0.7,
                color: "#ec4899",
              },
              {
                order: 4,
                startLat: 1.3521,
                startLng: 103.8198,
                endLat: 52.52,
                endLng: 13.405,
                arcAlt: 0.4,
                color: "#ec4899",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
