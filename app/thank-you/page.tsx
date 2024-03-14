import Image from "next/image";

const page = () => {
  return (
    <section className="w-full min-h-[600px] flex flex-col justify-center items-center">
      <Image
        src="/abstract-sale-busioness-background-banner-design-multipurpose.jpg"
        className="-z-10"
        fill
        alt="abstract busioness background"
      />
      <Image
        src="/astrick-check.svg"
        height={120}
        width={120}
        alt="Check Mark Icon"
      />
      <h1 className="text-6xl font-bold mt-10 mb-2">Thank You</h1>
      <h2 className="text-2xl font-semibold">Your Form Has Been Submitted</h2>
      <p>We will get back to you shortly.</p>
    </section>
  );
};

export default page;
