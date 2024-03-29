import { cn } from "@/lib/utils";
import { Service } from "@/types";
import Reveal from "./Reveal";

type Props = {
  className?: string;
  service: Service;
  delay?: number;
};

const ServiceCard = ({ className, service, delay = 0.25 }: Props) => {
  return (
    <Reveal
      delay={delay}
      className={cn(
        className,
        "p-8 rounded-md bg-content cursor-pointer text-white w-full h-full relative before:h-20 before:w-20 before:bg-primary before:absolute before:top-2 before:right-2 before:-z-10 before:opacity-0 before:rounded-md hover:before:-top-1 hover:before:-right-1 hover:before:opacity-100 hover:bg-slate-800 transition duration-300 before:transition before:duration-300"
      )}
    >
      <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
      <p>{service.description}</p>
    </Reveal>
  );
};

export default ServiceCard;
