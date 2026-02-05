import { stripeLogo } from "../logos";

export function LogoCloud() {
  const logos = [
    "StudioCo",
    "Northside Consulting",
    "BrightLabs",
    "Vertex",
    "Oak & Co",
    "ClearPath",
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
