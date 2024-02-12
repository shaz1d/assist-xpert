import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Linkbtn = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="px-10 py-3 bg-sky-500 text-white rounded-full font-semibold"
    >
      {children}
    </Link>
  );
};

export default Linkbtn;
