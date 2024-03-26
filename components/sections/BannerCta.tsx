import PrimaryButton from "../ui/PrimaryButton";
import Reveal from "../ui/Reveal";

const BannerCta = () => {
  return (
    <section className=" section bg-gradient-to-tr from-primary to-primary-lt">
      <div className=" container-x text-center">
        <Reveal delay={0.25}>
          <h1 className=" text-4xl md:text-6xl max-w-screen-md mx-auto mb-8 text-gray-800">
            Getting started is the easiest thing you&apos;ll do today.
          </h1>
        </Reveal>
        <Reveal delay={0.45}>
          <PrimaryButton
            className=" border-gray-800 text-gray-800 hover:shadow-gray-800/15"
            href="/hire"
          >
            Hire an Expert
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
};

export default BannerCta;
