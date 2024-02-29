import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
      console.log(data)
  }
  
  return (
    <>
      <h1>Hook Form</h1>
      <div>
        <h2>Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
          <input {...register("name", { min: 3 } )} type="text" placeholder="Enter name"/>
          <input {...register("email")} type="text" placeholder="Enter email"/>
          <input {...register("password", { min: 6 })} type="number" placeholder="Enter password"/>
          <input {...register("password", { min: 6 })} type="number" placeholder="Enter again password"/>
          <button type="submit">Send</button>
          </form>
        <h2>Authorization Form</h2>
        <form>

        </form>
      </div>
    </>
  );
};

export default HookForm;
