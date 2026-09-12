import Link from "next/link";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

type Props = {
  variant: "orbit" | "linkbloom";
};

const PROJECT_LINKS = {
  orbit: {
    live: "https://orbit-two-sigma.vercel.app/",
    github: "https://github.com/zeroequalsone/orbit/",
  },
  linkbloom: {
    live: "https://linkbloom-two.vercel.app/",
    github: "https://github.com/zeroequalsone/linkbloom/",
  },
};

const BUTTON_STYLES = {
  orbit:
    "border-orbit-border shadow-[4px_4px_0px_0px_var(--color-orbit-shadow)] hover:shadow-[6px_6px_0px_0px_var(--color-orbit-shadow)] hover:text-black",
  linkbloom:
    "border-linkbloom-border shadow-[4px_4px_0px_0px_var(--color-linkbloom-shadow)] hover:shadow-[6px_6px_0px_0px_var(--color-linkbloom-shadow)]",
};

export default function WorkButtons({ variant }: Props) {
  const links = PROJECT_LINKS[variant];
  const style = BUTTON_STYLES[variant];

  return (
    <div className="mt-12 flex gap-4 font-mono text-sm uppercase font-bold">
      <Link
        href={links.live}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 border-2 px-4 py-3 flex justify-between items-center hover:-translate-y-1 hover:-translate-x-1 hover:bg-white transition-all active:translate-x-0 active:translate-y-0 active:shadow-none ${style}`}
      >
        Live App <LuArrowUpRight size={18} />
      </Link>
      <Link
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 border-2 px-4 py-3 flex justify-between items-center hover:-translate-y-1 hover:-translate-x-1 hover:bg-white transition-all active:translate-x-0 active:translate-y-0 active:shadow-none ${style}`}
      >
        Source Code <LuGithub size={18} />
      </Link>
    </div>
  );
}
