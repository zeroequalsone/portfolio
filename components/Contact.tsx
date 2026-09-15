import { LuGithub, LuLinkedin } from "react-icons/lu";
import ContactButton from "./ContactButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white p-6 md:p-12 scroll-mt-12"
    >
      <div>
        <h2 className="font-mono text-sm uppercase tracking-widest mb-12 border-b-2 pb-4 w-fit">
          Index_04 // Connect
        </h2>

        <a
          href="mailto:hi@sgoetze.de"
          className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter mb-8 leading-[0.85] block hover:text-neutral-300 w-fit"
        >
          Let's Talk!
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 border-t-2 pt-8">
        <p className="font-mono text-sm uppercase font-bold max-w-sm">
          Junior Frontend Developer // Suche ab sofort nach einer neuen
          Herausforderung (100% Remote). Bereit, Code zu shippen.
        </p>

        <div className="flex gap-4">
          <ContactButton
            name="Github"
            href="https://github.com/zeroequalsone"
            Icon={LuGithub}
          />
          <ContactButton
            name="Linkedin"
            href="https://www.linkedin.com/in/goetzeseb"
            Icon={LuLinkedin}
          />
        </div>
      </div>
    </section>
  );
}
