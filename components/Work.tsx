import WorkStep from "./WorkStep";
import WorkButtons from "./WorkButtons";
import ProjectVisual from "./ProjectVisual";

export default function Work() {
  return (
    <section id="work">
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
                description="Wissenschaftliche Daten zur Astronomie (z.B. von NASA APIs)
                  sind oft in trockenen, schwer navigierbaren Datenbanken
                  versteckt. Es fehlte eine Plattform, die komplexe Parameter
                  visuell und interaktiv aufbereitet."
              />
              <WorkStep
                variant="orbit"
                step="02. Die Lösung"
                description="Entwicklung einer interaktiven Web-App, die Live-Daten (NASA
                  APOD) mit einer tiefgehenden Planetendatenbank verknüpft.
                  Features umfassen dynamische Daten-Renderings basierend auf
                  Nutzer-Auswahl und interaktive Tools."
              />
              <WorkStep
                variant="orbit"
                step="03. Tech-Fokus"
                description="API-Integration (NASA), Complex State Management, Responsive
                  UI/UX Design für hohe Informationsdichte."
              />
            </div>
          </div>

          <WorkButtons variant="orbit" />
        </div>

        {/* Project Visual */}
        <ProjectVisual
          variant="orbit"
          href="https://orbit-two-sigma.vercel.app/"
          imageSrc="orbit-screenshot.png"
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
          imageSrc="linkbloom-screenshot.png"
          imageAlt="Vorschau des Linkbloom Dashboards"
          title="Linkbloom"
        />

        {/* Project Details */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs uppercase mb-4 tracking-widest bg-linkbloom-badge text-white w-fit px-2 py-1">
              2026 // SaaS & Auth-Flow
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 text-linkbloom-shadow">
              Linkbloom
            </h3>

            <div className="space-y-8">
              <WorkStep
                variant="linkbloom"
                step="01. Das Problem"
                description='Die meisten "Link-in-Bio"-Tools bieten im kostenlosen Tier zu
                  wenig Personalisierung. Zudem ist der Verwaltungsbereich
                  (Dashboard) für technisch unerfahrene Nutzer oft überladen und
                  verwirrend.'
              />
              <WorkStep
                variant="linkbloom"
                step="02. Die Lösung"
                description='Ein fokussiertes Dashboard mit nahtlosem
                  Authentifizierungs-Flow. Der Kern ist eine
                  "Live-Preview"-Architektur: Änderungen an Design oder Links
                  werden sofort visualisiert.'
              />
              <WorkStep
                variant="linkbloom"
                step="03. Tech-Fokus"
                description="User Authentication (JWT/Session), Global State Management,
                  Form Validation, CRUD-Operationen."
              />
            </div>
          </div>

          <WorkButtons variant="linkbloom" />
        </div>
      </article>
    </section>
  );
}
