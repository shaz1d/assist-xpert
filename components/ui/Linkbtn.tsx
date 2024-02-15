import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Linkbtn = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="pl-8 pr-5 py-3 uppercase tracking-wider transition bg-primary hover:bg-[#0089CA] hover:-translate-y-1 text-white rounded-md font-semibold inline-flex items-center gap-1"
    >
      {children}
      <ArrowRightIcon size={18} />
    </Link>
  );
};

export default Linkbtn;
