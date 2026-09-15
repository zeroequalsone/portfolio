import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  name: string;
  href: string;
  Icon: IconType;
};

export default function ContactButton({ name, href, Icon }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-6 py-3 hover:bg-white hover:text-black flex items-center gap-2 font-mono text-sm uppercase font-bold"
    >
      {name} <Icon size={16} aria-hidden="true" />
    </Link>
  );
}
