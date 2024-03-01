import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className: string;
};

const PrimaryButton = ({ href, children, className }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center tracking-widest font-medium gap-2 px-12 py-3 rounded-md border-2 border-gray-100 uppercase transition-all duration-200 hover:shadow-xl hover:shadow-gray-100/10",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
