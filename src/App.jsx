import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import HookForm from "./components/HookForm/HookForm";

const App = () => {

  return (
    <>
      <div>
        <SimpleForm />
        <HookForm />
      </div>
    </>
  );
};

export default App;

// const {
//   register,
//   formState: { errors },
//   watch,
//   handleSubmit,
// } = useForm();

// const onSubmit = (data) => console.log("data", data);
// console.log("name", watch("name"));
// console.log("surname", watch("surname"));

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" placeholder="Enter name"/>
          <input {...register("surname")} type="text" placeholder="Enter surname"/>
          <input {...register("age", {max: 40, min: 10})} type="number" />
          <button type="submit">Send</button>
        </form> */
}
