import PrimaryButton from "../ui/PrimaryButton";

const BannerCta = () => {
  return (
    <section className=" section bg-sky-400">
      <div className=" container text-center">
        <h1 className=" text-4xl md:text-6xl max-w-screen-md mx-auto mb-8 text-gray-800">
          Getting started is the easiest thing you'll do today.
        </h1>
        <PrimaryButton
          className=" border-gray-800 text-gray-800 hover:shadow-gray-800/15"
          href="/hire"
        >
          Hire an Expert
        </PrimaryButton>
      </div>
    </section>
  );
};

export default BannerCta;
