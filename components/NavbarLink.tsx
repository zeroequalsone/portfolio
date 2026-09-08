import Link from "next/link";

type Props = {
  href: string;
  title: string;
  onClick: () => void;
};

export default function NavbarLink({ href, title, onClick }: Props) {
  return (
    <Link
      href={href}
      className="font-mono lowercase hover:bg-black hover:text-white px-2 py-1"
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
