"use client";
import { formSchema } from "@/schema/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type FormTypes = z.infer<typeof formSchema>;
const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormTypes>();
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="w-full max-w-3xl flex flex-col  gap-3 mx-auto bg-white text-content shadow-2xl rounded-3xl p-5 md:p-10"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <label className="block text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="block bg-primary-lt/10 rounded-md w-full mt-1 p-2 accent-primary border-primary/10 focus:border-primary/40 border"
          type="text"
          id="name"
          autoComplete="name"
          {...register("name")}
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium" htmlFor="email">
          Your Email
        </label>
        <input
          className="block bg-primary-lt/10 rounded-md w-full mt-1 p-2 accent-primary border-primary/10 focus:border-primary/40 border"
          id="email"
          type="email"
          {...register("email")}
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="block bg-primary-lt/10 rounded-md w-full mt-1 p-2 accent-primary border-primary/10 focus:border-primary/40 border"
          id="phone"
          type="text"
          {...register("phone")}
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium" htmlFor="service">
          Service you are interested in
        </label>

        <select
          className="block bg-primary-lt/10 rounded-md w-full mt-1 p-2 text-sm accent-primary border-primary/10 focus:border-primary/40 border"
          id="service"
          {...register("service")}
        >
          <option value="">Select Service</option>
          <option value="web-design">Web Design</option>
          <option value="web-development">Web Development</option>
        </select>
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium" htmlFor="message">
          Your Message
        </label>
        <textarea
          rows={4}
          className="block bg-primary-lt/10 rounded-md w-full mt-1 p-2 accent-primary border-primary/10 focus:border-primary/40 border"
          id="message"
          {...register("message")}
        ></textarea>
      </div>

      <button
        className="bg-primary py-2 px-10 text-white font-medium  rounded-lg self-end"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
