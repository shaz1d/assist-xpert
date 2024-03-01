const ServicesAlt = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <a
          href="#"
          className="block bg-[url('/assistant.avif')] bg-cover bg-center px-12 py-28 relative group text-blue-950 hover:text-blue-100 duration-200"
        >
          <div className=" absolute inset-0 bg-sky-200  transition-all duration-200 group-hover:bg-sky-900/85"></div>
          <div className="relative flex flex-col space-y-3">
            <div className="mb-8 text-5xl">
              <i className="bx bx-headphone"></i>
            </div>
            <h2 className=" text-4xl tracking-widest">
              Virtual Assistant Service
            </h2>
            <p className="tracking-widest text-slate-500 group-hover:text-slate-300 leading-7">
              Don’t let administrative overload keep you from focusing on what
              matters most. Our dedicated Virtual Assistants are your personal
              superheroes—no phone booth required.
            </p>
          </div>
        </a>

        <a
          href="#"
          className="block bg-[url('/accounting.jpg')] bg-cover bg-center px-12 py-28 relative group text-blue-950 hover:text-blue-100 duration-200"
        >
          <div className=" absolute inset-0 bg-sky-200  transition-all duration-200 group-hover:bg-sky-900/85"></div>
          <div className="relative flex flex-col space-y-3">
            <div className="mb-8 text-5xl">
              <i className="bx bx-money"></i>
            </div>
            <h2 className=" text-4xl tracking-widest">
              Accounting Professionals
            </h2>
            <p className="tracking-widest text-slate-500 group-hover:text-slate-300 leading-7">
              From Bookkeepers and Payroll Processing to fractional CFO and
              e-commerce support, we have the team of Accounting Professionals
              you need to stop worrying about the books and start growing your
              organization.
            </p>
          </div>
        </a>

        <a
          href="#"
          className="block bg-[url('/social-media-manager.jpg')] bg-cover bg-center px-12 py-28 relative group text-blue-950 hover:text-blue-100 duration-200"
        >
          <div className=" absolute inset-0 bg-sky-200  transition-all duration-200 group-hover:bg-sky-900/85"></div>
          <div className="relative flex flex-col space-y-3">
            <div className="mb-8 text-5xl">
              <i className="bx bx-share-alt"></i>
            </div>
            <h2 className=" text-4xl tracking-widest">Social Media Managers</h2>
            <p className="tracking-widest text-slate-500 group-hover:text-slate-300 leading-7">
              Say goodbye to the daily “what should we post” worry with BELAY
              Social Media Managers. Grow your audience and build a robust
              online presence—while you work on something else.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicesAlt;
