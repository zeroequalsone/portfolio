import { LuGithub, LuLinkedin } from "react-icons/lu";
import ContactButton from "./ContactButton";
import CopyEmailLink from "./CopyEmailLink";

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

        <CopyEmailLink />
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
