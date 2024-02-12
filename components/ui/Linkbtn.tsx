import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Linkbtn = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="px-10 py-3 transition bg-primary hover:bg-[#0089CA] text-white rounded-md font-semibold inline-block"
    >
      {children}
    </Link>
  );
};

export default Linkbtn;
