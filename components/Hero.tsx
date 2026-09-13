export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center px-4 py-12 md:px-12 md:py-24 scroll-mt-16"
    >
      <header className="mb-12 flex justify-between items-end border-b-2 border-black pb-4">
        <p className="font-mono text-sm uppercase tracking-widest">Index_01</p>
        <div
          className="font-mono text-sm uppercase tracking-widest flex items-center gap-2"
          aria-label="Status: Available for hire"
        >
          <span>Status</span>
          <span className="size-3 bg-green-500 rounded-full animate-pulse border border-black" />
          <span>Available</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Haupt-Informationen */}
        <div className="lg:col-span-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Sebastian Götze.
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight flex items-center gap-4">
            <span className="w-12 h-1 bg-black hidden sm:block" />
            Junior Frontend Web Developer
          </div>
        </div>

        {/* Kurzbeschreibung & Tech-Stack Box */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-2">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Ich übersetze komplexe Daten und Logik in intuitive, moderne
            Web-Interfaces. Als Frontend Developer baue ich Applikationen von
            der API-Anbindung bis zum interaktiven Dashboard.
          </p>

          <div className="font-mono text-xs sm:text-sm uppercase p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col gap-2">
            <div className="flex justify-between border-b border-neutral-300 pb-2">
              <span className="font-bold">Core Stack</span>
              <span className="text-right">React / Next.js / TS</span>
            </div>
            <div className="flex justify-between border-b border-neutral-300 pb-2">
              <span className="font-bold">Styling</span>
              <span>TailwindCSS</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Base</span>
              <span>Germany (Remote)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
