import { FictionalLogos } from "../logos";

export function LogoCloud() {
  const logos = [
    {
      name: "StudioCo",
      svg: FictionalLogos[0],
    },
    {
      name: "Northside Consulting",
      svg: FictionalLogos[1],
    },
    {
      name: "BrightLabs",
      svg: FictionalLogos[2],
    },
    {
      name: "Vertex",
      svg: FictionalLogos[3],
    },
    {
      name: "Oak & Co",
      svg: FictionalLogos[4],
    },
    {
      name: "ClearPath",
      svg: FictionalLogos[5],
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors opacity-70 hover:opacity-100"
            >
              <div className="flex items-center justify-center">{logo.svg}</div>
              <span className="text-xs font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
