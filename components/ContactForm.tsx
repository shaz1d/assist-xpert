"use client";
import { formSchema } from "@/schema/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type FormTypes = z.infer<typeof formSchema>;
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
      }),
    }).then((res) => {
      console.log(res.json());
    });
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
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name.message}</p>
        )}
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
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
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
        {errors.phone && (
          <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
        )}
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
        {errors.service && (
          <p className="text-red-500 text-sm font-medium">
            {errors.service.message}
          </p>
        )}
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
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
