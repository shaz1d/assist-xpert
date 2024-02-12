import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Linkbtn from "./ui/Linkbtn";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full -mb-16 z-50 relative">
      <Container>
        <nav className="w-full h-16 flex justify-between items-center">
          <Link href={"/"}>
            <Image src="/assist-xpert-logo.svg" width={64} height={20} alt="" />
          </Link>
          <ul className="flex gap-8">
            <li className="">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="">
              <Link href={"/work"}>Work</Link>
            </li>
            <li className="">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <Linkbtn href="/contact">Lets Talk</Linkbtn>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
