"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type FormTypes = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormTypes>();
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Your Name</label>
      <input id="name" type="text" {...register("name")} />
    </form>
  );
};

export default ContactForm;
