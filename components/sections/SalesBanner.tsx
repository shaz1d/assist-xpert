import PrimaryButton from "../ui/PrimaryButton";

const SalesBanner = () => {
  return (
    <section className=" section bg-gradient-to-br from-primary to-primary-lt">
      <div className=" container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
          <div className=" space-y-5">
            <h2 className=" text-4xl tracking-wider leading-10 mb-10">
              Work can be stressful. <br /> Hiring doesn&apos;t have to be.
            </h2>
            <p className=" tracking-wider">
              When you realize you need help, the last thing you want is to
              spend hundreds of hours trying to find it.
              <br />
              <br />
              BELAY takes the hassle out of hiring by intentionally matching you
              with exceptional Virtual Assistants, Accounting Professionals, and
              Social Media Managers.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <PrimaryButton className="" href="/hire">
              Hire Expert
              <i className="bx bx-right-arrow-alt"></i>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesBanner;
