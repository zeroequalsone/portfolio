import WorkStep from "./WorkStep";
import WorkButtons from "./WorkButtons";
import ProjectVisual from "./ProjectVisual";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-12">
      {/* Section Header */}
      <div className="px-4 py-6 md:px-12 bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Index_02 // Selected Works
        </h2>
      </div>

      {/* PROJECT: ORBIT */}
      <article className="grid grid-cols-1 lg:grid-cols-2 text-white">
        {/* Project Details */}
        <div className="p-6 md:p-12 flex flex-col justify-between bg-orbit-background">
          <div>
            <div className="font-mono text-xs uppercase mb-4 tracking-widest bg-orbit-badge w-fit px-2 py-1">
              2026 // Data Visualization & API
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8">
              Orbit
            </h3>

            <div className="space-y-8">
              <WorkStep
                variant="orbit"
                step="01. Das Problem"
                description="Bestehende Astronomie-Plattformen wirken oft technisch-trocken und visuell wenig einladend. Es fehlte eine Umsetzung, die wissenschaftliche Daten in ein stimmiges, dem Thema angemessenes Design einbettet."
              />
              <WorkStep
                variant="orbit"
                step="02. Die Lösung"
                description="Eine interaktive Web-App mit zwei Kernbereichen: tagesaktuelle Live-Daten der NASA (Astronomy Picture of the Day) sowie eine selbst zusammengestellte, umfangreiche Datenstruktur zu den Objekten unseres Sonnensystems. Features umfassen dynamische Daten-Renderings basierend auf Nutzer-Auswahl und interaktive Tools."
              />
              <WorkStep
                variant="orbit"
                step="03. Tech-Fokus"
                description="API-Integration mit eigener Caching-Strategie (NASA APOD), umfangreiche selbst kuratierte TypeScript-Datensätze, Responsive UI/UX Design für hohe Informationsdichte."
              />
            </div>
          </div>

          <WorkButtons variant="orbit" />
        </div>

        {/* Project Visual */}
        <ProjectVisual
          variant="orbit"
          href="https://orbit-two-sigma.vercel.app/"
          imageSrc="orbit-screenshot.webp"
          imageAlt="Vorschau der Orbit Astronomie Web-App"
          title="Orbit"
          priority={true}
        />
      </article>

      {/* PROJECT: LINKBLOOM */}
      <article className="grid grid-cols-1 lg:grid-cols-2 bg-linkbloom-background text-linkbloom-shadow">
        {/* Project Visual */}
        <ProjectVisual
          variant="linkbloom"
          href="https://linkbloom-two.vercel.app/"
          imageSrc="linkbloom-screenshot.webp"
          imageAlt="Vorschau des Linkbloom Dashboards"
          title="Linkbloom"
        />

        {/* Project Details */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs uppercase mb-4 tracking-widest bg-linkbloom-badge text-white w-fit px-2 py-1">
              2026 // Fullstack & Auth-Flow
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 text-linkbloom-shadow">
              Linkbloom
            </h3>

            <div className="space-y-8">
              <WorkStep
                variant="linkbloom"
                step="01. Das Problem"
                description="Ich wollte über reine Frontend-Projekte hinausgehen und ein fullstack Produkt mit echter Datenbank und Authentifizierung bauen. Gleichzeitig war mir wichtig: Anpassung sollte nicht hinter einer Bezahlschranke stecken, wie es bei vielen Link-in-Bio-Tools üblich ist."
              />
              <WorkStep
                variant="linkbloom"
                step="02. Die Lösung"
                description="Ein fokussiertes Dashboard mit vollständigem Authentifizierungs-Flow über Supabase. Design, Themes und Links lassen sich frei anpassen — komplett im kostenlosen Tier, ohne Premium-Wand. Änderungen werden sofort gespeichert und sind beim Aufruf der öffentlichen Profilseite live sichtbar."
              />
              <WorkStep
                variant="linkbloom"
                step="03. Tech-Fokus"
                description="User Authentication (Supabase Auth), State-Handling mit React Hooks, Form Validation, CRUD-Operationen"
              />
            </div>
          </div>

          <WorkButtons variant="linkbloom" />
        </div>
      </article>
    </section>
  );
}
