"use client";
import { formSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";

type FormTypes = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const onSubmit: SubmitHandler<FormTypes> = async (formData) => {
    const data = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
    console.log(data);
    reset();
    router.push("/thank-you");
    setSuccessMessage(data.message);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div>
      <form
        className="w-full max-w-3xl flex flex-col  gap-3 mx-auto bg-white text-content shadow-2xl rounded-3xl p-5 md:p-10"
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
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <Controller
            control={control}
            name="phone"
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
            <p className="text-red-500 text-xs italic">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="w-full">
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
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
