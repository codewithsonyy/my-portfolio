import React, { useForm } from "react-hook-form";

export function Form(_id) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input {...register("firstName")} /> */}
      <input name="name" {...register("name", { required: true })} />
      {errors.name && <p>Name is required.</p>}
      <textarea
        name="text"
        {...register("yourtext", { required: true })}
      ></textarea>
      {errors.text && <p>An actual comment is required.</p>}
      {/* <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>} */}
      <input type="submit" />
    </form>
  );
}
