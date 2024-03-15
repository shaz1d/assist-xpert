"use client";
import { formSchema } from "@/schema/schema";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { z } from "zod";

import "react-phone-number-input/style.css";

type FormTypes = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    control,
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
  const router = useRouter();

  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push("/thank-you");
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
        <Controller
          control={control}
          name="phone"
          rules={{ validate: (value) => isPossiblePhoneNumber(value) }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              className="relative mt-1 pl-1"
              onChange={onChange}
              value={value}
              international
              defaultCountry="US"
              id="phone"
            />
          )}
        />

        {errors.phone && (
          <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
        )}
      </div>
      <div className="w-full">
        <p>{process.env.SMTP_EMAIL}</p>
        <label className="block text-sm font-medium" htmlFor="service">
          Service you are interested in
        </label>

        <select
          className="block bg-primary-lt/10 rounded-md w-full mt-1 px-2 py-3 text-sm  accent-primary border-primary/10 focus:border-primary/40 border"
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
        className="bg-primary py-2 px-10 text-white font-medium  rounded-lg self-end disabled:text-white/60 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
