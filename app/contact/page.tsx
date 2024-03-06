import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-lt pt-32 pb-16">
        <div className="container-x">
          <h1 className=" text-center text-5xl mb-4 max-w-2xl mx-auto">
            Getting Started Is The Easiest Thing You’ll Do Today
          </h1>
          <p className="max-w-3xl mx-auto text-center">Ready to make a move?</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
