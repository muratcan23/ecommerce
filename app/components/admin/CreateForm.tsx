"use client";

import { FieldValues, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });

  return (
    <div>
      <Heading text="CreateForm" />
      <Input
        placeholder="Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default CreateForm;
